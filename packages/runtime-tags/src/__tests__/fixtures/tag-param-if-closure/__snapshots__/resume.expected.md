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
      M._.r = [_ =&gt; (_.c = [0, _.b = {
          count: 0,
          a: "abc",
          "#childScope/1": _.a = {
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          }
        }, _.a,
        {
          _: _.b
        }], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.b), _.c),
        "__tests__/template.marko_0_count 1"
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
      M._.r = [_ =&gt; (_.c = [0, _.b = {
          count: 0,
          a: "abc",
          "#childScope/1": _.a = {
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          }
        }, _.a,
        {
          _: _.b
        }], _.a.input_content = _._[
          "__tests__/template.marko_1_content"
          ](_.b), _.c),
        "__tests__/template.marko_0_count 1"
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