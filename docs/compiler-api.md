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

Converts the provided `array` into a `ArrayContainer`. If the provided `array` is already an instance of a `Container` then it is simply returned.


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

### functionDeclaration(name, params, body)

### html(argument)

### htmlComment(comment)

### htmlElement(tagName, attributes, body, argument)

### identifier(name)

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