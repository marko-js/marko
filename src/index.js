'use strict';

var HTMLElement = require('./HTMLElement');
var Text = require('./Text');
var Comment = require('./Comment');
var DocumentFragment = require('./DocumentFragment');

function createElement(tagName, attrs, childCount, key) {
    return new HTMLElement(tagName, attrs, childCount, key);
}

function createText(value) {
    return new Text(value);
}

function createComment(value) {
    return new Comment(value);
}

function createDocumentFragment() {
    return new DocumentFragment();
}

exports.createElement = createElement;
exports.createText = createText;
exports.createComment = createComment;
exports.createDocumentFragment = createDocumentFragment;