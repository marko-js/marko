# Render
```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <span />
    <!--M_|2 #text/0 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#scopeOffset/3": 4,
          count: 1,
          "#childScope/2": _.a = {
            "ConditionalScope:#text/0": _.b = {}
          }
        }, _.a, _.b], _.a["#TagVariable"] = _._[
          "__tests__/template.marko_0_x/var"
          ](_.d), _.c),
        "__tests__/template.marko_0_count",
        1
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
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <span />
    <!--M_|2 #text/0 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#scopeOffset/3": 4,
          count: 1,
          "#childScope/2": _.a = {
            "ConditionalScope:#text/0": _.b = {}
          }
        }, _.a, _.b], _.a["#TagVariable"] = _._[
          "__tests__/template.marko_0_x/var"
          ](_.d), _.c),
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
UPDATE html/body/button/#text "1" => "2"
INSERT html/body/span
REMOVE span after html/body/span
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
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <span />
    <!--M_|2 #text/0 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#scopeOffset/3": 4,
          count: 1,
          "#childScope/2": _.a = {
            "ConditionalScope:#text/0": _.b = {}
          }
        }, _.a, _.b], _.a["#TagVariable"] = _._[
          "__tests__/template.marko_0_x/var"
          ](_.d), _.c),
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
UPDATE html/body/button/#text "2" => "3"
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
      4
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <span />
    <!--M_|2 #text/0 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#scopeOffset/3": 4,
          count: 1,
          "#childScope/2": _.a = {
            "ConditionalScope:#text/0": _.b = {}
          }
        }, _.a, _.b], _.a["#TagVariable"] = _._[
          "__tests__/template.marko_0_x/var"
          ](_.d), _.c),
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
UPDATE html/body/button/#text "3" => "4"
```