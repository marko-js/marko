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
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/3": 4,
          count: 1,
          "#childScope/2": _.b = {
            "ConditionalScope:#text/0": _.c = {}
          }
        }, _.b, _.c], _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_x/var"
          ](_.a), _.d),
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
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/3": 4,
          count: 1,
          "#childScope/2": _.b = {
            "ConditionalScope:#text/0": _.c = {}
          }
        }, _.b, _.c], _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_x/var"
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
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/3": 4,
          count: 1,
          "#childScope/2": _.b = {
            "ConditionalScope:#text/0": _.c = {}
          }
        }, _.b, _.c], _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_x/var"
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
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/3": 4,
          count: 1,
          "#childScope/2": _.b = {
            "ConditionalScope:#text/0": _.c = {}
          }
        }, _.b, _.c], _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_x/var"
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
UPDATE html/body/button/#text "3" => "4"
```