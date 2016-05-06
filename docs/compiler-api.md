The Compiler API
================

# require('marko/compiler')

## Methods

### buildTaglibLookup(dirname)

Returns a [TaglibLookup](#TaglibLookup) for discovering custom tags available to a template in the given directory.

Example usage:

```javascript
var taglibLookup  =
    require('marko/compiler').buildTaglibLookup('some/dir');

taglibLookup.forEachTag((tag) => {
    console.log(tag.name);
});

taglibLookup.forEachAttribute('div', (attr) => {
    console.log(attr.name);
});
```

### compile(src, filename, options, callback)

### compileFile(filename, options, callback)

### createBuilder(options)

### createWalker(options)

### parseRaw(templateSrc, filename)

## Properties

### taglibLookup

Returns a reference to the [taglib-lookup](#taglib-lookup) module.

### taglibLoader

### taglibFinder

<a name="taglib-lookup"></a>
# taglib-lookup

## Methods

### registerTaglib = registerTaglib;

### buildLookup(dirname)

### clearCache();

# AST

## Node

The `Node` type is the base class for all AST nodes. All AST nodes added to the AST must extend `Node`.

### Methods

#### wrap(wrapperNode)

Makes the current node a child of the provided `wrapperNode`. Similar to the following:

```javascript
this.container.replaceChild(wrapperNode, this);
wrapperNode.appendChild(this);
```

#### makeContainer(array)

Converts the provided `Array` into an `ArrayContainer`. If the provided `Array` is already an instance of a `Container` then it is simply returned.


#### appendChild(node)

Appends a child node to the associated container for the node. The `this.body` property is used as the default container, but this method can be overridden in derived nodes.

### Properties

#### type

The node type as a String. Example node types: `"TemplateRoot"`, `"HtmlElement"`, `"Text"`, `"If"`, `"Else"`, `"ForEach"`, etc.

#### container

If a `Node` is the child of another `Node` then it will be associated with a `Container`. For example:

```javascript
if (this.container) {
    var parentNode = this.container.node;

    // NOTE: The following lines produce the same result:
    this.container.removeChild(this)
    this.detach()
} else {
    // Either the node is the root node or it is detached from the AST
}
```

## Container

## TemplateRoot

## HtmlElement

## Text

## JavaScript node types

# Builder

## methods

### arrayExpression(elements)

### assignment(left, right)

Returns a node that generates the following code:

```javascript
<left> = <right>;
```

For example:

```javascript
builder.assignment(
    builder.identifier('foo'),
    builder.literal('123'));

// Output code:
foo = '123';
```

### binaryExpression(left, operator, right)

Returns a node that generates the following code:

```javascript
<left> <operator> <right>
```

For example:

```javascript
builder.binaryExpression(
    builder.identifier('foo'),
    '<'
    builder.literal(99));

// Output code:
foo < 99;
```

### code(value)

Returns a node that writes out arbitrary JavaScript code with the given value. The indentation of the provided code is adjusted for proper formatting.

For example:

```javascript
builder.program([
    builder.code('var a = 1;\nvar b = 2;'),
    builder.assignment(builder.identifier('b'), builder.literal(3))
])

// Output code:
var a = 1;
var b = 2;

b = 3;
```

### conditionalExpression(test, consequent, alternate)

Returns a node that generates the following code:

```javascript
<test> ? <consequent> : <alternate>
```

For example:

```javascript
builder.conditionalExpression(
    builder.identifier('isHidden'),
    builder.literal('hidden'),
    builder.literal('visible'));

// Output code:
isHidden ? "hidden" : "visible"
```

### elseStatement(body)

Returns a node that generates the following code:

```javascript
else {
    <body>
}
```

For example:

```javascript
builder.elseStatement([
    builder.functionCall('console.log', ['hello']),
    builder.functionCall('console.log', ['world'])
]);

// Output code:
else {
    console.log('hello');
    console.log('world');
}
```

### elseIfStatement(test, body, elseStatement)

Returns a node that generates the following code:

```javascript
else if (<test>) {
    <body>
}[ <elseStatement>]
```

For example:

```javascript
builder.elseIfStatement(
    builder.literal(true),
    [
        builder.functionCall('console.log', ['hello']),
        builder.functionCall('console.log', ['world'])
    ]);

// Output code:
else if (true) {
    console.log('hello');
    console.log('world');
}
```

### forEach(def)

Returns a node that generates code to loop over an array, object properties or a range.

___array:___

```javascript
builder.forEach({
    varName: 'color',
    target: 'colors'
    body: [
        builder.functionCall('console.log', [
            builder.identifier('color')
        ])
    ]
})


// Output code:
var forEach = __helpers.f; // Static variable

// ...

forEach(data.colors, function(color) {
  out.w(escapeXml(color));
});
```

### forEach(varName, target, body)

Returns a node that generates a simple `forEach`. See `forEach(def)`.

### forRange(def)

Returns a node that generates code to loop over a number range

___array:___

```javascript
builder.forRange({
    varName: 'i',
    from: 0,
    to: 'myArray.length',
    step: 2,
    body: [
        builder.functionCall('console.log', ['hello'])
    ]
})


// Output code:
(function() {
  for (var i = 0; i<=myArray.length; i+=2) {
    console.log(i);
  }
}());
```

### forRange(varName, from, to, step, body)

Returns a node that generates a simple `forRange`. See `forRange(def)`.

### forStatement(init, test, update, body)

Returns a node that generates the following code:

```javascript
for (<init>; <test>; <update>) {
    <body>
}
```

For example:

```javascript
builder.forStatement(
    builder.vars([
        {
            id: 'i',
            init: builder.literal(0)
        }
    ]),
    builder.binaryExpression('i', '<', builder.literal(0)),
    builder.updateExpression('i', '++'),
    [
        builder.functionCall('console.log', [
            builder.identifier('i')
        ])
    ]
)

// Output:
for (var i = 0; i < 0; i++) {
  console.log(i);
}
```

### functionCall(callee, args)

Returns a node that generates the following code:

```javascript
<callee>(<arg1, arg2, ..., argN>)
```

```javascript
builder.functionCall(
    'console.log',
    [
        builder.literal('Hello'),
        builder.identifier('name')
    ]);

// Output:
console.log('Hello', name);
```

### functionDeclaration(name, params, body)

Returns a node that generates the following code:

```javascript
function [name](<param1, param2, ..., paramN>) {
    <body>
}
```

_Named function declaration:_

```javascript
builder.functionDeclaration(
    'foo',
    [
        'num1',
        'num2'
    ],
    [
        builder.returnStatement(builder.binaryExpression('num1', '+', 'num2'))
    ]);

// Output:
function add(num1, num2) {
  return num1 + num2;
}
```

_Anonymous function declaration:_

```javascript
builder.functionDeclaration(
    null,
    [
        'num1',
        'num2'
    ],
    [
        builder.returnStatement(builder.binaryExpression('num1', '+', 'num2'))
    ]);

// Output:
function(num1, num2) {
  return num1 + num2;
}
```

### html(argument)

Returns a node that renders a fragment of HTML (special HTML characters will not be escaped):

```javascript
builder.html(
    builder.literal('<div>Hello World</div>')
);

// Output:
out.w("<div>Hello World</div>");
```

### htmlComment(comment)

```javascript
builder.htmlComment(
    builder.literal('This is an HTML comment'))

// Output:
out.w("<--This is an HTML comment-->");
```

### htmlElement(tagName, attributes, body, argument, openTagOnly, selfClosed)

```javascript
builder.htmlElement(
    'div',
    [
        {
            name: 'class',
            value: builder.literal('greeting')
        }
    ],
    [
            builder.text(builder.literal('Hello World'))
    ])

// Output:
out.w("<div class=\"greeting\">Hello World</div>");
```

### identifier(name)

Returns a node that generates the code for a JavaScript identifier code (e.g., a variable name, parameter name, property name, etc.)

For example:

```javascript
builder.assignment(
    builder.identifier('foo'),
    builder.literal('abc'))

// Output code:
foo = "abc"
```

### ifStatement(test, body, elseStatement)

Returns a node that generates the following code:

```javascript
if (<test>) {
    <body>
}[ <elseStatement>]
```

For example:

```javascript
builder.ifStatement(
    builder.literal(true),
    [
        builder.functionCall('console.log', ['hello']),
        builder.functionCall('console.log', ['world'])
    ]);

// Output code:
if (true) {
    console.log('hello');
    console.log('world');
}
```

### invokeMacro(name, args, body)

Returns a node to generate the code to invoke a macro with the given name, args and body

For example:

```javascript
builder.invokeMacro(
    'greeting',
    [
        builder.literal('Frank'),
        builder.literal(10),
    ],
    [
        builder.text(builder.literal('This is the body passed to the macro'))
    ])
```

### invokeMacroFromEl(el)

Returns a node to generate the code to invoke a macro based on the provided `HtmlElement` node.

For example:

```javascript
var el = builder.htmlElement('greeting', {
        name: builder.literal('Frank'),
        age: builder.literal(10)
    });
builder.invokeMacroFromEl(el)
```

### literal(value)

Returns a node to generate a JavaScript code for literal strings, numbers, booleans, objects and arrays.


For example:

```javascript
builder.literal('abc');

// Output code:
"abc"
```

Or, for a more complex example:

```javascript
builder.vars({
    'aString': builder.literal('abc'),
    'aNumber': builder.literal(123),
    'aBoolean': builder.literal(false),
    'anObject': builder.literal({
        foo: 'bar',
        dynamic: builder.expression('data.name'),
    }),
    'anArray': builder.literal([
        'foo',
        builder.expression('data.name')
    ])
})

// Output code:
var aString = "abc",
    aNumber = 123,
    aBoolean = false,
    anObject = {
      "foo": "bar",
      "dynamic": data.name
    },
    anArray = [
      "foo",
      data.name
    ]
```

### logicalExpression(left, operator, right)

### macro(name, params, body)

Returns a node that generates a macro function with the given name, params and body content. The `InvokeMacro` node should be used to generate the code to invoke the macro.

### negate(argument)

Returns a node that generates the following code:

```javascript
!<argument>
```

For example:

```javascript
builder.negate(builder.identifier('foo'))

// Output:
!foo
```

### newExpression(callee, args)

### node([type, ]generatCode)

Returns a generic `Node` instance with the given node type (optional) and a `generateCode(node, generator)` function that should be used to generate the code for the node. If a `generateCode(node, generator)` function is not provided the node bust be monkey-patched to add a `generateCode(generator)` method.

For example:

```javascript
builder.node(function(node, generator) {
    var builder = generator.builder;
    return builder.text(builder.literal('Hello World!'));
})

// Output code:
out.w("Hello World!");
```

### objectExpression(properties)

### program(body)

Returns a node to generate the code for the root statements of a JavaScript code.

For example:

```javascript
builder.program([
    builder.vars({
        name: builder.literal('Frank')
    }),
    builder.functionCall('console.log', [
        builder.literal('Hello'),
        builder.identifier('name')
    ])
])

// Output code:
var name = "Frank";

console.log("Hello", name);
```

### property(key, value)

### require(path)

Returns a node that generates the following code:

```javascript
require(<path>)
```

Short-hand for the following:

```javascript
builder.functionCall('require', [path])
```

### returnStatement(argument)

Returns a node that generates the following code:

```javascript
return[ <argument>]
```

For example:

```javascript
builder.functionDeclaration(
    'upperCase',
    [
        'str'
    ],
    [
        builder.returnStatement(builder.functionCall('str.toUpperCase'))
    ]
)

// Output code:
function upperCase(str) {
  return str.toUpperCase();
}
```

### selfInvokingFunction(params, args, body)

Returns a node that generates the following code:

```javascript
(function(<params>) {
    <body>
}(<args>))
```

For example:

```javascript
builder.selfInvokingFunction(
    [
        'win'
    ],
    [
        'window'
    ],
    [
        builder.assignment('win.foo', builder.literal('bar'))
    ])

// Output code:
(function(win) {
  win.foo = "bar";
}(window))
```

Or, without params and args:

```javascript
builder.selfInvokingFunction(null, null, [
        builder.vars(['foo']),
        builder.assignment('foo', builder.literal('bar'))
    ])

// Output code:
(function() {
  var foo;

  foo = "bar";
}())
```

### selfInvokingFunction(body)

Equivalent to `selfInvokingFunction(null, null, body)`.

### slot(onDone)

Returns a node that defers generating code until everything else is done. This can be helpful in situations where a fragment of code is not known until the rest of the code is generated.

As an example, the [TemplateRoot](../compiler/ast/TemplateRoot.js) node uses a slot to defer generating the static variables section of the compiled template. Not until all of the nodes have generated code is it known which static variables need to be added at the top of the compiled template.

```javascript
builder.program([
    builder.slot((slot, generator) => {
        slot.setContent(generator.builder.vars(vars));
    }),
    builder.node(function(node, generator) {
        vars.push({
            id: 'foo',
            init: generator.builder.literal('abc')
        });
    }),
    builder.node(function(node, generator) {
        vars.push({
            id: 'bar',
            init: generator.builder.literal(123)
        });
    })
])

// Output code:
var foo = "abc",
    bar = 123;
```

### strictEquality(left, right)

Returns a node that generates the following code:

```javascript
<left> === <right>
```

For example:

```javascript
builder.strictEquality('a', 'b')

// Output code:
a === b
```

### templateRoot(body)

### text(argument, escape)

### thisExpression()

### unaryExpression(argument, operator, prefix)

### updateExpression(argument, operator, prefix)

### variableDeclarator(id, init)

### vars(declarations, kind)

# CodeGenerator