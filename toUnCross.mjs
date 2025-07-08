import fs from 'fs';

console.time('转换耗时');
const distPath = './dist/index.html';
let htmlText = fs.readFileSync(distPath, 'utf8');

// 修改正则表达式以匹配两种情况
let resultText = htmlText
  .replace(/<(script|link)([^>]*)crossorigin="anonymous"([^>]*)>/g, '<$1$2$3>')
  .replace(/<(script|link)([^>]*)crossorigin([^>]*)>/g, '<$1$2$3>');

fs.writeFileSync(distPath, resultText, 'utf8');
console.timeEnd('转换耗时');
