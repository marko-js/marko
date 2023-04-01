# `marko.json` & `marko-tag.json`

Marko supports configuration files for validation, enabling experimental features, and custom paths for component files.

These configuration files are automatically found with [the same discovery mechanism as custom tags](./custom-tags.md#how-tags-are-discovered).

There are 2 types of configuration files:

1. `marko.json` describes an entire suite of components.
2. `marko-tag.json` describes a single component.

## Single component definition

`marko-tag.json` configures a single component. It’s automatically discovered if placed inside a [tag directory](./custom-tags.md#tag-directories).

### Options

```js
{
  "html": true, // Treat as a native HTML tag, not a custom tag.
  "htmlType": "svg", // Optimizes for specific types of native tags (currently only `svg` and `html`).
  "open-tag-only": true, // Forbids passing body content to this tag.
  "featureFlags": [ "feature-a" ], // Enable beta features by passing feature flags.
  "nested-tags": { // This section configures attribute tags.
    "tab": {
      "target-property": "tabs", // Puts `<@tab>` tags into `input.tabs`.
      "is-repeated": true,  // Allow more than one nested `<@tab>`.
      "attributes": {
        // Same as the “Attributes” section below.
      }
    }
  }
}
```

### Attributes

One commonly-used feature of this config file is compile-time checks for attributes.

```js
{
  "attributes": {
    "heading": "string"
  }
}
```

The above code ensures that the `heading` attribute is the _only_ attribute supplied to this tag.

The `string` value is used as documentation for the custom tag. It may be picked up by tooling, like Marko’s editor plugins, to provide hints to the user.

The recommended list of attribute types are as follows:

- `expression` (any JavaScript expression)
- `string`
- `number`
- `boolean`
- `regexp`
- `date`
- `object`
- `array`
- `function`

You can also provide an object for an attribute definition’s value for additional options:

```js
{
  "attributes": {
    "heading": {
      "type": "string", // Same as setting "string" above.
      "default-value": 0, // The attribute will default to this value.
      "required": true, // Error during compilation if this attribute is undefined. (Mutually exclusive with "default-value"
      "preserve-name": true, // By default component attributes are camelCased; this disables that feature.
      "remove-dashes": true, // By default native tag attributes are dash-cased; this disables that feature.

      // The following attributes do nothing, but are picked up by tooling.
      "deprecated": true,
      "description": "The component’s heading text" // Describes the attribute’s purpose.
    }
  }
}
```

We can also describe a _pattern_ of attributes to match a definition:

```js
{
    "attributes": {
        "data-*": {
          "type": "string",
          "pattern": true
        }
    }
}
```

In the above, all attributes prefixed with `data-` are configured to be a `string`.

> **Note:** Future Marko versions will describe these definitions/types in the component itself, reducing the need for this configuration file.

### Paths

There are several options that override the default discovery of component files, such as the template.

Typically, you should let Marko find these files automatically, but here is a reference in case you encounter these settings in the wild.

```javascript
{
  "template": "./template.marko", // Custom path to the `.marko` template.
  "renderer": "./renderer.js", // Custom path to the `renderer.js` file.

  // Compiler file hooks
  "parse": "./parse.js", // Used to augment parsing.
  "migrate": "./migrate.js", // Used for migrating deprecated features.
  "transform": "./transform.js", // Used to modify the AST before generating it.
  "analyze": "./analyze.js" // Used to analyze metadata the entire ast before beginning to translate it.
  "translate": "./translate.js" // Used to generate custom JS.
}
```

For more information about the compiler hooks [jump over here](./compiler.md#hooks).

## Tag library definition

Along with configuring a single component, you can use a `marko.json` file to configure an _entire library of components_.

Similar to [`marko-tag.json`](#single-component-definition), this file is discovered if placed within a [tag directory](./custom-tags.md#tag-directories). It will also be discovered at the root directory of a project, or [in a `node_module` package](./custom-tags.md#publishing-tags-to-npm).

### Options

```js
{
  "taglib-id": "my-custom-tag-library", // Names the component library, for better errors.
  "tags-dir": "./ui-modules", // What directory to crawl to autodiscover components. Default:`./components/`
  "taglib-imports": ["./some-folder/marko.json", "./other-folder/marko.json"], // Creates a _combined_ tag library by referencing others.

  "tags": { // Definitions for individual tags.
    "my-tag": {
      // Same options as “marko-tag.json”.
    }
  },

  "attributes": {
    // Defines attributes on all tags.
    // Options are the same as the “attributes” section in “marko-tag.json”.
  },

  // Compiler file hooks (run on all templates)
  "migrator": "./migrator.js", // Hooks into the migration stage for migrating deprecated features.
  "transformer": "./transformer.js", // Used to modify the AST before generating it.
  "text-transformer": "./text-transformer.js", // Used to transform all static text in the template.
}
```

> **⚠️ Note:** Compiler hooks are currently undocumented: avoid using them. The compiler API is overhauled in Marko 5, and will be documented once that transition is complete.

## Shorthands

Both configuration files support _shorthands_ for defining `tags` and `attributes`. For example, take this `marko.json` file:

_marko.json_

```js
{
  "taglib-id": "my-custom-tag-library",
  "tags": {
    "my-layout": {
      "attributes": {
        "name": "string",
        "age": "number"
      },
      "nested-tags": {
        "heading": {
          "attributes": {
            "color": "string"
          }
        },
        "body": {
          "attributes": {
            "color": "string"
          }
        }
      }
    }
  }
}
```

As a shorthand, anywhere `tags` or `nested-tags` is used, you can remove the outer object and wrap the individual tags in `<angle-brackets>`.

For `attributes`, you can remove the outer object and prefix the attributes with an `@`.

The above example using the shorthand syntax would become:

_marko.json_

```js
{
  "taglib-id": "my-custom-tag-library",
  "<my-layout>": {
    "@name": "string",
    "@age": "number",
    "<heading>": {
      "@color": "string"
    },
    "<body>": {
      "@color": "string"
    }
  }
}
```

For `nested-tags`, there is also a shorthand for `is-repeated` (a postfix of `[]`) and `target-property` (a prefix of `@newName`):

_marko.json_

```javascript
{
  "<my-layout>": {
    "@sections <section>[]": {
      "@color": "string"
    }
  }
}
```

Is equivalent to:

_marko.json_

```javascript
{
  "tags": {
    "my-layout": {
      "nested-tags": {
        "section": {
          "target-property": "sections",
          "is-repeated": true,
          "attributes": {
            "color": "string"
          }
        }
      }
    }
  }
}
```
