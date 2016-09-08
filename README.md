marko-vdom
==========

This module provides an optimized virtual DOM implementation where each virtual DOM node is API compatible with real DOM nodes for the minimal subset that is required to support DOM diffing/patching using [morphdom](https://github.com/patrick-steele-idem/morphdom). Each virtual DOM node supports the following properties and methods required by [morphdom](https://github.com/patrick-steele-idem/morphdom):

- `firstChild`
- `nextSibling`
- `nodeType`
- `nodeName`
- `nodeValue`
- `attributes`
- `value`
- `selected`
- `disabled`
- `hasAttributeNS(namespaceURI, name)`

`marko-vdom` is namespace aware and will work correctly with SVG and MathML elements.

While `marko-vdom` exposes an API that can be used directly, the terse API is designed to be used with a compiler that generates JavaScript code.

[![Build Status](https://travis-ci.org/marko-js/marko-vdom.svg?branch=master)](https://travis-ci.org/marko-js/marko-vdom)
[![Coverage Status](https://coveralls.io/repos/github/marko-js/marko-vdom/badge.svg?branch=master)](https://coveralls.io/github/marko-js/marko-vdom?branch=master)
[![NPM](https://img.shields.io/npm/v/marko-vdom.svg)](https://www.npmjs.com/package/marko-vdom)

# Usage

## Create an element with a fixed number of attributes and a fixed number of children

```javascript
var createElement = require('marko-vdom').createElement;

createElement('div', 2 /* attrCount */, 2 /* childCount */)
    .a('class', data.myClassName)
    .a('onclick', 'doSomething()')
    .e('span', 0, 1)
        .e('b', 0, 1)
            .text('Hello World!')
    .e('a', 1, 1)
        .a('href', 'http://ebay.com')
        .t('eBay')
```

## Dynamic HTML with a unknown number of children

```javascript
var createElement = require('marko-vdom').createElement;

var el = createElement('div', 2 /* attrCount */, -1)
    .a('class', data.myClassName)
    .a('onclick', 'doSomething()');

el.appendChild(createElement('span', 0, 0));
```

## Static subtree

```javascript
var createElement = require('marko-vdom').createElement;

var staticLink = createElement('a', 1, 1, 'abc123' /* key */)
    .a('href', 'http://ebay.com')
    .t('eBay')

function render() {
    createElement('div', 0, 1 /* childCount */)
        .n(staticLink);
}
```

## Static attributes for a non-static element

```javascript
var createElement = require('marko-vdom').createElement;
var createAttributes = require('marko-vdom').createAttributes;

var attrs0 = createAttributes({
    'class': 'foo'
    'onclick': 'doSomething()'
});

function render() {
    createElement('div', -1, 3 /* childCount */)
        .as(attrs0)
        .text('Hello ' + data.name + '!');    
}
```

## Async document fragments

```javascript
var createElement = require('marko-vdom').createElement;

var div = createElement('div');
documentFragment.appendChild(createElement('div'));

var documentFragment = div.beginAsync();

documentFragment.appendChild(createElement('span'));

/*

Output DOM:

<div>
    <span></span>
</div>
*/

```

# API

## `marko-vdom`

### Methods

#### `createElement(tagName, attrCount, childCount, key)`

Returns a new [HTMLElement](#HTMLElement).

#### `createText(value)`

Returns a new [Text](#Text).

#### `createComment(value)`

Returns a new [Comment](#Comment).

#### `createAttributes(attrCount)`

Returns a new [AttributeCollection](#AttributeCollection).

#### `createDocumentFragment()`

Returns a new [DocumentFragment](#DocumentFragment)

---------------

<a name="AttributeCollection"></a>

## `AttributeCollection`

### Methods

<a name="AttributeCollection-a"></a>

#### `a(name, value)`

<a name="AttributeCollection-as"></a>

#### `as(attributes)`

---------------

<a name="Comment"></a>

## `Comment`

<a name="DocumentFragment"></a>

---------------

## `DocumentFragment`

<a name="HTMLElement"></a>

---------------

## `HTMLElement`

### Constructors

#### `HTMLElement(tagName, attrCount, childCount, key)`

Parameters:

- __tagName__ - The tag name for the new HTML element (`String`)
- __attrCount__ - The number of attributes (if known) (an integer, `null` or `undefined`)
- __childCount__ - The number of child nodes (if known) (an integer, `null` or `undefined`)
- __key__ - A key for static nodes to use for `isSameNode()` checks

#### `HTMLElement(htmlElement)`

Used to do a shallow clone of another `HTMLElement`

### Properties

#### `nodeType`

Always set to `1`

### Methods

#### `a(name, value)`

See [AttributeCollection#a](#AttributeCollection-a)

#### `actualize()`

#### `as(name, value)`

See [AttributeCollection#a](#AttributeCollection-as)

#### `c(value)`

#### `cloneNode()`

Performs a shallow clone of the node (`nextSibling` and `parentNode` will be `undefined` since a cloned node will always start out as detached)

#### `e(tagName, attrCount, childCount)`

#### `hasAttributeNS(namespaceURI, name)`

#### `isSameNode(otherNode)`

Called by `morphdom` to determine if the target `HTMLElement` (either virtual or real) node is the same as the current node. The `key` passed in to the constructor is used to do determine if the other node is the "same" node. If the other node is a real DOM node then the key is pulled from the `data-markokey` attribute.

#### `n(node)`

#### `t(value)`

See [AttributeCollection#a](#AttributeCollection-as

---------------

<a name="Text"></a>

## `Text`
