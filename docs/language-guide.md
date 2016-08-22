Language Guide
==============

<!--{TOC}-->

# Template Directives Overview

Almost all of the Marko templating directives can be used as either an attribute or as an element. For example:

_Applying directives using attributes:_

```xml
<!-- Colors available -->
<ul if(colors.length)>
    <li for(color in colors)>
        ${color}
    </li>
</ul>
<!-- No colors available-->
<div else>
    No colors!
</div>
```

_Applying directives using elements:_

```xml
<!-- Colors available -->
<if(colors.length)>
    <ul>
        <for(color in colors)>
            <li>
                ${color}
            </li>
        </for>
    </ul>
</if>

<!-- No colors available -->
<else>
    <div>
        No colors!
    </div>
</else>
```

The disadvantage of using elements to control structural logic is that they change the nesting of the elements which can impact readability. For this reason it is often more suitable to apply directives as attributes.

# Text Replacement

Dynamic text is supported using `${<javascript-expression>}`.

Examples:
```xml
Hello ${data.name}!
Hello ${data.name.toUpperCase()}!
```

By default, all special HTML characters will be escaped in dynamic text to prevent Cross-site Scripting (XSS) Attacks. To disable HTML escaping, you can use `$!` as shown in the following sample code:

```xml
Hello $!{data.name}! <!-- Do not escape -->
```

If necessary, you can escape `$` using a forward slash to have it be treated as text instead of a placeholder token:

```xml
Test: \${hello}
<!-- Rendered Output:
Test: ${hello}
-->
```

# Attributes

All attribute values are parsed as _JavaScript expressions_. In addition, placeholders (`${<javascript-expression>}`) are allowed in single and double quoted strings.

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

In addition, Marko has special support for the `class` and `style` attributes as shown below:

## Style attribute

The value of the style attribute can resolve to an object expression (in addition to a string value) as shown below:

```xml
<div style={color: 'red', 'font-weight': 'bold'}>
```

Output:

```html
<div style="color:red;font-weight:bold">
```

## Class attribute

The value of the class attribute can resolve to an object expression or an array expression (in addition to a string value) as shown below:

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

# Expressions

Wherever expressions are allowed, they are treated as JavaScript expressions and copied out to the compiled template verbatim. For example:

```xml
<div if(searchResults.length > 100)>
    Show More
</div>
```

# Includes

Marko supports includes/partials. Other Marko files can be included using the `<include>` tag and a relative path. For example:

```xml
<include("./greeting.marko") name="Frank" count=30/>
```

Alternatively, you can pass the template data by providing a JavaScript expression as a second argument to the include tag:

```xml
<include("./greeting.marko", {name: "Frank", count: 30})/>
```

The template expression provided as the first argument can also be a dynamic JavaScript expression that resolves to a loaded template as shown below:

In your JavaScript controller:

```javascript
var myIncludeTarget = require('./my-include-target.marko');
var anotherIncludeTarget = require('./another-include-target.marko');

template.render({
		myIncludeTarget: myIncludeTarget,
		anotherIncludeTarget: anotherIncludeTarget
	},
	...);
```

And then in your template:

```xml
<include(data.myIncludeTarget) name="Frank" count=30/>
<include(data.anotherIncludeTarget) name="Frank" count=30/>
```

You can also choose to load the include target within the calling template as shown below:

```xml
<script marko-init>
var myIncludeTarget = require('./my-include-target.marko');
</script>
...
<include(data.myIncludeTarget) name="Frank" count=30/>
```

# Variables

Input data passed to a template is made available using a special `data` variable. It's possible to declare your own variables as shown in the following sample code:

```xml
<var name=data.name.toUpperCase()/>
```

To assign a new value to an existing variable the `<assign>` tag can be used as shown in the following sample code:

```xml
<assign name=data.name.toLowerCase()/>
```

The `<var>` directive can also be used to create scoped variables as shown in the following sample code:

```xml
<var nameUpper=data.name.toUpperCase() nameLower=data.name.toLowerCase()>
    Hello ${nameUpper}!
    Hello ${nameLower}!
</var>
<!--
nameUpper and nameLower will be undefined here
-->
```

# Conditionals

## if...else-if...else

Any element or fragment of HTML can be made conditional using the following directives:

-	`if`
-	`else-if`
-	`else`

*Applied as attributes:*

```xml
<!-- Simple if -->
<div if(someCondition)>
    Hello World
</div>
<!-- Simple unless -->
<div unless(someCondition)>
    Hello World
</div>

<!-- Complex if -->
<div if(test === "a")>
    A
</div>
<div else-if(test === "b")>
    B
</div>
<div else-if(test === "c")>
    C
</div>
<div else>
    Something else
</div>

<!-- Complex unless -->
<div unless(test === "a")>
    A
</div>
<div else-if(test === "b")>
    B
</div>
<div else>
    Something else
</div>
```

*Applied as elements:*

```xml
<!-- Colors available -->
<!-- Simple if -->
<if(someCondition)>
    <div>
        Hello World
    </div>
</if>

<!-- Complex if -->
<if(test === "a")>
    <div>
        A
    </div>
</if>
<else-if(test === "b")>
    <div>
        B
    </div>
</else-if>
<else-if(test === "c")>
    <div>
        C
    </div>
</else-if>
<else>
    <div>
        Something else
    </div>
</else>
```

## unless...else-if...else

The `unless` directive is also supported as an alternative to `if` in cases where the condition should be negated.

```xml
<!-- Simple unless -->
<div unless(someCondition)>
    Hello World
</div>

<!-- Complex unless -->
<div unless(test === "a")>
    A
</div>
<div else-if(test === "b")>
    B
</div>
<div else>
    Something else
</div>
```

*Applied as elements:*

```xml
<!-- Simple unless -->
<unless(someCondition)>
    <div>
        Hello World
    </div>
</unless>

<!-- Complex unless -->
<unless(test === "a")>
    <div>
        A
    </div>
</unless>
<else-if(test === "b")>
    <div>
        B
    </div>
</else-if>
<else-if(test === "c")>
    <div>
        C
    </div>
</else-if>
<else>
    <div>
        Something else
    </div>
</else>
```

## Shorthand Conditionals

Regular JavaScript can be used to achieve shorthand conditional values inside attributes or wherever expressions are allowed:


```xml
<div class=(active && 'tab-active')>Hello</div>
```

With a value of `true` for `active`, the output would be the following:

```html
<div class="tab-active">Hello</div>
```

With a value of `false` for `active`, the output would be the following:

```html
<div>Hello</div>
```

_NOTE: If an attribute value expression evaluates to `null` or `false` then the attribute is not included in the output._

A ternary condition can also be used:

```xml
<div class=(active ? 'tab-active' : 'tab-inactive')>Hello</div>
```

With a value of `false` for `active`, the output would be the following:

```html
<div class="tab-inactive">Hello</div>
```

## Conditional Attributes

Marko supports conditional attributes when the value of an attribute is an expression. Marko also supports [HTML `boolean` attributes](https://html.spec.whatwg.org/#boolean-attributes) (e.g., `<input type="checkbox" checked>`)  If an attribute value resolves to `null`, `undefined`, or `false` then the attribute will not be rendered. If an attribute value resolves to `true` then only the attribute name will rendered.

For example, given the following data:

```javascript
{
    active: true,
    checked: false,
    disabled: true
}
```

And the following template:

```xml
<div class=(data.active && "tab-active")/>

<input type="checkbox" checked=data.checked disabled=data.disabled/>
```

The output HTML will be the following:

```html
<div class="tab-active"></div>

<input type="checkbox" disabled>
```

# Looping

## for

Any element can be repeated for every item in an array using the `for` directive. The directive can be applied as an element or as an attribute.

_Applied as an attribute:_

```xml
<ul>
    <li for(item in items)>${item}</li>
</ul>
```

_Applied as an element:_

```xml
<ul>
    <for(item in items)>
        <li>${item}</li>
    </for>
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

### Loop Status Variable

The `for` directive also supports a loop status variable in case you need to know the current loop index. For example:

```xml
<ul>
    <li for(color in colors | status-var=loop)>
        ${color}
        ${loop.getIndex()+1}) of ${loop.getLength()}
        <if(loop.isFirst())> - FIRST</if>
        <if(loop.isLast())> - LAST</if>
    </li>
</ul>
```

### Loop Separator

```xml
<for(color in colors | separator=", ")>${color}</for>
<div>
    <span for(color in colors | separator=", ") style="color: ${color}">
        ${color}
    </span>
</div>
```

### Range Looping

A range can be provided in the following format; `<var-name> from <from> to <to>[ step <step>]`.

The `from`, `to` and `step` values must be numerical expressions. If not specified, step defaults to 1.

```xml
<ul>
    <li for(i from 0 to 10)>
        ${i}
    </li>
</ul>
```

```xml
<ul>
    <li for(i from 0 to 10 step 2)>
        ${i}
    </li>
</ul>
```

```xml
<ul>
    <li for(i from 0 to myArray.length-1)>
        ${myArray[i]}
    </li>
</ul>
```


### Property Looping

```xml
<ul>
    <li for(name,value in settings)>
        <b>${name}</b>: ${value}
    </li>
</ul>
```

### Native JavaScript for-loop

```xml
<for(var i=1; i<=3; i++)>
    ${i}
</for>
```

### Custom Iterator

A custom iterator function can be passed as part of the view model to the template to control looping over data.


A sample custom iterator function that loops over an array in reverse is shown below:

```javascript
{
    reverseIterator: function(arrayList, callback) {
        for(var i=arrayList.length-1; i>=0; i--){
            callback(arrayList[i]);
        }
    }
}
```

The custom iterator can then be used in a template as shown below:

_Applied as part of a `for` attribute:_

```xml
<div for(item in ['a', 'b', 'c'] | iterator=data.reverseIterator)>
    ${item}
</div>
```

Output:

```html
<div>c</div>
<div>b</div>
<div>a</div>
```

_Applied as part of a `<for>` element:_

```xml
<for(item in ['a', 'b', 'c'] | iterator=data.reverseIterator)>
    ${item}
</for>
```

```html
cba
```

Custom iterators also support providing a custom status object for each loop iteration:

```javascript
{
    reverseIterator: function(arrayList, callback){
        var statusVar = {first: 0, last: arrayList.length-1};
        for(var i=arrayList.length-1; i>=0; i--){
            statusVar.index = i;
            callback(arrayList[i], statusVar);
        }
    }
}
```

_Applied as part of a `for` attribute:_

```xml
<div for(item in ['a', 'b', 'c'] | iterator=data.reverseIterator status-var=status)>
    ${status.index}${item}
</div>
```

Output:

```html
<div>2c</div>
<div>1b</div>
<div>0a</div>
```

_Applied as part of a `<for>` element:_

```xml
<for(item in ['a', 'b', 'c'] | iterator=data.reverseIterator status-var=status)>
    ${status.index}${item}
</for>
```

Output:

```html
2c1b0a
```

# Macros

Parameterized macros allow for reusable fragments within an HTML template. A macro can be defined using the `<def>` directive.

## macro

The `<macro>` directive can be used to define a reusable function within a template.

```xml
<macro greeting(name, count)>
    Hello ${name}! You have ${count} new messages.
</macro>
```

The above macro can then be invoked as part of any expression. Alternatively, the [`<invoke>`](#invoke) directive can be used invoke a macro function using named attributes. The following sample template shows how to use macro functions inside expressions:

```xml
<macro greeting(name, count)>
    Hello ${name}! You have ${count} new messages.
</macro>
<p>
    <greeting("John", 10)/>
</p>
<p>
    <!-- Or, using named attributes: -->
    <greeting name="Frank" count=20/>
</p>
```


# Structure Manipulation

## Dynamic attributes

The `attrs` attribute allows attributes to be dynamically added to an element at runtime. The value of the attrs attribute should be an expression that resolves to an object with properties that correspond to the dynamic attributes. For example:

```xml
<var myAttrs={style: "background-color: #FF0000;", "class": "my-div"} />

<div ${myAttrs}>
    Hello World!
</div>
```

Output:

```html
<div style="background-color: #FF0000;" class="my-div">
    Hello World!
</div>
```

## body-only-if

If you find that you have a wrapper element that is conditional, but whose body should always be rendered then you can use the `body-only-if` attribute to handle this use case. For example, to only render a wrapping `<a>` tag if there is a valid URL then you could do the following:

```xml
<a href=data.linkUrl body-only-if(!data.linkUrl)>
    Some body content
</a>
```

Given a value of `"http://localhost/"` for the `data.linkUrl` variable: , the output would be the following:

```xml
<a href="http://localhost/">
    Some body content
</a>
```

Given a value of `undefined` for the `data.linkUrl` variable: , the output would be the following:

```xml
Some body content
```

# Comments

Standard HTML comments can be used to add comments to your template. The HTML comments will not show up in the rendered HTML.

Example comments:

```xml
<!-- This is a comment that will not be rendered -->
<h1>Hello</h1>
```

If you would like for your HTML comment to show up in the final output then you can use the custom `html-comment` tag:
```xml
<html-comment>This is a comment that *will* be rendered</html-comment>
<h1>Hello</h1>
```

Output:

```xml
<!--This is a comment that *will* be rendered-->
<h1>Hello</h1>
```

# Whitespace

The Marko compiler will remove unnecessary whitespace based on some builtin rules, by default. These rules are partially based on the rules that browser's use to normalize whitespace and partially based on the goal of allowing nicely indented markup with minified output. These rules are as follows:

- For text before the first child element: `text.replace(/^\n\s*/g, '')`
- For text after the last child element: `text.replace(/\n\s*$/g, '')`
- For text between child elements: `text.replace(/^\n\s*$/g, '')`
- Any contiguous sequence of whitespace characters is collapsed into a single space character

In addition, whitespace within the following tags is preserved by default:

- `<pre>`
- `<textarea>`
- `<script>`

Example template:

```xml
<div>
    <a href="/home">
        Home
    </a>
    <a href="/Profile">
        My   Profile
    </a>
    <textarea>
Hello
World</textarea>
</div>
```

Example output:

```xml
<div><a href="/home">Home</a><a href="/Profile">My Profile</a><textarea>
Hello
World</textarea</div>
```

The following options are available to control whitespace removal:

__Option 1)__ Disable whitespace removal using the `marko-compiler-options` tag:

```xml
<marko-compiler-options preserve-whitespace/>
<div>
    <img src="foo.jpg"/>
    <img src="foo.jpg"/>
</div>
```

__Option 2)__ Disable whitespace removal using the `marko-preserve-whitespace` attribute:

```xml
<div marko-preserve-whitespace>
    <img src="foo.jpg"/>
    <img src="foo.jpg"/>
</div>
```

NOTE: When whitespace preservation is enabled, whitespace will be preserved for text at any level below the tag that the `marko-preserve-whitespace` attribute is attached to.

__Option 3)__ Disable _all_ whitespace removal by changing a compiler option

```javascript
require('marko/compiler').defaultOptions.preserveWhitespace = true;
```

__Option 4)__ Control whitespace removal for specific tags (in `marko.json`/`marko-tag.json`)

Adding the `"preserve-whitespace": true` property to a tag definition will result in the Marko compiler preserving whitespace wherever that tag is encountered in a template.

```javascript
{
    "<my-custom-tag>": {
        "preserve-whitespace": true
    }
}
```

NOTE: When whitespace preservation is enabled, whitespace will be preserved for text at any level below the tag.

# Helpers

Since Marko template files compile into CommonJS modules, any Node.js module can be "imported" into a template for use as a helper module. For example, given the following helper module:

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

_src/template.marko_:

```xml
<script marko-init>
    var util = require("./util");
</script>

<div>${util.reverse('reverse test')}</div>
```

It's also possible to pass helper functions to a template as part of the view model:


```javascript
var template = require('./template.marko');

template.render({
        reverse: function(str) {
            var out = "";
            for (var i=str.length-1; i>=0; i--) {
                out += str.charAt(i);
            }
            return out;
        }
    },
    function(err, html) { ... });
```

Usage inside template:

```xml
<div>${data.reverse('reverse test')}</div>
```

# Miscellaneous

## invoke

The `<invoke>` directive can be used to invoke a standard JavaScript function during rendering:

```xml
<invoke console.log('Hello World')/>
```

# Global Properties

The `$global` property is used to add data that is available to all templates encountered during rendering by having the data hang off the wrapped writer.

```javascript
template.render({
    $global: {
        name: 'Frank'
    }
}, res);
```

Given the following template:

```xml
<div>
    Hello ${out.global.name}!
</div>
```

The output would be the following:

```xml
<div>
    Hello Frank
</div>
```

<a name="custom-tags-and-attributes"></a>

# Custom Tags and Custom Attributes

Marko supports extending the language with custom tags and attributes. A custom tag or a custom attribute __must have at least one dash__ to indicate that is not part of the standard HTML grammar.

Below illustrates how to use a simple custom tag:

```xml
<div>
    <my-hello name="Frank" message-count="30"/>
</div>
```


The output of the above template might be the following:

```html
<div>
    Hello Frank! You have 30 new messages.
</div>
```

With Marko, attribute values can be JavaScript expressions:

```xml
<div>
    <my-hello name=data.name.toUpperCase() message-count=data.messageCount/>
</div>
```

You can also pass a data object by providing a JavaScript expression as an argument to the custom tag:

```xml
<div>
    <my-hello({name: "Frank", messageCount: "30"})/>
</div>
```

For information on how to use and create custom taglibs, please see the documentation for [Custom Taglibs](http://markojs.com/docs/marko/custom-taglibs/).

# Async Taglib

The async taglib provides an `<await>` tag that allows portions of your template to be rendered asynchronously. An asynchronous fragment can be bound to a function that accepts an "args" objects and callback argument. When the data provider function completes and invokes the callback with the resulting data, the body of the async fragment is then rendered with the asynchronous data assigned to the specified variable. As an additional feature, asynchronous fragments allow parts of your page to render out-of-order while still providing the final HTML in the correct order allowing to have very reactive websites with almost instant visual feedback. Features like out-of-order rendering, that are based on client-reordering, require the use of JavaScript. Websites that have to render completely without JavaScript should avoid using this additional feature (they can still use asynchronous fragments though).

Example:

```javascript
template.render({
        userProfilePromise: new Promise(function (resolve, reject) {
            // ...
        })
    }, ...);
```

```xml
<await(userProfile from data.userProfilePromise)>

    <ul>
        <li>
            First name: ${userProfile.firstName}
        </li>
        <li>
            Last name: ${userProfile.lastName}
        </li>
        <li>
            Email address: ${userProfile.email}
        </li>
    </ul>

</await>
```

For more details, please see [Marko Async Taglib](http://markojs.com/docs/marko/async-taglib/).

# Layout Taglib

Marko provides a `layout` taglib to support separating out layout from content. The usage of the `layout` taglib is shown in the sample code below:

_default-layout.marko:_

```xml
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><layout-placeholder name="title"/></title>
</head>
<body>
    <h1 if(data.showHeader !== false)>
        <layout-placeholder name="title"/>
    </h1>
    <p>
        <layout-placeholder name="body"/>
    </p>
    <div>
        <layout-placeholder name="footer">
            Default Footer
        </layout-placeholder>
    </div>
</body>
</html>
```

_Usage of `default-layout.marko`:_

```xml
<layout-use("./default-layout.marko") show-header=true>
    <layout-put into="title">My Page</layout-put>
    <layout-put into="body">BODY CONTENT</layout-put>
</layout-use>
```


For more details, please see [Marko Layout Taglib](http://markojs.com/docs/marko/layout-taglib/).
