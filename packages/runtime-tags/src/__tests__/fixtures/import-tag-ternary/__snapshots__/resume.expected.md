# Render
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      baz
    </div>
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
      {
        "ConditionalScope:#text/0": _.a = {},
        "ConditionalRenderer:#text/0": "__tests__/tags/baz.marko"
      }, _.a])]
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
```