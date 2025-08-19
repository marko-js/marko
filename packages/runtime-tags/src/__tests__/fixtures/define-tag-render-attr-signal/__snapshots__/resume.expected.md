# Render
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/0-->
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ConditionalScope:#text/0": _.c = {},
          "ConditionalRenderer:#text/0": "__tests__/template.marko_1_renderer",
          x: 1,
          MyTag: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_renderer"
          ](_.a), _.d),
        "__tests__/template.marko_0_x",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      2
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/0-->
    <button>
      2
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ConditionalScope:#text/0": _.c = {},
          "ConditionalRenderer:#text/0": "__tests__/template.marko_1_renderer",
          x: 1,
          MyTag: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_renderer"
          ](_.a), _.d),
        "__tests__/template.marko_0_x",
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
UPDATE html/body/div/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      3
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/0-->
    <button>
      3
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ConditionalScope:#text/0": _.c = {},
          "ConditionalRenderer:#text/0": "__tests__/template.marko_1_renderer",
          x: 1,
          MyTag: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_renderer"
          ](_.a), _.d),
        "__tests__/template.marko_0_x",
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
UPDATE html/body/div/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      4
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/0-->
    <button>
      4
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "ConditionalScope:#text/0": _.c = {},
          "ConditionalRenderer:#text/0": "__tests__/template.marko_1_renderer",
          x: 1,
          MyTag: _.b = {}
        }, _.c], _.b.content = _._[
          "__tests__/template.marko_1_renderer"
          ](_.a), _.d),
        "__tests__/template.marko_0_x",
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
UPDATE html/body/div/#text "3" => "4"
```