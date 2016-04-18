require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"bintemp":[function(require,module,exports){
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

},{}]},{},[]);
