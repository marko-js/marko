# Render
```html
<html>
  <head />
  <body>
    <!--Ms[2-->
    <h1>
      Hello world
    </h1>
    <!--Ms]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("s");
      M.s.r = [_ =&gt; (_.b = [0,
      {
        "ConditionalScope:#text/0": _.a = {
          m5c: "s1"
        },
        "ConditionalRenderer:#text/0": _._.$compat_renderer(_._[
          "__tests__/tags/components/hello-internal.marko"
          ])
      }, _.a]), "$compat_setScope", 2];
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
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#text1
```