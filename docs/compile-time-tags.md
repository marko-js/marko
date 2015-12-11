Compile-time Tags
=================

Marko allows developers to control how a custom tag generates JavaScript code at compile-time. A custom compile-time tag developer can provide a "code generator" function for a custom tag.

# Custom tag code generator

Let's take a look at how to create a compile-time tag by providing our own code generator. The first step is to register the custom tag in a `marko-taglib.json` file. We will use the `code-generator` property to associate the custom tag with a function that will be used to generate the code for the element node at compile-time:

```json
{
    "<greeting>": {
        "code-generator": "./greeting-tag"
    }
}
```

A code generator module should export a function with the following signature:

```javascript
function generateCode(elNode, generator)
```

Continuing with the `<greeting>`, let's assume we have the following template:

```xml
<greeting name="Frank"/>
```

Let's implement the greeting tag that generates code by return an array of output AST nodes.

```javascript
module.exports = function generateCode(elNode, generator) {
    var builder = generator.builder;

    var nameValue = elNode.getAttributeValue('name');
    return builder.functionCall('console.log', nameValue);
};
```

The above code results in the following compiled code:

```javascript
out.w("Hello FrankHello " +
  escapeXml(data.name));
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