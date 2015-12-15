The Compiler API
================

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
<left> <operator> <right>;
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

___object properties:___

TBD

___range:___

```javascript
builder.forEach({
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

### forEach(varName, target, body)

Returns a node that generates a simple `forEach`. See `forEach(def)`.

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

### htmlElement(tagName, attributes, body, argument)

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

### literal(value)

Returns code to generate a JavaScript code for literal strings, numbers, booleans, objects and arrays.


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

### node(type)

### program(body)

### require(path)

### returnStatement(argument)

### selfInvokingFunction(params, args, body)

### slot()

### strictEquality(left, right)

### templateRoot(body)

### text(argument, escape)

### updateExpression(argument, operator, prefix)

### vars(declarations, kind)

# CodeGenerator