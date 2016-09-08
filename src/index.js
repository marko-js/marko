'use strict';

var HTMLElement = require('./HTMLElement');
var Text = require('./Text');
var Comment = require('./Comment');
var AttributeCollection = require('./AttributeCollection');
var DocumentFragment = require('./DocumentFragment');

function createElement(tagName, attrCount, childCount) {
    return new HTMLElement(tagName, attrCount, childCount);
}

function createText(value) {
    return new Text(value);
}

function createComment(value) {
    return new Comment(value);
}

function createAttributes(attrCount) {
    return new AttributeCollection(attrCount);
}

function createDocumentFragment() {
    return new DocumentFragment();
}

exports.createElement = createElement;
exports.createText = createText;
exports.createComment = createComment;
exports.createAttributes = createAttributes;
exports.createDocumentFragment = createDocumentFragment;