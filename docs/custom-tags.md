# Custom tags

Marko gives you access to the same API that is used to write the [Core Tags](./core-tags.md) so that you can extend the language with custom tags and attributes.

> **ProTip:** We recommend that custom tags and custom attributes have at least one dash to indicate that they are not part of the standard HTML grammar.

## Writing custom tags

To get started let's look at template-based tags which allow you to include another template using a named custom tag rather than specifying a filesystem path and using `<include>`.

### Discovering tags

When compiling a template Marko will search starting at template's directory, up to the project root for directories named `components/`. It then attempts to load the children of these directories as custom tags.  The children can be a Marko template or a directory with an `index.marko` template (and other supporting files).

```dir
components/
    app-header/
        index.marko
        logo.png
        style.css
    app-footer.marko
pages/
    home/
        components/
            home-banner.marko
        index.marko
```

When compiling the template at `pages/home/index.marko`, the following tags would be found:

- `<app-header>`
- `<app-footer>`
- `<home-banner>`

So now, instead of needing to specify a path:

```marko
<include('../../components/app-header/index.marko')/>
```

You can just use the tag name:
```marko
<app-header/>
```

## Using tags from npm

Using custom tags from `npm` is easy.  Ensure that the package is installed and listed in your `package.json` dependencies:

```
npm install --save some-third-party-package
```

And that's it.  Marko will now discover these tags when compiling your templates and you can simply use them in your templates:

```marko
<div>
    <some-third-party-tag/>
</div>
```

## Advanced details

Given a template file, the `marko` module will automatically discover all taglibs by searching relative to the template file. The taglib discoverer will automatically import all taglibs associated with packages found as dependencies in the containing package's root `package.json` file.

As an example, given a template at path `/my-project/src/pages/login/template.marko` and given a `/my-project/package.json` similar to the following:

```json
{
    "name": "my-package",
    "dependencies": {
        "foo": "1.0.0"
    },
    "devDependencies": {
        "bar": "1.0.0"
    }
}
```

The search path will be the following:

1. `/my-project/src/pages/login/marko.json`
2. `/my-project/src/pages/marko.json`
3. `/my-project/src/marko.json`
4. `/my-project/marko.json`
5. `/my-project/node_modules/foo/marko.json`
6. `/my-project/node_modules/bar/marko.json`

### Hiding taglibs

If you wish to hide particular folder and/or node_module from discovery of marko.json, you can exclude certain directories or packages.  This is used primarily for testing.

```javascript
    require('marko/compiler').taglibFinder.excludeDir(dirPath);
    // Where 'dirPath' is an absolute path to the folder containing marko.json

    require('marko/compiler').taglibFinder.excludePackage(packageName);
    // Where 'packageName' is the name of the node_module containing marko.json
```

These statements should be used before any rendering begins in the process.


### marko.json syntax

```json
{
    "tags": {
        "my-hello": {
            "renderer": "./hello-renderer",
            "attributes": {
                "name": "string"
            }
        }
    }
}
```

Marko also supports a short-hand for declaring tags and attributes. The following `marko.json` is equivalent to the `marko.json` above:

```json
{
    "<my-hello>": {
        "renderer": "./hello-renderer",
        "@name": "string"
    }
}
```

### Defining Tags

Tags can be defined by adding `"<tag_name>": <tag_def>` properties to your `marko.json`:

```json
{
    "<my-hello>": {
        "renderer": "./hello-renderer",
        "@name": "string"
    },
    "<my-foo>": {
        "renderer": "./foo-renderer",
        "@*": "string"
    },
    "<my-bar>": "./path/to/my-bar/marko-tag.json",
    "<my-baz>": {
        "template": "./baz-template.marko"
    },
}
```

Every tag should be associated with a renderer or a template. When a custom tag is used in a template, the renderer (or template) will be invoked at render time to produce the HTML/output. If a `String` path to a `marko-tag.json` for a custom tag then the target `marko-tag.json` is loaded to define the tag.

### Defining Attributes

If you provide attributes then the Marko compiler will do validation to make sure only the supported attributes are provided. A wildcard attribute (`"@*"`) allows any attribute to be passed in. Below are sample attribute definitions:

_Multiple attributes:_

```javascript
{
    "@message": "string",     // String
    "@my-data": "expression", // JavaScript expression
    "@*": "string"            // Everything else will be added to a special "*" property
}
```

#### Advanced defining attributes

If you provide an object as your attribute definition, you can more fine-tune its definition:

```javascript
{
    "@data-*": {
        "type": "string",
        "preserve-name": true,
        "pattern": true,
        "enum": [
            "foo",
            "bar"
        ]
    }
}
```

Above, we tell Marko this attribute name contains a pattern so that it will allow any attribute matching `data-*`. We also tell it to preserve the attribute's name for the template or component, so that it will not be camel-cased (which is the default behavior). Lastly, we tell it that this attribute only has two possible values: `foo` and `bar`. Marko does not enforce the enum attribute, but instead uses it for autocompletion with any eligible plugins such as https://atom.io/packages/language-marko for Atom.

### Custom directory scanning

You can configure the `tags-dir` value in your `marko.json` to configure the name of the directory that marko scans in for custom tags.  As described above, by default it uses the name `components/`.  You can override this at a directory level and give a path to another directory to scan:

```json
{
    "tags-dir": "./ui-components"
}
```

`tags-dir` also accepts an array if you have taglibs organized in multiple folders.

```json
{
    "tags-dir": ["./ui-components", "./components"]
}
```

## Exporting tags

To make tags from your project available to other projects, define the public tags in a `marko.json` at the root of your project.
