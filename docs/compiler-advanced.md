Compiler Advanced
====================

The Marko compiler is responsible for taking an input Marko template and producing an output JavaScript program. The Marko compiler was designed to be flexible and to allow developers to control how JavaScript code is produced.

# Compiler stages

The four primary stages of the Marko compiler are parse, transform, generate and write:

- __parse__ - Parse the template source to produce an [Abstract Syntax Tree (AST)](https//en.wikipedia.org/wiki/Abstract_syntax_tree).
- __transform__ - Transform the AST using custom transforms (add/remove/modify/rearrange nodes)
- __generate__ - Generate the final AST
- __write__ - Write the JavaScript code based on the final AST

Each of these stages is described in more detail in the sections below.

## Parse stage

The first stage of the Marko compiler takes the source template string and produces an initial AST.

For example, given the following input template:

```xml
<div if(data.name)>
    Hello ${data.name}!
</div>
```

The following AST will be produced:

```json
{
  "type": "TemplateRoot",
  "body": [
    {
      "type": "HtmlElement",
      "tagName": "div",
      "attributes": [
        {
          "name": "if",
          "argument": "data.name"
        }
      ],
      "body": [
        {
          "type": "Text",
          "argument": {
            "type": "Literal",
            "value": "\n    Hello "
          }
        },
        {
          "type": "Text",
          "argument": "data.name"
        },
        {
          "type": "Text",
          "argument": {
            "type": "Literal",
            "value": "!\n"
          }
        }
      ]
    }
  ]
}
```

----------

_TIP:_ If you want a pretty dump of an AST tree for debugging purposes you can use the following code:

```javascript
console.log(JSON.stringify(astNode, null, 2));
```

----------

## Transform stage

During the transform stage, the AST is manipulated in order to produce the correct compiled code during the generate stage. For example, AST transformers are used to process special attributes such as the following:

- `if()`
- `else-if()`
- `else`
- `for()`
- etc.

In the case of the `if()` attribute, the node is transformed by a builtin Marko transformer (specifically, [taglibs/core/core-transformer.js](../taglibs/core/core-transformer.js)) in order to be wrapped with an actual `If` node using code similar to the following:

```javascript
var ifAttr = elNode.getAttribute('if');
if (ifAttr && ifAttr.argument) {
    // Remove the if() attribute from the HTML element node
    elNode.removeAttribute('if');

    // Create a new "If" node using the provided "builder"
    // (described later)
    var ifNode = builder.ifStatement(ifAttr.argument);

    //Surround the existing node with an "If" node
    node.wrap(ifNode);
}
```

Continuing with the previous example, after the transformation stage, the AST will be the following:

```json
{
  "type": "TemplateRoot",
  "body": [
    {
      "type": "If",
      "test": "data.name",
      "body": [
        {
          "type": "HtmlElement",
          "tagName": "div",
          "attributes": [],
          "body": [
            {
              "type": "Text",
              "argument": {
                "type": "Literal",
                "value": "\n    Hello "
              }
            },
            {
              "type": "Text",
              "argument": "data.name"
            },
            {
              "type": "Text",
              "argument": {
                "type": "Literal",
                "value": "!\n"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

You'll notice in the transformed AST that the `HtmlElement` associated with the `<div>` tag was wrapped with a new `If` node.

During the transform stage, the entire AST might be walked multiple times. Not until there are no more nodes transformed does the transform stage complete.

After the AST has been transformed it is now time to generate the final AST as part of the _generate_ stage.

## Generate stage

After the AST has been transformed, the final AST consisting of only "final" AST nodes that are capable of writing out JavaScript code must be generated. A final AST node is a node that is capable of writing out JavaScript code and it must have a `writeCode(writer)` method. During this stage, `generateCode` is called on the root node and each node is responsible for recursively calling `generateCode` on children AST nodes to produce the final AST nodes.

Every node in the tree must implement one of the following methods:

- `generateCode(codegen) : Node`
- `generate<OUTPUT_TYPE>Code(codegen) : Node` (e.g. `generateHtmlCode(codegen)`)

The `codegen` argument will be an instance of [`CodeGenerator`](../compiler/CodeGenerator.js).

The Marko compiler supports compiling templates differently based on an "output type". Currently, the only supported output type is "Html". With the "Html" output type, the compiled template will be a program that, when executed, will produce an HTML string as output. In the future we may support other output types such as DOM, Virtual DOM, incremental DOM, etc. For example, with the "DOM" output type, the compiled program could use the web browser's DOM API to produce a DOM tree as output (instead of an HTML string).

Below is the fragment of code used by the `ForStatement` node to generate the final AST node:

```javascript
generateCode(codegen) {
    this.init = codegen.generateCode(this.init);
    this.test = codegen.generateCode(this.test);
    this.update = codegen.generateCode(this.update);
    this.body = codegen.generateCode(this.body);
    return this;
}
```

In the above example code, the node is returning itself as the final code. Alternatively, a node could return a completely different node that will automatically be made final:

```javascript
generateCode(codegen) {
    let builder = codegen.builder;

    return builder.functionCall(
        builder.identifier('console'),
        [
            builder.literal('Hello World!')
        ]);
}
```

## Write stage

The write stage is the final stage of the Marko compiler. During the write state, each node will have an opportunity to write out JavaScript code to the final output buffer for the compiled template. The Marko compiler provides a [`CodeWriter`](../compiler/CodeWriter.js) class for writing out JavaScript primitives such as blocks and statements and it also provides support controlling indentation.

Every node in the tree must implement one of the following methods:

- `writeCode(writer)`
- `write<OUTPUT_TYPE>Code(writer)` (e.g. `writerHtmlCode(writer)`)

The `writer` argument will be an instance of [`CodeWriter`](../compiler/CodeWriter.js).

Below is the fragment of code used by the `If` node to generate the output JavaScript code:

```javascript
writeCode(writer) {
    var test = this.test;
    var body = this.body;

    writer.write('if (');
    writer.write(test);
    writer.write(') ');
    writer.writeBlock(body);
    if (this.else) {
        writer.write(' else ');
        writer.write(this.else);
    } else {
        writer.write('\n');
    }
}
```

