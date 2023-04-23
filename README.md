# V Open Source Community Association Blog

[![Association Official Project][AssociationOfficialBadge]][AssociationUrl]
[![Build Status][WorkflowBadge]][WorkflowUrl]

Source code for of [blog.vosca.dev](https://blog.vosca.dev).

## Build locally

To build the blog, run the following command:

```bash
npm install
npm run build
```

This will install all dependencies, and generate the blog in the `public` directory.

To run blog server, run the following command:

```bash
npm run serve
```

If you want to change styles, run the following command to watch for changes:

```bash
npm run sass-watch
```

## License

This project is under the **MIT License**. See the
[LICENSE](https://github.com/vlang-association/blog/blob/master/LICENSE)
file for the full license text.

[AssociationOfficialBadge]: https://vosca.dev/badge.svg

[WorkflowBadge]: https://github.com/vlang-association/blog/actions/workflows/content-ci.yml/badge.svg

[AssociationUrl]: https://vosca.dev

[WorkflowUrl]: https://github.com/vlang-association/blog/commits/main
