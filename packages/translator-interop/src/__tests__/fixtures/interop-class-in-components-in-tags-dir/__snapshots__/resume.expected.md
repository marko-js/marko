# Render
```html
<html>
  <head />
  <body>
    <h1>
      Hello world
    </h1>
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.a = [0, 1,
      {
        m5c: "s1"
      }]), "$compat_setScope 2"];
      M.s.w();
      $MC = (window.$MC || []).concat(
      {
        "w": [
          ["s1", 0,
          {},
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/tags/components/hello-internal.marko"
        ]
      })
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0
INSERT html/body/#text1
REMOVE #comment before html/body/#text0
REMOVE #comment after html/body/#text1
```