    </body>
</html>
```

Typically, adding the top-level UI component as a page dependency is all that is required:

_about-me/browser.json_

```json
{
  "dependencies": ["./style.css", "require: ./components/app/index.marko"]
}
```

## Browser refresh

[browser-refresh](https://github.com/patrick-steele-idem/browser-refresh) is recommended in development for instant page refreshes and hot reloading of Marko templates, styles and other resources. `browser-refresh` works well with Lasso and Marko and is very easy to use as a drop-in replacement for `node`:

```bash
browser-refresh server.js
```

## New Lasso Package Types for Marko

- **`marko-dependencies`**:
   It includes all the dependencies needed by the rendered template.
   This bundles the code to register the components, but does not include code to initialize the component.
   Mostly useful, if you have to move components around in the page and then initialize them.
   
   ```{
          "type": "marko-dependencies",
          "if-flag": "outdatedBrowserBanner",
          "path": "src/ui-modules/outdated-browser-banner/index.marko",
          "slot": "inline",
          "inline": true
      }```

- **`marko-hydrate`**:
   It includes all the dependencies needed by the rendered template.
   This bundles the code to register the components & includes the code to initialize the component.
   Initialization is therefore handled.
   
   
   ```{
          "type": "marko-dependencies",
          "if-flag": "outdatedBrowserBanner",
          "path": "src/ui-modules/outdated-browser-banner/index.marko",
          "slot": "inline",
          "inline": true
