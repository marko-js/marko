# Custom tags

Marko gives you access to the same API that is used to write the [Core Tags]() so that you can extend the language with custom tags and attributes.

> **PROTIP:** We recommend that custom tags and custom attributes have at least one dash to indicate that they are not part of the standard HTML grammar.

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

```xml
<include('../../components/app-header/index.marko')/>
```

You can just use the tag name:
```xml
<app-header/>
```

See [Advanced Tag Discovery Docs]() for more details on how to customize tag discovery.

## Exporting tags

## Using tags from npm

Using custom tags from `npm` is easy.  Ensure that the package is installed and listed in your `package.json` dependencies:

```
npm install --save some-third-party-package
```

And that's it.  Marko will now discover these tags when compiling your templates and you can simply use them in your templates:

```xml
<div>
    <some-third-party-tag/>
</div>
```