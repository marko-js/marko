raptor-templates
================

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Overview](#overview)
- [Sample Template](#sample-template)
- [Installation](#installation)
- [Usage](#usage)
	- [Template Rendering](#template-rendering)
		- [Callback API](#callback-api)
		- [Streaming API](#streaming-api)
	- [Browser-side Rendering](#browser-side-rendering)
		- [Using the RaptorJS Optimizer](#using-the-raptorjs-optimizer)
		- [Using Browserify](#using-browserify)
	- [Template Compilation](#template-compilation)
- [Language Guide](#language-guide)
	- [Template Directives Overview](#template-directives-overview)
	- [Text Replacement](#text-replacement)
	- [Expressions](#expressions)
	- [Variables](#variables)
	- [Conditionals](#conditionals)
		- [if...else-if...else](#ifelse-ifelse)
		- [choose…when…otherwise](#choose…when…otherwise)
		- [Shorthand conditionals](#shorthand-conditionals)
	- [Looping](#looping)
		- [for](#for)
	- [Macros](#macros)
		- [def](#def)
		- [invoke](#invoke)
	- [Structure Manipulation](#structure-manipulation)
		- [attrs](#attrs)
		- [content](#content)
		- [replace](#replace)
		- [strip](#strip)
	- [Helpers](#helpers)
	- [Custom Tags and Attributes](#custom-tags-and-attributes)
	- [Taglibs](#taglibs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Overview
Raptor Templates is an asynchronous, high performance, _HTML-based_ templating language that can be used in Node.js or in the browser. The directives in Raptor Template files are less obtrusive and more powerful because the templating language understands the structure of the HTML document.

# Sample Template
A basic template with text replacement, looping and conditionals is shown below:
```html
Hello ${data.name}!

<ul c:if="notEmpty(colors)">
    <li style="color: $color" c:for="color in data.colors">
        $color
    </li>
</ul>
<div c:else>
    No colors!
</div>
```

If rendering using the following input data:
```javascript
{
    colors: ["red", "green", "blue"]
}
```

The output of rendering the above sample template would be the following:
```html
<ul><li>red</li><li>green</li><li>blue</li></ul>
```

For comparison, given the following input data consisting of an empty array of colors:

```javascript
{
    colors: []
}
```

The output would be the following:

```html
<div>No colors!</div>
```

Raptor Templates also supports custom tags so you can easily extend the HTML grammar to support things like the following:

```html
Welcome to Raptor Templates!

<ui:tabs>
    <ui:tab label="Overview"></ui:tab>
    <ui:tab label="Language Guide"></ui:tab>
    <ui:tab label="JavaScript API"></ui:tab>
</ui:tabs>
```

# Installation

To install the `raptor-templates` module into your project you should use the following command:
```bash
npm install raptor-templates --save
```

To install the optional `rhtmlc` command line interface to compile templates you can use the following command:
```bash
npm install raptor-templates --global
```

# Usage

## Template Rendering

### Callback API
```javascript
var raptorTemplates = require('raptor-templates');
raptorTemplates.render('template.rhtml', {
        name: 'Frank',
        count: 30
    },
    function(err, output) {
        if (err) {
            console.error('Rendering failed');
            return;
        }

        console.log('Output HTML: ' + output);
    });
```

### Streaming API
```javascript
var raptorTemplates = require('raptor-templates');
var out = require('fs').createWriteStream('index.html', 'utf8');

// Render the template to 'index.html'
raptorTemplates
    .stream('template.rhtml', {
        name: 'Frank',
        count: 30
    })
    .pipe(out);
```

## Browser-side Rendering

Given the following module code that will be used to render a template on the client-side:

_run.js_:
```javascript
var raptorTemplates = require('raptor-templates');
var templatePath = require.resolve('./hello.rhtml');
raptorTemplates.render(templatePath, {name: 'John'}, function(err, output) {
    document.body.innerHTML = output;
});
```

You can then bundle up the above program for running in the browser using either [raptor-optimizer](https://github.com/raptorjs3/raptor-optimizer) (recommended) or [browserify](https://github.com/substack/node-browserify).


### Using the RaptorJS Optimizer

The `raptor-optimizer` CLI can be used to generate resource bundles that includes all application modules and all referenced Raptor Template files using a command similar to the following:
```bash
# First install the raptor-optimizer
npm install raptor-optimizer --global

raptor-optimizer --main run.js --name my-page
```

This will produce a JSON file named `build/my-page.html.json` that contains the HTML markup that should be used to include the required JavaScript and CSS resources that resulted from the page optimization. 

Alternatively, you can inject the HTML markup into a static HTML file using the following command:

```bash
raptor-optimizer --main run.js --name my-page --inject-into my-page.html
```


### Using Browserify

The `rhtmlify` transform for browserify must be enabled in order to automatically compile and include referenced Raptor Template files.

```bash
# Install the rhtmlify plugin from npm:
npm install rhtmlify --save

# Build the browser bundle:
browserify -t rhtmlify run.js > browser.js
```


## Template Compilation

The Raptor Templates compiler produces a CommonJS module as output. This makes it easier to load Raptor Template files from other modules.


You can either use the command line interface or the JavaScript API to compile a Raptor Template file. To use the CLI you must first install the `raptor-templates` module globally using the following command:
```bash
npm install raptor-templates --global
```

You can then compile single templates using the following command:
```bash
rhtmlc hello.rhtml
```

This will produce a file named `hello.rhtml.js` next to the original file.

You can also compile multiple templates using a glob pattern as shown in the following sample command:

```bash
rhtmlc src/**/*.rhtml
```

Alternatively, you can use the JavaScript API to compile a module as shown in the following sample code:
```javascript
require('raptor-templates/compiler').compileFile(path, function(err, src) {
    // Do something with the compiled output 
});
```

# Language Guide

## Template Directives Overview

Almost all of the Raptor templating directives can be used as either an attribute or as an element. For example:

_Applying directives using attributes:_
```html
<!-- Colors available -->
<ul c:if="notEmpty(colors)">
    <li c:for="color in colors">
        $color
    </li>
</ul>
 
<!-- No colors available -->
<div c:if="empty(colors)">
    No colors!
</div>
```

_Applying directives using elements:_
```html
<!-- Colors available -->
<c:if test="notEmpty(colors)">
    <ul>
        <c:for each="color in colors">
            <li>
                $color
            </li>
        </c:for>
    </ul>
</c:if>
  
<!-- No colors available -->
<c:if test="empty(colors)">
    <div>
        No colors!
    </div>
</c:if>
```

The disadvantage of using elements to control structural logic is that they change the nesting of the elements which can impact readability. For this reason it is often more suitable to use attributes.

## Text Replacement

Dynamic text is supported using either `$<variable-reference>` or `${<javascript-expression}`.

Examples:
```html
Hello $data.name!
Hello ${data.name}!
Hello ${data.name.toUpperCase()}!
```

By default, all special HTML characters will be escaped in dynamic text to prevent Cross-site Scripting (XSS) Attacks. To disable HTML escaping, you can use `$!` as shown in the following sample code:

```html
Hello $!{data.name}! <!-- Do not escape -->
```

## Expressions

Wherever expressions are allowed, they are treated as JavaScript expressions copied out to the compiled template verbatim. However, you can choose to use alternate versions of the following JavaScript operators:

JavaScript Operator | Raptor Equivalent
------------------- | -----------------
`&&` | `and`
`||` | `or`
`===` | `eq`
`!==` | `ne`
`<` | `lt`
`>` | `gt`
`<=` | `le`
`>=` | `ge`

## Variables

Input data passed to a template is made available using a special `data` variable. It's possible to declare your own variables as shown in the following sample code:

```html
<c:var name="name" value="data.name.toUpperCase()" />
```

## Conditionals

### if...else-if...else

Any element or fragment of HTML can be made conditional using the c:if, c:else-if or c:else directive.

_Applied as an attribute:_
```html
<!--Simple if-->
<div c:if="someCondition">
    Hello World
</div>

<!--Complex if-->
<div c:if="test === 'a'">
    A
</div>
<div c:else-if="test === 'b'">
    B
</div>
<div c:else-if="test === 'c'">
    C
</div>
<div c:else>
    Something else
</div>
```

_Applied as an element:_
```html
<!-- Colors available -->
<!--Simple if-->
<c:if test="someCondition">
    <div>
        Hello World
    </div>
</c:if>

<!--Complex if-->
<c:if test="test === 'a'">
    <div>
        A
    </div>
</c:if>
<c:else-if test="test === 'b'">
    <div>
        B
    </div>
</c:else-if>
<c:else-if test="test === 'c'">
    <div>
        C
    </div>
</c:else-if>
<c:else>
    <div>
        Something else
    </div>
</c:else>
```

### choose…when…otherwise

The `c:choose` directive, in combination with the directives `c:when` and `c:otherwise` provides advanced conditional processing for rendering one of several alternatives. The first matching `c:when` branch is rendered, or, if no `c:when` branch matches, the `c:otherwise` branch is rendered.

_Applied as an attribute:_
```html
<c:choose>
    <c:when test="myVar === 'A'">
        <div>A</div>
    </c:when>
    <c:when test="myVar === 'B'">
        <div>B</div>
    </c:when>
    <c:otherwise>
        <div>Something else</div>
    </c:otherwise>
<c:choose>
```

_Applied as an element:_
```html
<c:choose>
    <div c:when="myVar === 'A'">
        A
    </div>
    <div c:when="myVar === 'B'">
        B
    </div>
    <div c:otherwise="">
        Something else
    </div>
<c:choose>
```

### Shorthand conditionals

Shorthand conditionals allow for conditional values inside attributes or wherever expressions are allowed. Shorthand conditionals are of the following form:
`{?<expression>;<true-template>[;<false-template>]}`

For example:

```html
<div class="{?active;tab-active}">Hello</div>
```
With a value of `true` for `active`, the output would be the following:

```html
<div class="tab-active">Hello</div>
```

With a value of `false` for `active`, the output would be the following:

```html
<div>Hello</div>
```

_NOTE: If the expression inside an attribute evaluates to `null` or an empty string then the attribute is not included in the output._

As shown in the previous example, the "else" block for shorthand conditionals is optional. The usage of an else block is shown below:

```html
<div class="{?active;tab-active;tab-inactive}">Hello</div>
```

With a value of `false` for `active`, the output would be the following:

```html
<div class="tab-inactive">Hello</div>
```

## Looping

### for

Any element can be repeated for every item in an array using the `c:for` directive. The directive can be applied as an element or as an attribute.

_Applied as an attribute:_
```html
<ul>
    <li c:for="item in items">${item}</li>
</ul>
```

_Applied as an element:_
```html
<ul>
    <c:for each="item in items">
        <li>${item}</li>
    </c:for>
</ul>
```


Given the following value for items:
```javascript
["red", "green", "blue"]
```

The output would be the following:
```html
<ul>
    <li>red</li>
    <li>green</li>
    <li>blue</li>
</ul>
```

## Macros

Macros allow for reusable fragments within an HTML template. Macros can also be parameterized. A macro can be defined using the `<c:def>` directive and a macro when defining a macro.

### def

The `<c:def>` directive can be used to define a reusable function within a template.

```html
<c:def function="greeting(name, count)">
    Hello $name! You have $count new messages.
</c:def>
```

The above macro can then be invoked as part of any expression. Alternatively, the [`<c:invoke>`](#invoke) directive can be used invoke a macro function using named attributes. The following sample template shows how to use macro functions inside expressions:

```html
<c:def function="greeting(name, count)">
    Hello $name! You have $count new messages.
</c:def>

<p>
    ${greeting("John", 10)}
</p>
<p>
    ${greeting("Frank", 20)}
</p>
```

### invoke

The `<c:invoke>` directive can be used to invoke a function defined using the `<c:def>` directive or a function that is part of the input to a template. The `<c:invoke>` directive allows arguments to be passed using element attributes, but that format is only supported for functions that were previously defined using the `<c:def>` directive.

```html
<c:def function="greeting(name, count)">
    Hello ${name}! You have ${count} new messages.
</c:def>
 
<c:invoke function="greeting" name="John" count="${10}"/>
<c:invoke function="greeting('Frank', 20)"/> 
```

The output for the above template would be the following:

```html
<p>
    Hello John! You have 10 new messages.
</p>
<p>
    Hello Frank! You have 20 new messages.
</p>
```

_NOTE: By default, the arguments will be of type "string" when using `<c:invoke>.` However, argument attributes support JavaScript expressions which allow for other types of arguments. Example:
```html
count="10" <!-- string argument -->
count="${10}"  <!-- number argument -->
```


## Structure Manipulation

### attrs

The `c:attrs` attribute allows attributes to be dynamically added to an element at runtime. The value of the c:attrs attribute should be an expression that resolves to an object with properties that correspond to the dynamic attributes. For example:

```html
<div c:attrs="myAttrs">
    Hello World!
</div>
```

Given the following value for the `myAttrs` variable:

```javascript
{style: "background-color: #FF0000;", "class": "my-div"}
```

The output would then be the following:

```html
<div style="background-color: #FF0000;" class="my-div">
    Hello World!
</div>
```

### content

This directive replaces any nested content with the result of evaluating the expression:

```html
<ul>
    <li c:content="myExpr">Hello</li>
</ul>
```

Given a value of `"Bye!"` for the value of `myExpr`, the output of the above template would be the following:

```html
<ul>
    <li>Bye!</li>
</ul>
```

### replace

This directive replaces the element itself with the result of evaluating the expression:

```html
<div>
    <span c:replace="myExpr">Hello</span>
</div>
```

Given a value of "Bye!" for the value of "myExpr", the output of the above template would be the following:

```html
<div>
    Bye!
</div>
```

### strip

This directive conditionally strips the top-level element from the output. If the expression provided as the attribute value evaluates to true then the element is stripped from the output:

```html
<div>
    <span c:strip="true"><b>Hello</b></span>
</div>
```

_Output:_

```html
<div>
    <b>Hello</b>
</div>
```

## Helpers

Since Raptor Template files compile into CommonJS modules, any Node.js module can be "imported" into a template for use as a helper module. For example, given the following helper module:

_src/util.js_:
```javascript
exports.reverse = function(str) {
    var out = "";
    for (var i=str.length-1; i>=0; i--) {
        out += str.charAt(i); 
    }
    return out;
};
```

The above module can then be imported into a template as shown in the following sample template:

_src/template.rhtml_:
```html
<c:require module="./util" var="util" />

<div>${util.reverse('reverse test')}</div>
```

The `c:require` directive is just short-hand for the following:
```html
<c:var name="util" value="require('./util')" />
<div>${util.reverse('reverse test')}</div>
```

## Custom Tags and Attributes

Raptor Templates supports extending the language with custom tags and attributes. A custom tag or a custom attribute should be prefixed with a namespace that matches a module name that exports the custom tag or custom attribute. Alternatively, the namespace can be a shorter alias defined by the taglib.

Below illustrates how to use a simple custom tag:

```html
<div>
    <app:hello name="World"/>
</div>
```

The output of the above template might be the following:

```html
<div>
    Hello World!
</div>
```

For information on how to use and create taglibs, please see the [Taglibs](#taglibs) section below.

## Taglibs

TODO