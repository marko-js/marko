# Render
```html
<html>
  <head />
  <body>
    <button>
      Increment
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_|3 #text/0-->
    <!--M_]2 #text/0 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          count: 0,
          a: "abc",
          "#childScope/1": _.c = {
            "ConditionalScope:#text/0": _.b = {},
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          }
        }, _.c, _.b], _.b._ = _.a, _.c.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), _.d),
        "__tests__/template.marko_0_count",
        1
      ];
      M._.w()
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
container?.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      Increment
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    abc
    <!--M_]2 #text/0 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          count: 0,
          a: "abc",
          "#childScope/1": _.c = {
            "ConditionalScope:#text/0": _.b = {},
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          }
        }, _.c, _.b], _.b._ = _.a, _.c.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), _.d),
        "__tests__/template.marko_0_count",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0
REMOVE #comment after html/body/#text0
UPDATE html/body/#text0 " " => "abc"
```