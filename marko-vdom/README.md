marko-vdom
==========

This module provides an optimized virtual DOM implementation where each virtual DOM node is API compatible with real DOM nodes for the minimal subset that is required to support DOM diffing/patching using [morphdom](https://github.com/patrick-steele-idem/morphdom).

[![Build Status](https://travis-ci.org/marko-js/marko-vdom.svg?branch=master)](https://travis-ci.org/marko-js/marko-vdom)
[![Coverage Status](https://coveralls.io/repos/github/marko-js/marko-vdom/badge.svg?branch=master)](https://coveralls.io/github/marko-js/marko-vdom?branch=master)
[![NPM](https://img.shields.io/npm/v/marko-vdom.svg)](https://www.npmjs.com/package/marko-vdom)

# Overview

Each virtual DOM node supports the following properties and methods required by [morphdom](https://github.com/patrick-steele-idem/morphdom):

- `node.firstChild`
- `node.nextSibling`
- `node.nodeType`
- `node.nodeName`
- `node.namespaceURI`
- `node.nodeValue`
- `node.attributes` <sup><a href="#attributes">[1]</a><sup>
- `node.value`
- `node.selected`
- `node.disabled`
- `node.actualize(document)` <sup><a href="#actualize">[2]</a><sup>
- `node.hasAttributeNS(namespaceURI, name)`
- `node.isSameNode(anotherNode)` <sup><a href="#isSameNode">[3]</a><sup>
- `node.assignAttributes(targetNode)` <sup><a href="#assignAttributes">[4]</a><sup>

NOTES:

1. <a name="attributes"></a>Unlike with real DOM nodes, `node.attributes` can either be an `Array` of [Attr](https://developer.mozilla.org/en-US/docs/Web/API/Attr) objects or an `Object` (where each property represents an attribute. e.g., `{ "class": "foo", "id": "bar" }`)
2. <a name="actualize"></a>In addition to the standard DOM node methods and properties, a virtual DOM node must also provide a `node.actualize(document)` method. The `node.actualize(document)` will be called when the virtual DOM node needs to be upgraded to a real DOM node so that it can be moved into the real DOM.
3. <a name="isSameNode"></a>A virtual DOM node may choose to implement `isSameNode(anotherNode)` to short-circuit diffing/patching a particular DOM subtree by treating two nodes as the "same"
4. <a name="assignAttributes"></a>A virtual DOM node may choose to implement the non-standard `assignAttributes(targetNode)` to optimize copying the attributes from the virtual DOM node to the target DOM node

`marko-vdom` is namespace aware and will work correctly with SVG and MathML elements.

While `marko-vdom` exposes an API that can be used directly, the terse API is designed to be used with a compiler that generates JavaScript code.

# Usage

## Create an element with a fixed number of attributes and a fixed number of children

```javascript
var createElement = require('marko-vdom').createElement;

createElement('div', { class: 'foo', onclick: 'doSomething()' }, 2 /* childCount */)
    .e('span', null, 1)
        .e('b', null, 1)
            .t('Hello World!')
    .e('a', { href: 'http://ebay.com' }, 1)
        .t('eBay')
```

The above code will generate a virtual DOM tree that mirrors the following:

```html
<div class="foo" onclick="doSomething()">
    <span>
        <b>Hello World!</b>
    </span>
    <a href="http://ebay.com">eBay</a>
</div>
```

## Dynamic HTML with a unknown number of children

```javascript
var createElement = require('marko-vdom').createElement;

var el = createElement('div', { class: 'foo' });
el.appendChild(createElement('span', { class: 'bar' }));
```

The above code will generate a virtual DOM tree that mirrors the following:

```html
<div class="foo">
    <span class="bar"></span>
</div>
```

## Static subtree

```javascript
var createElement = require('marko-vdom').createElement;

var staticLink = createElement('a', { href: 'http://ebay.com' }, 1 /* childCount */, 'abc123' /* key */)
    .t('eBay')

function render() {
    createElement('div', null, 1 /* childCount */)
        .n(staticLink);
}
```

The above code will generate a virtual DOM tree that, when converted to a real DOM, will be the following:

```html
<div>
    <a href="http://ebay.com" data-marko-same-id="abc123">
        eBay
    </a>
</div>
```

For the static link, both the virtual DOM node and the real DOM node will be marked with an "id" that identifies the two nodes as the "same" node in order to short-circuit DOM/diffing patching. That is:

```javascript
var realStaticLink = staticLink.actualize(document);
console.log(staticLink.isSameNode(realStaticLink)); //Output: true
```

## Document fragments

Document fragments are containers for child nodes that can be appended as children nodes, but the actual `DocumentFragment` node is never directly visited when walking the DOM using `node.firstChild` and `node.nextSibling`. Instead, the children (if any) of a `DocumentFragment` node are treated as direct children of the parent of the `DocumentFragment` node. A `DocumentFragment` node can be modified with new children even after it has been inserted into the DOM.

```javascript
var createElement = require('marko-vdom').createElement;

var div = createElement('div');
documentFragment.appendChild(createElement('div'));

var documentFragment = div.appendDocumentFragment();
documentFragment.appendChild(createElement('span', { class: 'foo' }));
documentFragment.appendChild(createElement('span', { class: 'bar' }));

/*

Output DOM:

<div>
    <span class="foo"></span>
    <span class="bar"></span>
</div>
*/

```

<a name="benchmarks"></a>

# Benchmarks

This library includes some benchmarks to compare performance with the real DOM (and React). To run the benchmarks:

```
npm run benchmark
```

This will open a web page in your browser that you can use to run a variety of benchmarks.

We are interested in the following performance characteristics:

- <b>Creation time</b> - the time it takes to construct a [virtual] DOM tree
- <b>Walk time</b> - the time it takes to walk a [virtual] DOM tree using `firstChild` and `nextSibilng`

We encourage you to run the benchmarks on your machine and in various browsers. If you see any problems with the benchmarks, or if you would like clarifying information please open a Github issue.

Please see [Benchmark Results](./docs/benchmark-results.md) for more detailed numbers.

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

---------------

<a name="DocumentFragment"></a>

## `DocumentFragment`

---------------

<a name="HTMLElement"></a>

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

#### `a(name, value)` : [`Node`](#Node)

See [AttributeCollection#a](#AttributeCollection-a)

#### `actualize(document)` : `HTMLElement`

Converts the virtual `HTMLElement` tree to a real `HTMLElement` tree using the provided `document`.

#### `as(name, value)` : [`Node`](#Node)

See [AttributeCollection#a](#AttributeCollection-as)

#### `appendDocumentFragment()` : [`DocumentFragment`](#DocumentFragment)

See [Node#appendDocumentFragment](#Node-appendDocumentFragment)

#### `c(value)` : [`Node`](#Node)

Shorthand method for creating a [Comment](#Comment) node and appending it as a child.

#### `cloneNode()` : [`HTMLElement`](#HTMLElement)

Performs a shallow clone of the node (`nextSibling` and `parentNode` will be `undefined` since a cloned node will always start out as detached)

#### `e(tagName, attrCount, childCount, key)` : [`Node`](#Node)

Shorthand method for creating an [HTMLElement](#HTMLElement) node and appending it as a child.

#### `hasAttributeNS(namespaceURI, name)` : `boolean`

#### `isSameNode(otherNode)` : `boolean`

Called by `morphdom` to determine if the target `HTMLElement` (either virtual or real) node is the same as the current node. The `key` passed in to the constructor is used to do determine if the other node is the "same" node. If the other node is a real DOM node then the key is pulled from the `data-markokey` attribute.

#### `n(node)` : [`Node`](#Node)

Shorthand method for appending a node as a child. The provided is automatically cloned (using a shallow clone) since it is assumed that this method will be called to append a static/memoized DOM node and the original DOM node should not be modified.

#### `t(value)` : [`Node`](#Node)

Shorthand method for creating a [Text](#Text) node and appending it as a child.

---------------

<a name="Node"></a>

## `Node`

### Properties

#### `firstChild` : [`Node`](#Node)

Returns the first child node

#### `nextSibling` : [`Node`](#Node)

Returns the next sibling node

### Methods

<a name="Node-appendDocumentFragment"></a>

#### `appendDocumentFragment()` : [`DocumentFragment`](#DocumentFragment)

Creates and appends a new [DocumentFragment](#DocumentFragment) node and appends it as a child and the newly created [DocumentFragment](#DocumentFragment) node is returned.

#### `removeChildren()`

Clears out all child nodes



---------------

<a name="Text"></a>

## `Text`
