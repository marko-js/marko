# Render
```html
<html>
  <head />
  <body>
    0-
    <!---->
    0
    <!--M_*2 #text/1-->
    1-
    <!---->
    0
    <!--M_*3 #text/1-->
    2-
    <!---->
    0
    <!--M_*4 #text/1-->
    3-
    <!---->
    0
    <!--M_*5 #text/1-->
    <button>
      0
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.f = [0, _.a = {
          "BranchScopes:#text/0": [_.b = {}, _.c = {}, _.d = {}, _
            .e = {}],
          count: 0
        }, _.b, _.c, _.d, _.e], _.b._ = _.c._ = _.d._ = _.e._ = _.a, _.f),
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
    0-
    <!---->
    1
    <!--M_*2 #text/1-->
    1-
    <!---->
    1
    <!--M_*3 #text/1-->
    2-
    <!---->
    1
    <!--M_*4 #text/1-->
    3-
    <!---->
    1
    <!--M_*5 #text/1-->
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.f = [0, _.a = {
          "BranchScopes:#text/0": [_.b = {}, _.c = {}, _.d = {}, _
            .e = {}],
          count: 0
        }, _.b, _.c, _.d, _.e], _.b._ = _.c._ = _.d._ = _.e._ = _.a, _.f),
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
UPDATE html/body/button/#text "0" => "1"
UPDATE html/body/#text1 "0" => "1"
UPDATE html/body/#text3 "0" => "1"
UPDATE html/body/#text5 "0" => "1"
UPDATE html/body/#text7 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    0-
    <!---->
    2
    <!--M_*2 #text/1-->
    1-
    <!---->
    2
    <!--M_*3 #text/1-->
    2-
    <!---->
    2
    <!--M_*4 #text/1-->
    3-
    <!---->
    2
    <!--M_*5 #text/1-->
    <button>
      2
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.f = [0, _.a = {
          "BranchScopes:#text/0": [_.b = {}, _.c = {}, _.d = {}, _
            .e = {}],
          count: 0
        }, _.b, _.c, _.d, _.e], _.b._ = _.c._ = _.d._ = _.e._ = _.a, _.f),
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
UPDATE html/body/#text1 "1" => "2"
UPDATE html/body/#text3 "1" => "2"
UPDATE html/body/#text5 "1" => "2"
UPDATE html/body/#text7 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    0-
    <!---->
    3
    <!--M_*2 #text/1-->
    1-
    <!---->
    3
    <!--M_*3 #text/1-->
    2-
    <!---->
    3
    <!--M_*4 #text/1-->
    3-
    <!---->
    3
    <!--M_*5 #text/1-->
    <button>
      3
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.f = [0, _.a = {
          "BranchScopes:#text/0": [_.b = {}, _.c = {}, _.d = {}, _
            .e = {}],
          count: 0
        }, _.b, _.c, _.d, _.e], _.b._ = _.c._ = _.d._ = _.e._ = _.a, _.f),
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
UPDATE html/body/#text1 "2" => "3"
UPDATE html/body/#text3 "2" => "3"
UPDATE html/body/#text5 "2" => "3"
UPDATE html/body/#text7 "2" => "3"
```