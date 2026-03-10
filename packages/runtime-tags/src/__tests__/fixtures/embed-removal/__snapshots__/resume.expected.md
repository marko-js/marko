# Render
```html
<html>
  <head />
  <body>
    <button>
      Cleanup
    </button>
    <!--Membedded*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("embedded");
      (M.embedded.b = {})[
        "__tests__/template.marko"
        ] = 1;
      M.embedded.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
      ];
      M.embedded.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body />
</html>
```

# Mutations
```
REMOVE button, #comment, #text, script in html/body
```
# Console
```
LOG "cleaned up"
```