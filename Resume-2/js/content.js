const css1 = `/* 
 * 面试官你好，我是卜宇星
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}
/* 我需要一点代码高亮 */
.token.selector{ color: #690; }
.token.property{ color: #905; }
/* 加一个呼吸效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}
/* 现在正式开始 */
/* 我需要一张白纸 */
#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}
#paper > .content {
 display: block;
}
/* 于是我就可以在白纸上写字了，请看右边 */
`;
const css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`;

const md = `
# Resume

## Basic info. 基本信息

- 卜宇星 / 21 / 男

- 英语水平: CET-6 ，可以较为流畅的阅读英文文档和书籍

- 学历： 本科

- 手机：18009298575

- 邮箱: chesterbu1997@gmail.com

- 博客地址: https://github.com/ChesterBu/Blog

- GitHub地址: https://github.com/ChesterBu

****

## Skill. 技能清单

### HTML / CSS

- 熟悉HTML(5)、CSS(3),能够编写符合W3C规范的HTML和CSS

### JavaScript

- 熟悉原生JavaScript

### NodeJs

- 熟悉NodeJs，有Express使用经验

### 框架

- 熟悉underscore.Js，JQuery
- 熟悉vue.js，自己实现过简单的MVVM框架

****

## 个人作品
`;

const css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`;

export {css1,css2,css3,md};