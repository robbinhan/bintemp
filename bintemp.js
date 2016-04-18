'use strict'

function bintemp(html,data) {
  if (isObject(data) !== true) {
    return false;
  }

  for(let k in data) {
    let v = data[k]
    let patten = `{{${k}}}`
    let re = new RegExp(patten,"g");
    html = html.replace(re,v);
  }

  return html
}

function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = bintemp
