Compiler Advanced
====================

The Marko compiler is responsible for taking an input Marko template and producing an output JavaScript program. The Marko compiler was designed to be flexible and to allow developers to control how JavaScript code is produced.

# Compiler stages

The three primary stages of the Marko compiler are parse, transform and generate:

- __parse__ - Parse the template source to produce an [Abstract Syntax Tree (AST)](https//en.wikipedia.org/wiki/Abstract_syntax_tree).
- __transform__ - Transform the AST (add/remove/modify/rearrange nodes)
- __generate__ - Generate compiled JavaScript code based on the final AST

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

You'll notice in the transformed AST that the `HtmlElement` associated with the `<div>` tag was wrapped with a new `If` node. After the AST has been transformed it is now time to generate the compiled JavaScript code.

During the transform stage, the entire AST might be walked multiple times. Not until there are no more nodes transformed does the transform stage complete.

## Generate stage

The generate stage is the final stage of the Marko compiler. During the generate stage the Marko compiler will walk the tree to produce the final JavaScript code. Each node in the tree will have an opportunity to generate JavaScript code. The Marko compiler provides a [`CodeGenerator`](../compiler/CodeGenerator.js) class and an API for generating fragments of JavaScript code that makes it easy to produce well-formed and readable JavaScript code as output.

Every node in the tree must implement one of the following methods:

- `generateCode(generator)`
- `generate<OUTPUT_TYPE>Code(generator)` (e.g. `generateHtmlCode(generator)`)

The `generator` argument will be an instance of [`CodeGenerator`](../compiler/CodeGenerator.js).

The Marko compiler supports compiling templates differently based on an "output type". Currently, the only supported output type is "Html". With the "Html" output type, the compiled template will be a program that, when executed, will produce an HTML string as output. In the future we may support other output types such as DOM, Virtual DOM, incremental DOM, etc. For example, with the "DOM" output type, the compiled program could use the web browser's DOM API to produce a DOM tree as output (instead of an HTML string).

Below is the fragment of code used by the `If` node to generate the output JavaScript code:

```javascript
generator.write('if (');
generator.generateCode(test);
generator.write(') ');
generator.generateBlock(body);
if (elseStatement) {
    generator.write(' ');
    generator.generateCode(elseStatement);
} else {
    generator.write('\n');
}
```

