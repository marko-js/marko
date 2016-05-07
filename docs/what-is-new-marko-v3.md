---
---
What's New in Marko v3
======================

We’ve made some exciting improvements to Marko as part of the Marko v3 release. Most notably:

- Improved syntax
    - Now supports _both_ a familiar HTML syntax and a [concise, indentation-based syntax](#concise-syntax)
    - [_All_ attribute values are now parsed as JavaScript expressions](#attr-javascript-expressions)
    - New parser: [htmljs-parser](https://github.com/philidem/htmljs-parser) (thanks [@philidem](https://github.com/philidem)!)
- [Improved directives](#improved-directives)
- [New and improved compiler API](#compiler-api)

We worked hard to make Marko v3, arguably, the best templating engine ever. This release includes over [250 commits to Marko](https://github.com/marko-js/marko/compare/v2.8.4...v3.0.0-alpha.1) and [almost 100 commits to the parser](https://github.com/philidem/htmljs-parser/commits/master). Marko is heavily tested with over 600 individual tests for Marko and its new parser. Thank you to all of the contributors who have provided code and feedback along the way (see [#90](https://github.com/marko-js/marko/issues/90), [#211](https://github.com/marko-js/marko/issues/211), especially [@adammcarth](https://github.com/adammcarth), [@BryceEWatson](https://github.com/BryceEWatson), [@crsandeep](https://github.com/crsandeep), [@DanCech](https://github.com/DanCech), [@danrichman](https://github.com/danrichman), [@kristianmandrup](https://github.com/kristianmandrup), [@onemrkarthik](https://github.com/onemrkarthik), [@philidem](https://github.com/philidem), [@pswar](https://github.com/pswar), [@scttdavs](https://github.com/scttdavs), [@SunnyGurnani](https://github.com/SunnyGurnani), [@tindli](https://github.com/tindli), [@vedam](https://github.com/vedam) and [@yomed](https://github.com/yomed))!

In order to make these improvements it was necessary to introduce some breaking changes. However, a migration tool is available to automatically convert Marko v2 templates to the new syntax. Please see: [github.com/marko-js/marko-migrate](https://github.com/marko-js/marko-migrate)

It's also worth mentioning that the new concise syntax was heavily inspired by [Jade/Pug](http://jade-lang.com/). However, we reduced the number of grammar rules with Marko to make the concise syntax easier to grasp and closer to HTML.

While Marko is focused on being the best-in-class templating engine, [Marko Widgets](http://markojs.com/docs/marko-widgets/) aims to be ​one of​ the simplest and fastest libraries for building UI components. Marko renders the HTML for UI components, while Marko Widgets adds client-side behavior. Marko Widgets offers advanced features like DOM-diffing, batched updates, stateful widgets, declarative event binding and efficient event delegation.

Please try it out and provide feedback:

```
npm install marko@3 --save
```

If you are using Marko Widgets you will need to also install the latest version of Marko Widgets:

```
npm install marko-widgets@6 --save
```

Also, the [Lasso.js](https://github.com/lasso-js/lasso) taglib has been updated to be compatible with Marko v3 so you will need to upgrade Lasso.js if you are using that tool:

```
npm install lasso@2 --save
```


Please join the [Marko community on Gitter](https://gitter.im/marko-js/marko) and feel free to ask any question or provide feedback.

Cheers!

# New features

<a name="attr-javascript-expressions"></a>
## JavaScript expressions as attribute values

Marko v3 uses a new parser that allows for a much more powerful syntax. With Marko v3, an attribute value is _always_ parsed as a JavaScript expression:

```xml
<div class=data.myClassName>
<input type="checkbox" checked=data.isChecked/>

<my-component string="Hello"/>
<my-component number=1/>
<my-component template-string="Hello ${name}"/>
<my-component boolean=true/>
<my-component array=[1, 2, 3]/>
<my-component object={hello: 'world'}/>
<my-component variable=name/>
<my-component function-call=data.foo()/>
<my-component complex-expression=1+2/>
<my-component super-complex-expression=(data.foo() + data.bar(['a', 'b', 'c']))/>
```

Previously, attribute values were parsed as strings (by default), but a tag definition file (AKA, a schema file) could be used to associate type information with an attribute value to change how the value is interpreted. By replacing the strict HTML parser with a much more flexible [htmljs-parser](https://github.com/philidem/htmljs-parser), it now obvious how an attribute value would be interpreted.

## Attribute arguments

Marko v3 allows tags and attributes to have an _argument_ as shown below:

```xml
<my-custom-tag(some argument)>
<div my-custom-attr(some argument)>
```

Arguments are used to improve the syntax for directives such as looping and conditionals.

## Improved Editor and IDE Support

- Atom: [language-marko](https://atom.io/packages/language-marko)
- Sublime Text: [marko-sublime](https://github.com/merwan7/sublime-marko)
- WebStorm: [marko.tmbundle](https://github.com/marko-js/marko-tmbundle) (See: [Importing TextMate Bundles](https://www.jetbrains.com/phpstorm/help/importing-textmate-bundles.html)) (New!)
- TextMate: [marko.tmbundle](https://github.com/marko-js/marko-tmbundle)
- CodeMirror/Brackets (New!)

<a name="concise-syntax"></a>

## Concise indentation-based syntax

Marko v3 supports both a familiar HTML syntax and a concise, indentation-based syntax. Both syntaxes are equally supported and both syntaxes can even be mixed in the same Marko template.

The code snippets below show how each syntax variant compares.

### HTML syntax

```xml
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Marko Templating Engine</title>
    </head>
    <body>
        <!-- Welcome to Marko! -->
        <h1>
            Hello ${data.name}!
        </h1>

        <ul if(notEmpty(data.colors))>
            <li for(color in data.colors)>
                ${color}
            </li>
        </ul>
        <div else>
            No colors!
        </div>
    </body>
</html>
```

### Concise syntax

The following concise template is equivalent to the previous HTML template:

```xml
<!DOCTYPE html>
html lang="en"
    head
        title - Marko Templating Engine
    body
        // Welcome to Marko!
        h1 - Hello ${data.name}!
        ul if(notEmpty(data.colors))
            li for(color in data.colors)
                ${color}
        div else
            - No colors!
```

There is one "gotcha" that you need to be aware of. The Marko parser starts out in the concise mode. Therefore, given the following template:

```
Hello World
Welcome to Marko
```

The output would be the following:

```xml
<Hello World></Hello>
<Welcome to Marko></Welcome>
```

To parse correctly, you would need to prefix each HTML line with a hyphen:

```
- Hello World
- Welcome to Marko
```

Alternatively, a multi-line, delimited HTML block can be used:

```
---
Hello World
Welcome to Marko
---
```


### Mixed syntax

You can even mix and match the concise syntax with the HTML syntax within the same document.
The following template is equivalent to the previous templates:

```xml
<!DOCTYPE html>
html lang="en"
    head
        <title>Marko Templating Engine</title>
    body
        // Welcome to Marko!
        <h1>
            Hello ${data.name}!
        </h1>
        ul if(notEmpty(data.colors))
            li for(color in data.colors)
                ${color}
        div else
            - No colors!
```

<a name="improved-directives"></a>
## Improved syntax for directives

### Macros

___Old syntax:___

```xml
<def function="greeting(name, count)">
    Hello ${name}! You have ${count} new messages.
</def>

<invoke function="greeting" name="John" count="${10}"/>
<invoke function="greeting('Frank', 20)"/>
```

___New syntax:___


```xml
<macro greeting(name, count)>
  Hello ${name}! You have ${count} new messages.
</macro>

<greeting name="Frank" count=30/>
<greeting('Frank', 30)/>
```

Macros that allow nested body content are now more cleanly supported using the `<macro-body>` tag:

```xml
<macro section-heading(className)>
  <h1 class=className>
    <macro-body/>
  </h1>
</macro>

<section-heading className="foo">
  Hello World!
</section-heading>

<!-- Output: -->
<h1 class="foo">Hello World!</h1>
```

[Issue #170 - Marko v3: macros](https://github.com/marko-js/marko/issues/170)

### Includes

___Old syntax:___

```xml
<include template="./include-target.marko" name="Frank" count="${20}"/>
<include template="./include-target.marko" template-data="{name: 'Frank', count: 20}"/>
```

___New syntax:___

```xml
<include("./include-target.marko") name='Frank' count=20/>
<include("./include-target.marko", {name: 'Frank', count: 20})/>
```

Includes also support body content:

```xml
<include("./include-nested-content.marko") name="Frank" count=20>
    Have a
    <b>
        wonderful
    </b>
    day!
</include>
```

When body content is provided, a special `data.renderBody = function(out) { ... }` function will be added to the template data for the target template.

Dynamic templates are also supported:

```xml
<script marko-init>
var templateA = require('./include-a.marko');
var templateB = require('./include-b.marko');
</script>

<include(foo ? templateA : templateB) name='Frank' count=20/>
```

[Issue #178 - Marko v3: include tag](https://github.com/marko-js/marko/issues/178)

### Conditionals

___Old syntax:___

```xml
<!-- Applied as tags: -->
<if test="a > b">...</if>
<else-if test="b < a">...</else-if>
<else>...</else>

<!-- Applied as attributes: -->
<div if="a > b">...</div>
<div else-if="b < a">...</div>
<div else>...</div>
```

___New syntax:___

```xml
<!-- Applied as tags: -->
<if(a > b)>...</if>
<else-if(b < a)>...</else-if>
<else>...</else>

<!-- Applied as attributes: -->
<div if(a > b)>...</div>
<div else-if(b < a)>...</div>
<div else>...</div>
```

### for(item in items)

___Old syntax:___

```xml
<!-- Applied as a tag: -->
<ul>
    <for test="color in colors">
        <li>${color}</li>
    </for>
</ul>

<!-- Applied as an attribute: -->
<ul>
    <li for="color in colors">
        ${color}
    </li>
</ul>
```

___New syntax:___

```xml
<!-- Applied as a tag: -->
<ul>
    <for(color in colors)>
        <li>${color}</li>
    </for>
</ul>

<!-- Applied as an attribute: -->
<ul>
    <li for(color in colors)>
        ${color}
    </li>
</ul>
```

Additional options are now passed in after a `|` symbol as shown below:

```xml
<for(color in ['red', 'green', 'blue'] | separator=", ")>
    ${color}
</for>
```

Output:

```html
red, green, blue
```

- [Issue #189 - Marko v3: Improve syntax of the "for" directive by keeping everything in parens](https://github.com/marko-js/marko/issues/189)
- [Issue #193 - Marko v3: Custom iterators](https://github.com/marko-js/marko/issues/193)

#### Iterator function as target

Marko v3 now allows the target to be an iterator function:

```xml
<script marko-init>
function myColorsIterator(callback) {
    callback('red');
    callback('green');
    callback('blue');
}
</script>

<ul>
    <for(color in myColorsIterator)>
        <li>${color}</li>
    </for>
</ul>
```

Output:

```html
<ul>
    <li>red</li>
    <li>green</li>
    <li>blue</li>
</ul>
```

[Issue #193 - Marko v3: Allow for target to be an iterator function](https://github.com/marko-js/marko/issues/194)

### for(`<init>`; `<test>`; `<update>`)

Marko v3 now supports native for-loops as shown below:

```xml
<for(var i=1; i<=3; i++)>
    ${i}
</for>
```

Output:

```html
123
```

[Issue #191 - Marko v3: Allow native JavaScript for loops](https://github.com/marko-js/marko/issues/191)

### for(key, value in object)

___Old syntax:___

```xml
<for each="(name,value) in {'foo': 'low', 'bar': 'high'}">
    ${name}: ${value}
</for>
```

___New syntax:___

```xml
<for(name,value in {'foo': 'low', 'bar': 'high'})>
    ${name}: ${value}
</for>
```

[Issue #175 - Marko v3: Looping over object properties](https://github.com/marko-js/marko/issues/175)

### for(`<range>`)

___Old syntax:___

```xml
<for each="i from 0 to 9">
    ${i}
</for>
```

___New syntax:___

```xml
<for(i from 0 to 9)>
    ${i}
</for>
```

### while(`<test>`)

Marko v3 now supports native while loops:

```xml
<!-- Applied as a tag: -->
<var n=0/>
<ul>
    <while(n < 4)>
        <li>${n++}</li>
    </while>
</ul>

<!-- Applied as an attribute: -->
<var n=0/>
<ul>
    <li while(n < 4)>
        ${n++}
    </li>
</ul>
```

[Issue #228 - Marko v3: while loop support](https://github.com/marko-js/marko/issues/228)

### Imports


___Old syntax:___

```xml
<require module="change-case" var="changeCase"/>
```
___New syntax:___

Marko v3 now supports adding JavaScript initialization code at the top of the compiled template. This code will only load the first time the compiled template is loaded and it can be used to import other JavaScript modules and introduce new static variables.

```xml
<script marko-init>
var reverse = require('./helpers').reverse;
var changeCase = require('change-case');
</script>
```

[Issue #214 - Marko v3: `<script marko-init>`](https://github.com/marko-js/marko/issues/214)

### Variables


___Old syntax:___

```xml
<var name="foo" value="'bar'" />
<var name="count" value="0" />
<assign var="count" value="count+1" />
```

___New syntax:___

```xml
<var foo="bar" count=0/>
<assign count=count+1/>
```

Scoped variables are also supported:

```xml
<var name="Frank">
    Hello ${name}!
</var>
<!-- The "name" variable will be `undefined` here -->
```

Thank you, [@BryceEWatson](https://github.com/BryceEWatson), for working on this feature!

[Issue #169 - Marko v3: var tag](https://github.com/marko-js/marko/issues/169)
[Issue #171 - Marko v3: assign tag](https://github.com/marko-js/marko/issues/171)

### Scriptlets

Marko v3 has adopted the more universal `<% ... %>` syntax for scriptlets. Scriptlets are there if you need to inject arbitrary JavaScript code into the compiled template.

___Old syntax:___

```xml
{% if (true) { %}
    HELLO
{% } %}
{% if (false) { %}
    WORLD
{% } %}
```

___New syntax:___

```xml
<% console.log('Hello World'); %>

<% if (true) { %>
    HELLO
<% } %>
<% if (false) { %>
    WORLD
<% } %>
```

[Issue #181 - Marko v3: Scriptlets](https://github.com/marko-js/marko/issues/181)

### Layout taglib

___Old syntax:___

```xml
<layout-use template="./layout-default.marko" show-header="$false">
    <layout-put into="body">BODY CONTENT</layout-put>
    <layout-put into="footer">FOOTER CONTENT</layout-put>
</layout-use>
```

___New syntax:___

The `<layout-use>` tag now expects a template argument:

```xml
<layout-use("./layout-default.marko") show-header=false>
    <layout-put into="body">BODY CONTENT</layout-put>
    <layout-put into="footer">FOOTER CONTENT</layout-put>
</layout-use>

<!-- The layout template can also be dynamic and you can also pass a data object: -->
<layout-use(data.layoutDynamic, {showHeader: false})>
    ...
</layout-use>
```

[Issue #209 - Marko v3: Re-introduce support for the layout taglib](https://github.com/marko-js/marko/issues/209)

### Invoke tag

___Old syntax:___

```xml
<invoke function="test('World')"/>
<invoke function="console.log('Hello World')"/>
```

___New syntax:___

```xml
<invoke test('World') />
<invoke console.log('Hello World')/>
```

[Issue #179 - Marko v3: invoke tag](https://github.com/marko-js/marko/issues/179)

## Empty closing tag

The tag name in the closing tag is now optional:

```xml
<my-custom-tag>
    Hello world!
</>
```

[`htmljs-parser` - Issue #30 - Allow an empty closing tag ](https://github.com/philidem/htmljs-parser/issues/30)

## Shorthand ID and class names

Assigning IDs and class names is very common so Marko v3 introduces a shorthand syntax that matches the CSS selector syntax as shown below:

- `#foo` ➔ `<div id="foo">`
- `#foo.bar` ➔ `<div id="foo" class="bar">`
- `.bar` ➔ `<div class="bar">`

```xml
#section
    ul.colors
        li.color - red
        li.color - green
        li.color - blue
    button#submitButton.enabled - Submit Form
```

Output:

```html
<div id="section">
    <ul class="colors">
        <li class="color">red</li>
        <li class="color">green</li>
        <li class="color">blue</li>
    </ul>
    <button id="submitButton" class="enabled">
        Submit Form
    </button>
</div>
```

The shorthand syntax also works with the more verbose HTML syntax:

```xml
<#section>
    <ul.colors>
        <li.color>red</li>
        <li.color>green</li>
        <li.color>blue</li>
    </ul.colors>
    <button#submitButton.enabled>
        Submit Form
    </button>
</>
```

[Issue #220 - Marko v3: Support expansion of CSS selector shorthand for tag names](https://github.com/marko-js/marko/issues/220)
[htmljs-parser - Issue #24 - Expand CSS selector shorthand](https://github.com/philidem/htmljs-parser/issues/24)

## Miscellaneous improvements

### Validating parser

The new parser used by Marko v3 will no longer allow mismatched opening and closing tags. Instead of letting problems in the original template pass through, the new parser will report the problem as errors. For example, with the following template:

```xml
<div>Hello World</foo>
```

You will get a friendly error message:

```text
The closing "foo" tag does not match the corresponding opening "div" tag
```

### All JavaScript expressions are validated at compile time

Previously, Marko v2 would not throw an error at compile time if a JavaScript expression was invalid. Now, with Marko v3, all JavaScript expressions are parsed and validated at compile time using [esprima](http://esprima.org/). These extra compile-time checks make development a lot easier and it prevents errors from showing up at runtime.

### Style attribute

The value of the style attribute can now resolve to an object expression (in addition to a string value) as shown below:

```xml
<div style={color: 'red', 'font-weight': 'bold'}>
```

Output:

```html
<div style="color:red;font-weight:bold">
```

[Issue #229 - Marko v3: Special case style attribute to allow object expression](https://github.com/marko-js/marko/issues/229)

### Class attribute

The value of the class attribute can now be an object expression or an array expression as shown below:

```xml
<!-- array: -->
<div class=['a', null, 'c']>

<!-- object: -->
<div class={a: true, b: false, c: true}>
```

In both cases, the output will be the same:

```html
<div class="a c">
```

[Issue #230 - Marko v3: Special case class attribute to allow object or array expression](https://github.com/marko-js/marko/issues/230)

### Dynamic attributes

___Old syntax:___

```xml
<div attrs="myAttrs"/>
```

___New syntax:___

```xml
<var myAttrs={'class': 'foo', 'style': 'background-color: red'}/>
<div ${myAttrs}/>
```

Output:

```html
<div class="foo" style="background-color: red"></div>
```

[Issue #198 - Marko v3: Replace `<div attrs(myAttrs)>` with `<div ${myAttrs}>`](https://github.com/marko-js/marko/issues/198)

### Dynamic tag names

Dynamic tag names are now supported by putting a placeholder in the tag name:

```xml
<${foo ? 'div' : 'span'}>
    Hello World!
</>
```

Output:

```xml
<!-- If foo is true: -->
<div>Hello World!</div>

<!-- If foo is false: -->
<span>Hello World!</span>
```

[Issue #226 - Marko v3: Allow placeholders in tag name](https://github.com/marko-js/marko/issues/226)

### Input data for custom tags:

```xml
<greeting({name: 'Frank'})/>

<!-- Equivalent to: -->
<greeting name='Frank' />
```

[Issue #173 - Marko v3: Input data object for custom tags](https://github.com/marko-js/marko/issues/173)

### Tag body content parsing

The `marko-body` attribute can be used to control how body content is parsed. The following values are supported:

- `"html"` - Body content will be parsed HTML (the default)
- `"static-text"` - Body content will be parsed as static text (HTML tags will be ignored). Placeholders will be ignored.
- `"parsed-text"` - Body content will be parsed as text (HTML tags will be ignored). Placeholders will _not_ be ignored.

```xml
<div marko-body="static-text">
    This is just one
    <span if(foo)>
            Hello ${THIS IS NOT VALID}!
    </span>
    big text block
</div>
```

_Output:_

```html
<div>
    This is just one
    <span if(foo)>
            Hello ${THIS IS NOT VALID}!
    </span>
    big text block
</div>
```

### Preserve whitespace

___Old syntax:___

```xml
<div c-space="preserve">
    All of this
    whitespace   will
    be preserved.
</div>
```

___New syntax:___

Whitespace can be preserved using the `marko-preserve-whitespace` attribute:

```xml
<div marko-preserve-whitespace>
    All of this
    whitespace   will
    be preserved.
</div>
```

### Compiler options

The `<marko-compiler-options>` tag can be used to enable whitespace preservation and/or HTML comments preservation for the entire template.

___Old syntax:___

```xml
<compiler-options whitespace="preserve" />
```

___New syntax:___

```xml
<marko-compiler-options preserve-whitespace preserve-comments />
```

[Issue #205 - Marko v3: Provide full control over whitespace](https://github.com/marko-js/marko/issues/205)
[Issue #206 - Marko v3: HTML comments should be handled correctly](https://github.com/marko-js/marko/issues/206)

### Open tag only

Marko v3 allows tags to be declared as "open tag only". If a custom tag is declared as being "open tag only" then the parser will report an error if an ending tag is found or if the tag has nested body content.

Tag definition:

```json
{
    "<my-custom-tag>": {
        "open-tag-only": true,
        ...
    }
}
```

Usage:

```xml
<!-- Allowed: -->
<my-custom-tag>
<my-custom-tag/>

<!-- Not allowed: -->
<my-custom-tag>Foo</my-custom-tag>
```

[Issue #222 - Marko v3: Allow open only tags to be defined in tag definition](https://github.com/marko-js/marko/issues/222)

### Improved readability of compiled code

A lot of attention was put on producing very clean output JavaScript code. If you ever find that you need to debug through the code of a compiled template you will find that the code is very well formatted and readable.

For example, given the following input template:

```xml
<my-custom-tag name="World"/>

<ul if(notEmpty(data.colors))>
    <li for(color in data.colors)>
        ${color}
    </li>
</ul>
<div else>
    No colors!
</div>
```

The compiled output will be similar to the following:

```javascript
function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      my_custom_tag = __loadTag(require("./components/my-custom-tag/renderer")),
      forEach = __helpers.f;

  return function render(data, out) {
    my_custom_tag({
        name: "World"
      }, out);

    if (notEmpty(data.colors)) {
      out.w("<ul>");

      forEach(data.colors, function(color) {
        out.w("<li>" +
          escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    } else {
      out.w("<div>No colors!</div>");
    }
  };
}

(module.exports = require("marko").c(__filename)).c(create);
```

### Improved performance

The Marko runtime has been slightly tweaked to improve performance and it is now faster and smaller! You can find the updated benchmarks here: https://github.com/marko-js/templating-benchmarks

Here's a partial snippet of the results that shows how Marko stacks up to the competition:

| Template Engine | Results                      |
|-----------------|------------------------------|
| __marko__       | __187,729 op/s (fastest)__   |
| dot             | 183,161 op/s (2.43% slower)  |
| handlebars      | 104,634 op/s (44.26% slower) |
| dust            | 83,773 op/s (55.38% slower)  |
| swig            | 54,866 op/s (70.77% slower)  |
| jade            | 32,929 op/s (82.46% slower)  |
| nunjucks        | 32,306 op/s (82.79% slower)  |
| react           | 3,651 op/s (98.06% slower)   |

# Removed features

## Removed: $<variable-name>

Use `${<variable-name>}` instead. We found that allowing `$` without the curly braces was problematic when parsing inline script that used the `$` variable from libraries like jQuery.

## Removed: $!<variable-name>

Use `$!{<variable-name>}` instead.

## Removed: "simple conditional" syntax

Marko v3 _removes_ support for the following "simple conditional" syntax:

___Old syntax:___

```xml
<div class="{?data.isActive; active; inactive}">
```

___New syntax:___

In Marko v3, JavaScript is favored over a new syntax so, instead, use a JavaScript conditional expression:

```xml
<div class=(data.isActive ? 'active' : 'inactive')>
```

Alternatively, when only a value is needed when `true`:

```xml
<div class=(data.isActive && 'active')>
```

## Removed: nested attributes

Nested attributes are no longer supported (likely never used):

```xml
<test-popover>
    <attr name="title">Popover Title</attr>
    <attr name="content">Popover Content</attr>

    Link Text
</test-popover>
```

## Removed: `<require>` tag

Use `<script marko-init>` instead.

___Old syntax:___

```xml
<require module="./my-include-target.marko" var="myIncludeTarget" />
```

___New syntax:___

```xml
<script marko-init>
var myIncludeTarget = require('./my-include-target.marko');
</script>
```

## Removed: `c-data`/`c-input` attribute

Custom tag data should be passed using an argument:

```xml
<my-custom-tag({name: 'Frank'})/>
```

## Removed: `c-space`/`c-whitespace` attribute

Use `marko-preserve-whitespace` attribute instead:

```xml
<div marko-preserve-whitespace>
    This whitespace
    will be preserved.
</div>
```

## Removed: `c-escape-xml` attribute

No longer applicable.

## Removed: `c-parse-body-text` attribute

Use the `marko-body="<body-type>"` attribute instead.

## Removed: `attrs` attribute

Use placeholder within open tag instead:

```xml
<div ${myAttrs}>
```

## Removed: `with` tag and attribute

Instead, use `<var>` tag with nested content to create scoped variables.

## Removed: JavaScript operator aliases

The following JavaScript operator aliases are no longer supported:

JavaScript Operator | Marko Equivalent
------------------- | -----------------
`&&`                 | `and`
<code>&#124;&#124;</code>                | `or`
`===`               | `eq`
`!==`               | `ne`
`<`                 | `lt`
`>`                 | `gt`
`<=`                | `le`
`>=`                | `ge`

Instead, you must use valid JavaScript operators. For example:

___Old syntax:___

```xml
<div if="searchResults.length gt 100">
    Show More
</div>
```

___New syntax:___

```xml
<div if(searchResults.length > 100)>
    Show More
</div>
```

## A dynamic include target must resolve to a loaded template (not a string path)

If using dynamic templates, the expression must resolve to a fully loaded template instance (not a string path). In Marko v2, the following was allowed:

```javascript
var templateData = {
    includeTarget: './include.marko'
}
```

```xml
<include template="${data.includeTarget}"/>
```

This is no longer allowed in Marko v3 and, instead, you must do the following:

```javascript
var includeTemplate = require('./include.marko');

// ...

var templateData = {
    includeTarget: includeTemplate
}
```

```xml
<include(data.includeTarget})/>
```

# Other notable changes

## marko-taglib.json → marko.json

Taglib definition files must now be named `marko.json` (not `marko-taglib.json`).

In addition, the rules for resolving `marko.json` files have changed (see: [Marko v3: Improve taglib discovery #224](https://github.com/marko-js/marko/issues/224))

[Issue #216 - Marko v3: Transition from marko-taglib.json to marko.json](https://github.com/marko-js/marko/issues/216)

## Nested tags separator changed

The symbol for separating nested tags has changed from `.` (period) to `:` (colon). This was done to avoid conflicts with the new shorthand class syntax (e.g. `<div.foo>`).

___Old syntax:___

```xml
<tabs>
    <tabs.tab title="Tab 1">
        Content for tab 1
    </tabs.tab>
    <tabs.tab title="Tab 2">
        Content for tab 2
    </tabs.tab>
</tabs>
```

___New syntax:___

```xml
<tabs>
    <tabs:tab title="Tab 1">
        Content for tab 1
    </tabs:tab>
    <tabs:tab title="Tab 2">
        Content for tab 2
    </tabs:tab>
</tabs>
```

[Issue #219 - Marko v3: Use ":" instead of "." for nested tags](https://github.com/marko-js/marko/issues/219)

## Node.js v4+ is now required for compiling

Unlike Marko v2, Marko v3 requires Node.js v4+ to compile Marko templates. The new Marko compiler was written using ECMAScript 2015 (ES6) features that are only found in Node.js v4+. The Marko runtime, however, still works in all JavaScript runtimes.

## Case-sensitive HTML parser

The Marko parser and compiler are now case sensitive. The following tags are not equal with Marko v3:

```xml
<my-custom-tag/>
<My-CUSTOM-Tag/>
```

[Issue #215 - Marko v3: Marko should be case sensitive with tag names and attributes](https://github.com/marko-js/marko/issues/215)

<a name="compiler-api"></a>
## New compiler API

The Marko compiler went through a major refactor with Marko v3 as a result of introducing a new parser that recognizes types at compile time. The new compile-time API is much simpler and more powerful. For more information on the Marko compiler and extending Marko at compile-time, please check out:

- [Compiler Advanced](http://markojs.com/docs/marko/compiler/advanced/)
- [The Compiler API](http://markojs.com/docs/marko/compiler/api/) (work-in-progress)
- [Compile-time Tags](http://markojs.com/docs/marko/compiler/compile-time-tags/)


# Next steps

If you have ideas on how to improve Marko please let us know. We welcome new contributors so if you would like to help out please join us in the [Gitter chat room for Marko](gitter.im/marko-js/marko), [file an issue on Github](https://github.com/marko-js/marko) or send us a pull request.