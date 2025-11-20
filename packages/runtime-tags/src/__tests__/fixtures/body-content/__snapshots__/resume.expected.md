# Render
```html
<html>
  <head />
  <body>
    <button>
      <!--M_[-->
      0
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1 3-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.d = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.f = new Set,
          "#childScope/0": _.c = {
            "EventAttributes:#button/0": _.a = {},
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content",
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
INSERT html/body/button/#text1
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
      <!--M_[-->
      1
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1 3-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.d = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.f = new Set,
          "#childScope/0": _.c = {
            "EventAttributes:#button/0": _.a = {},
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content",
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
UPDATE html/body/button/#text0 "0" => "1"
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
      <!--M_[-->
      2
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1 3-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.d = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.f = new Set,
          "#childScope/0": _.c = {
            "EventAttributes:#button/0": _.a = {},
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content",
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
UPDATE html/body/button/#text0 "1" => "2"
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
      <!--M_[-->
      3
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1 3-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.d = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.f = new Set,
          "#childScope/0": _.c = {
            "EventAttributes:#button/0": _.a = {},
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content",
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
UPDATE html/body/button/#text0 "2" => "3"
```