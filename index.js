'use strict'
const bintemp = require('./bintemp')

let html = '<title>{{title}}</title><div>{{content}}</div>'

const data = {
  title:"Test",
  content:"Hello World"
}

html = bintemp(html,data)

console.log(html);
