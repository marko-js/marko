# Write
```html
  <div id=foo></div><script>WALKER_RUNTIME("M")("_");M._.r=["__tests__/template.marko_0",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      id="foo"
    />
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [
        "__tests__/template.marko_0",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/script
INSERT html/body/script/#text
```