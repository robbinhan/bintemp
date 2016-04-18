'use strict'
let html = ''
for(let i=0; i<10000; i++) {
  html += '<title>{{title}}</title><div>{{content}}</div>'
}

const data = {
  title:"Test",
  content:"Hello World",
//  content1:"Hello World",
//  content2:"Hello World",
//  content3:"Hello World",
//  content4:"Hello World",
//  content5:"Hello World",
//  content6:"Hello World",
//  content7:"Hello World",
//  content8:"Hello World",
//  title1:"Test",
//  title2:"Test",
//  title3:"Test",
//  title4:"Test",
//  title5:"Test",
//  title6:"Test",
//  title7:"Test",
//  title8:"Test"
}

for(let i=0; i<100000;i++) {
  for(let k in data) {
    let v = data[k]
    let patten = `{{${k}}}`
    let re = new RegExp(patten,"g");
    html = html.replace(re,v);
  }
}

console.log(html);
