# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    0
    <!--M_*2 #text/0-->
    <button>
      Update
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "BranchScopes:#text/0": _.b = {}
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_0 1"
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
    1
    <!--M_*2 #text/0-->
    <button>
      Update
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "BranchScopes:#text/0": _.b = {}
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/#text "0" => "1"
```