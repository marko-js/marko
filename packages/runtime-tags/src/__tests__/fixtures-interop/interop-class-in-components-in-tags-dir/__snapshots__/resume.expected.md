# Render
```html
<html>
  <head />
  <body>
    <h1>
      Hello world
    </h1>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 2,
      {
        m5c: "_0",
        m5i:
        {}
      }])];
      M._.w();
      $MC = (window.$MC || []).concat(
      {
        "p": "_",
        "w": [
          ["_0", 0, 3,
          {
            "f": 1
          }]
        ],
        "t": [
          "__tests__/tags/components/hello-internal.marko"
        ]
      });
      M._.r.push("$compat_setScope 3");
      M._.w()
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