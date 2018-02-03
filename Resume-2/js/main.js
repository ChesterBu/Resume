import {
    css1,
    css2,
    css3,
    md
} from './content.js';


function writeCss(prefix, code) {
    let domCode = document.querySelector('#code');
    let n = 0;
    return new Promise((resolve, reject) => {
        let id = setInterval(() => {
            n += 1;
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = prefix + code.substring(0, n);
            domCode.scrollTop = domCode.scrollHeight;
            if (n >= code.length) {
                window.clearInterval(id);
                resolve();
            }
        }, 70);
    });

}

function writeMarkdown(markdown) {
    let domPaper = document.querySelector('#paper>.content');
    let n = 0;
    return new Promise((resolve, reject) => {
        let id = setInterval(() => {
            n += 1;
            domPaper.innerHTML = markdown.substring(0, n);
            domPaper.scrollTop = domPaper.scrollHeight;
            if (n >= markdown.length) {
                window.clearInterval(id);
                resolve();
            }
        }, 35);
    });

}

function createPaper() {
    let paper = document.createElement('div');
    paper.id = 'paper';
    let content = document.createElement('pre');
    content.className = 'content';
    paper.appendChild(content);
    document.body.appendChild(paper);
}

function convertMarkdownToHtml() {
    let div = document.createElement('div');
    div.className = 'html markdown-body';
    div.innerHTML = marked(md);
    let markdownContainer = document.querySelector('#paper > .content');
    markdownContainer.replaceWith(div);
}


async function animateResume() {
    await writeCss('', css1);
    createPaper();
    await writeMarkdown(md);
    await writeCss(css1, css2);
    convertMarkdownToHtml();
    await writeCss(css1 + css2, css3);
}

animateResume();