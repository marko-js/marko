# `marko.json` & `marko-tag.json`

Marko comes with support for configuration files which add support for validation, experimental features and providing custom paths for component files.

These files are automatically found using the same [discovery mechanism](./custom-tags.md#how-tags-are-discovered) as custom tags. Currently there are two types of configuration files. `marko.json` can be used to describe an entire suite of components, and `marko-tag.json` is used to describe a single component.

## Single component definition

The `marko-tag.json` allows you to configure various aspects about a single component. It will be automatically discovered if placed inside a [tag directory](./custom-tags#tag-directories).

### Options

```javascript
{
  "html": true, // Treats this tag as a native html tag, instead of a custom tag.
  "htmlType": "svg", // Adds optimizations for specific types of html tags (currently just svg and html).
  "open-tag-only": true, // Ensures that no body content is passed to this tag.
  "featureFlags": [
    // This is used for enabling beta features.
    "feature-a"
  ],
  "nested-tags": {
    // The nested tags section allows you to configure `attribute tags`.
    "tab": {
      "target-property": "tabs", // Puts `<@tab>` tags into `input.tabs`.
      "is-repeated": true,  // Allow for more than one nested `<@tab>`.
      "attributes": {
        // Same as "attributes" option below.
      }
    }
  }
}
```

### Attributes

One commonly used feature of this config file is to add compile time checks for attributes.

```javascript
{
  "attributes": {
    "heading": "string"
  }
}
```

The above will ensure that the `heading` attribute is the _only_ attribute supplied to this tag. The `string` part of this can be used as documentation for the custom tag, it may also be picked up by tooling and provide hints to the user.

The recommended list of attribute types are as follows:

- expression (any JavaScript expression)
- string
- number
- boolean
- regexp
- date
- object
- array
- function

You can also provide an object as the value for an attribute definition which exposes some additional options:

```javascript
{
  "attributes": {
    "heading": {
      "type": "string", // Same as setting "string" above.
      "default-value": 0, // The attribute will default to this value.
      "preserve-name": true, // By default component attributes are camelCased, this disables that feature.
      "remove-dashes": true, // By default native tag attributes are dash-cased, this disables that feature.

      // The following attributes do nothing, but are picked up by tooling.
      "required": true,
      "deprecated": true,
      "description": "Sets the heading for the component"
    }
  }
}
```

We can also describe a pattern of attributes that should match a definition.

```javascript
{
    "attributes": {
        "data-*": "string"
    }
}
```

In the above, all attributes prefixed with `data-` are described to be a `string`.

> **Note:** Future versions of Marko will work toward describing these definitions/types within the component itself, largely reducing the need for this configuration file.

### Paths

There are several options that provide a way to override the default discovery of certain files such as the template. Typically you should allow Marko to find these files automatically, however here is a short reference in case you encounter these in the wild.

```javascript
{
  "template": "./template.marko", // Custom path to the `.marko` template.
  "renderer": "./renderer.js", // Custom path to the `renderer.js` file.

  // Compiler file hooks
  "migrator": "./migrator.js", // Hooks into the migration stage for migrating deprecated features.
  "node-factory": "./node-factory.js", // Hooks into the parsing stage, should return a valid Marko ast.
  "transformer": "./transformer.js", // Used to modify the ast before generating it.
  "code-generator": "./code-generator.js" // Used to generate custom js.
}
```

> **Note:** Compiler hooks are currently undocumented and it is recommended to avoid using these hooks. The compiler API is recieving a major overhaul in Marko 5 and will be documented once that transition is complete.

## Tag library definition

On top of being able to provide configuration for a single file, you can also use a `marko.json` to define an entire library of components. Similar to the [`marko-tag.json`](#single-component-definition), this file will be discovered if placed within a [tag directory](./custom-tags#tag-directories). It will also be discovered if placed at the root directory of a project, or [within a `node_module` package](./custom-tags.md#publishing-tags-to-npm).

### Options

```javascript
{
  "taglib-id": "my-custom-tag-library", // Provides a way to name this definition for better errors.
  "tags-dir": "./ui-modules", // By default `components` directories are automatically crawled for components. You can use this option to load the tags within an alterative folder.
  "taglib-imports": ["./some-folder/marko.json", "./other-folder/marko.json"], // You can create a _combined_ tag library by referencing others using `taglib-imports`.

  "tags": {
    // Add definitions for individial tags.
    "my-tag": {
      // Same as options for "marko-tag.json" above.
    }
  },

  "attributes": {
    // Adds definitions for attributes on all tags.
    // Options are the same as the "attributes" in the "marko-tag.json" above.
  },

  // Compiler file hooks (runs on the entire template instead of a single tag)
  "migrator": "./migrator.js", // Hooks into the migration stage for migrating deprecated features.
  "transformer": "./transformer.js", // Used to modify the ast before generating it.
  "text-transformer": "./text-transformer.js", // Used to transform all static text in the template.
}
```

> **Note:** Compiler hooks are currently undocumented and it is recommended to avoid using these hooks. The compiler API is recieving a major overhaul in Marko 5 and will be documented once that transition is complete.

## Shorthands

Both configuration files support _shorthands_ for defining `tags` and `attributes`.

A typical `marko.json` file would look something like:

_marko.json_

```javascript
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

As a shorthand, anywhere `tags` or `nested-tags` is used, you can remove the outer object and wrap the individial tags in `<angle-brackets>`. For `attributes`, you can remove the outer object and prefix the attributes with an `@`.

The above example using the shorthand syntax would become the following:

_marko.json_

```javascript
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

For `nested-tags` there is also a shorthand available for the `is-repeated` (a postfix of `[]`) and `target-propety` (a prefix of `@newName`) properties.

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
