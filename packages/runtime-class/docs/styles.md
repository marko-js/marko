# Styles

Both HTML and Marko provide support for `<style>` tags. However, Marko also provides a special syntax (called a style _block_) which adds support for CSS preprocessors and acts as a hint to bundlers to extract this static css from your templates into a common bundle.

```marko
style {
    div {
        color: green;
    }
}

<div>Hello World</div>
```

These blocks add global css to the page. The above example will not style just the `<div>` in the component, but all divs on the page. Because of this we recommend following a naming convention such as [BEM](https://getbem.com/introduction/). Marko will likely provide a way to automatically scope these styles to the current component [in the future](https://github.com/marko-js/marko/issues/666).

> **Note:** Style blocks (unlike `<style>` tags) do not support `${placeholders}` and must be static.

## Preprocessors

If you use a css preprocessor, you can add the extension right on `style`. This will cause your bundler of choice to run the contents of the style block through the appropriate processor.

```marko
style.less {
    button.primary {
        background-color: @primaryColor;
    }
}
```
