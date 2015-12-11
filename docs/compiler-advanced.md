Compiler Advanced
====================

Marko allows developers to control how templates generate JavaScript code at compile-time. Developers can create custom compile-time tags and it is also possible to transform the intermediate parse tree by adding, removing, modifying or rearranging nodes at compilation time.

# Overview

The three primary stages of the Marko compiler are parse, transform, generate. Each of these stages is described in more detail below:

## Parse stage

The first stage of the Marko compiler takes the source template string and produces an Abstract Syntax Tree (AST).

For example, given the following input template:

```xml
Hello ${data.name}!

<ul if(notEmpty(data.colors))>
    <li for(color in data.colors)>
        ${color}
    </li>
</ul>
<div else>
    No colors!
</div>
```

The following AST will be produced:

```json
{
  "type": "TemplateRoot",
  "body": [
    {
      "type": "Text",
      "argument": {
        "type": "Literal",
        "value": "Hello "
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
        "value": "!\n\n"
      }
    },
    {
      "type": "HtmlElement",
      "tagName": "ul",
      "attributes": [
        {
          "name": "if",
          "argument": "notEmpty(data.colors)"
        }
      ]
    },
    {
      "type": "Text",
      "argument": {
        "type": "Literal",
        "value": "\n"
      }
    },
    {
      "type": "HtmlElement",
      "tagName": "div",
      "attributes": [
        {
          "name": "else"
        }
      ]
    }
  ]
}
```


# Creating a compile-time tag

Let's take a look at how to create a compile-time tag by providing our own code generator. The first step is to register the custom tag in a `marko-taglib.json` file. We will use the `code-generator` property to associate the custom tag with a function that will be used to generate the code for the element node at compile-time:

```json
{
    "<greeting>": {
        "code-generator": "./greeting-tag"
    }
}
```

The code generator module should export a function with the following signature:

```javascript
function generateCode(elNode, generator) : Node
```

Continuing with the `<greeting>`, let's assume we have the following template:

```xml
<greeting name="Frank"/>
```

Let's implement the greeting tag that generates code that uses `console.log` to output `Hello <NAME>` as shown below:

```javascript
module.exports = function generateCode(elNode, generator) {
    var builder = generator.builder;
    return [
        builder.text(builder.literal('Hello Frank')),
        builder.text(elNode.getAttributeValue('name'))
    ];
};
```



```javascript
module.exports = function generateCode(elNode, generator) {
    var builder = generator.builder;
    return [
        builder.text(builder.literal('Hello Frank')),
        builder.text(elNode.getAttributeValue('name'))
    ];
};
```


So when should you a custom compile-time tag and when should use use a compile-time transformer?

Utilize custom compile-time tags when you need to create new custom tags that are capable of generating JavaScript code at compile-time. Examples of custom compile-time tags:

-

Compile-time transformers are useful for mod

