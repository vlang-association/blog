module main

import os
import strings

const docs_path = 'content'

__global counter = 0

fn generate_json_line(filepath string) ?string {
	if !filepath.ends_with('.md') {
		return none
	}
	content := os.read_file(filepath) or { return '' }
	lines := content.split_into_lines()

	titles := lines.filter(it.starts_with('title:'))

	if titles.len == 0 {
		return none
	}

	title := titles.first().trim_string_left('title:').trim(' "')
	body := lines.join('\\n').replace('\u0009', '').replace('"', '\\"')

	folder := if filepath.contains('/people/') { 'people/' } else { '' }
	url := 'https://blog.vosca.dev/${folder}' + os.file_name(filepath).trim_string_right('.md')

	return '{ "id": ${counter++}, "title": "${process_content(title)}", "body": "${process_content(body)}", "url": "${url}" },'
}

fn main() {
	mut result := strings.new_builder(100)
	mut builder := &result

	result.write_string('[\n')

	os.walk(docs_path, fn [mut builder] (file string) {
		line := generate_json_line(file) or { return }
		builder.write_string(line + '\n')
	})

	result.write_string(']')
	os.write_file('blog_index.json', result.str())!
}

fn process_content(content string) string {
	return content
		.replace('\n', ' ')
		.replace('\\', '\\\\')
		.replace('\u0009', '')
		.replace('"', '\\"')
}
