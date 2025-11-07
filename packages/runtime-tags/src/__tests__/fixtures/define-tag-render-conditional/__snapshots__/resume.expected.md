# Render
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <div>
      Hello 
      <!---->
      1
      <!--M_*3 #text/0-->
    </div>
    <!--M_]1 #text/0 2-->
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          x: 1
        },
        {
          _: _.a,
          "#childScope/0": _.b = {}
        }, _.b]),
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
INSERT html/body/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!---->
    <div>
      Hello 2
    </div>
    <!---->
    <!--M_]1 #text/0 2-->
    <button>
      2
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          x: 1
        },
        {
          _: _.a,
          "#childScope/0": _.b = {}
        }, _.b]),
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
INSERT html/body/#comment0, html/body/div, html/body/#comment1
REMOVE #comment after html/body/#comment1
REMOVE div after html/body/#comment1
REMOVE #text after html/body/#comment1
UPDATE html/body/div/#text1 "" => "2"
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
    <!---->
    <div>
      Hello 3
    </div>
    <!---->
    <!--M_]1 #text/0 2-->
    <button>
      3
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          x: 1
        },
        {
          _: _.a,
          "#childScope/0": _.b = {}
        }, _.b]),
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
UPDATE html/body/div/#text1 "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!---->
    <div>
      Hello 4
    </div>
    <!---->
    <!--M_]1 #text/0 2-->
    <button>
      4
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          x: 1
        },
        {
          _: _.a,
          "#childScope/0": _.b = {}
        }, _.b]),
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
UPDATE html/body/div/#text1 "3" => "4"
```