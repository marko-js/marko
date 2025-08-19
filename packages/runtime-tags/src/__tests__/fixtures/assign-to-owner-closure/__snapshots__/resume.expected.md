# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*2 #button/0-->
    <!--M_|1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalRenderer:#text/0": 0,
          "ConditionalScope:#text/0": _.b = {}
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_1",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_|1 #text/0 2-->
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalRenderer:#text/0": 0,
          "ConditionalScope:#text/0": _.b = {}
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_1",
        2
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 after html/body/#comment1
INSERT html/body/#comment0
REMOVE button after html/body/#comment0
```