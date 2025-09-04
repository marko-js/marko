# Render
```html
<html>
  <head />
  <body>
    <!--M_[3-->
    y: 
    <!---->
    1
    <!--M_*3 #text/0-->
    <!--M_]2 #text/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          x: !0,
          "#childScope/0": _.a = {
            "ConditionalScope:#text/0": _.b = {},
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          }
        }, _.a, _.b]),
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
    <!--M_]2 #text/0-->
    <!--M_*3 #text/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          x: !0,
          "#childScope/0": _.a = {
            "ConditionalScope:#text/0": _.b = {},
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          }
        }, _.a, _.b]),
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
REMOVE html/body/#comment0 after html/body/#comment1
INSERT html/body/#comment0
REMOVE #comment after html/body/#comment0
REMOVE #text after html/body/#comment0
REMOVE #comment after html/body/#comment0
REMOVE #text after html/body/#comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    y: 1
    <!--M_*3 #text/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          x: !0,
          "#childScope/0": _.a = {
            "ConditionalScope:#text/0": _.b = {},
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          }
        }, _.a, _.b]),
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
INSERT html/body/#text0, html/body/#text1
REMOVE #comment after html/body/#text1
UPDATE html/body/#text1 "" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_]2 #text/0-->
    <!--M_*3 #text/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          x: !0,
          "#childScope/0": _.a = {
            "ConditionalScope:#text/0": _.b = {},
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          }
        }, _.a, _.b]),
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
INSERT html/body/#comment0
REMOVE #text after html/body/#comment0
REMOVE #text after html/body/#comment0
```