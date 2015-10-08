(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var animate;

console.log("Hello world!");

console.log("It works!");

animate = function(formId) {
  var animationRun, btn, elAnimate, elCheck, getElements, icons, inputs;
  getElements = function(elClass) {
    return document.getElementById(formId).getElementsByClassName(elClass);
  };
  inputs = getElements("input");
  icons = getElements("icon");
  btn = getElements("btn-animate")[0];
  elAnimate = function(el) {
    return el.classList.toggle("animate");
  };
  elCheck = function(el) {
    return el.classList.contains("is-checked");
  };
  animationRun = function() {
    var i, icon, input, j, len, len1;
    for (i = 0, len = inputs.length; i < len; i++) {
      input = inputs[i];
      if (elCheck(input)) {
        elAnimate(input);
      }
    }
    for (j = 0, len1 = icons.length; j < len1; j++) {
      icon = icons[j];
      if (elCheck(icon)) {
        elAnimate(icon);
      }
    }
    return btn.classList.toggle("is-on");
  };
  return btn.addEventListener("click", animationRun);
};

animate("form-animate-1");

animate("form-animate-2");

animate("form-animate-3");

},{}]},{},[1]);
