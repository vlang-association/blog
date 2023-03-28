document.addEventListener('DOMContentLoaded', function () {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach((code) => {
        const codeBlock = code.parentElement;
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-button');
        copyButton.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="20" width="20" stroke="rgba(128,128,128,1)"
     stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"></path>
</svg>`;

        codeBlock.appendChild(copyButton);

        copyButton.addEventListener('click', () => {
            const code = codeBlock.querySelector('code');
            try {
                navigator.clipboard.writeText(code.textContent);
                copyButton.classList.add("copy-success")
                setTimeout(() => {
                    copyButton.classList.remove("copy-success")
                }, 1000)
            } catch (err) {
                copyButton.classList.add("copy-error")
                setTimeout(() => {
                    copyButton.classList.remove("copy-error")
                }, 1000)

                console.log(e)
            }
        })
    })
})
