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
      M._.r = [_ =&gt; (_.f = [0, _.b = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.g = new Set,
          "#childScope/0": _.e = {
            "EventAttributes:#button/0": _.a = {},
            "ConditionalScope:#text/1": _.c = {
              "ClosureSignalIndex:clickCount": 0
            },
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content",
            attrs: _.d = {}
          }
        }, _.e, _.c], _.c._ = _.b, _.a.click = _.d.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.b), (_.g).add(_.c), _.f),
        "__tests__/tags/FancyButton.marko_0_attrs",
        2
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
      M._.r = [_ =&gt; (_.f = [0, _.b = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.g = new Set,
          "#childScope/0": _.e = {
            "EventAttributes:#button/0": _.a = {},
            "ConditionalScope:#text/1": _.c = {
              "ClosureSignalIndex:clickCount": 0
            },
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content",
            attrs: _.d = {}
          }
        }, _.e, _.c], _.c._ = _.b, _.a.click = _.d.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.b), (_.g).add(_.c), _.f),
        "__tests__/tags/FancyButton.marko_0_attrs",
        2
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
      M._.r = [_ =&gt; (_.f = [0, _.b = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.g = new Set,
          "#childScope/0": _.e = {
            "EventAttributes:#button/0": _.a = {},
            "ConditionalScope:#text/1": _.c = {
              "ClosureSignalIndex:clickCount": 0
            },
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content",
            attrs: _.d = {}
          }
        }, _.e, _.c], _.c._ = _.b, _.a.click = _.d.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.b), (_.g).add(_.c), _.f),
        "__tests__/tags/FancyButton.marko_0_attrs",
        2
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
      M._.r = [_ =&gt; (_.f = [0, _.b = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.g = new Set,
          "#childScope/0": _.e = {
            "EventAttributes:#button/0": _.a = {},
            "ConditionalScope:#text/1": _.c = {
              "ClosureSignalIndex:clickCount": 0
            },
            "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content",
            attrs: _.d = {}
          }
        }, _.e, _.c], _.c._ = _.b, _.a.click = _.d.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.b), (_.g).add(_.c), _.f),
        "__tests__/tags/FancyButton.marko_0_attrs",
        2
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