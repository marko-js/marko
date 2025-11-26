# Render
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.d = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.f = new Set,
          "#childScope/0": _.c = {
            "EventAttributes:#button/0": _.a = {},
            attrs: _.b = {}
          }
        }, _.c, _.g = {
          _: _.d,
          "ClosureSignalIndex:clickCount": 0
        }], _.a.click = _.b.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.d), (_.f).add(_.g), _.e),
        "__tests__/tags/FancyButton.marko_0_attrs 2"
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
    <button>
      1
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.d = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.f = new Set,
          "#childScope/0": _.c = {
            "EventAttributes:#button/0": _.a = {},
            attrs: _.b = {}
          }
        }, _.c, _.g = {
          _: _.d,
          "ClosureSignalIndex:clickCount": 0
        }], _.a.click = _.b.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.d), (_.f).add(_.g), _.e),
        "__tests__/tags/FancyButton.marko_0_attrs 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      2
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.d = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.f = new Set,
          "#childScope/0": _.c = {
            "EventAttributes:#button/0": _.a = {},
            attrs: _.b = {}
          }
        }, _.c, _.g = {
          _: _.d,
          "ClosureSignalIndex:clickCount": 0
        }], _.a.click = _.b.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.d), (_.f).add(_.g), _.e),
        "__tests__/tags/FancyButton.marko_0_attrs 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      3
      <!--M_*3 #text/0-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.d = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.f = new Set,
          "#childScope/0": _.c = {
            "EventAttributes:#button/0": _.a = {},
            attrs: _.b = {}
          }
        }, _.c, _.g = {
          _: _.d,
          "ClosureSignalIndex:clickCount": 0
        }], _.a.click = _.b.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.d), (_.f).add(_.g), _.e),
        "__tests__/tags/FancyButton.marko_0_attrs 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
```