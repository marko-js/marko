# Render
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_]2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          count: 0,
          "#childScope/2": _.a = {}
        }, _.a]),
        "__tests__/template.marko_0_count 1"
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
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!---->
    <div>
      Fallback
    </div>
    <!---->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          count: 0,
          "#childScope/2": _.a = {}
        }, _.a]),
        "__tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
INSERT html/body/#comment2, #text, html/body/#comment3
REMOVE #comment after html/body/#comment3
INSERT html/body/div
REMOVE #text after html/body/div
UPDATE html/body/div/#text " " => "Fallback"
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
    <!--M_[-->
    <!---->
    <div>
      Fallback
    </div>
    <!---->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          count: 0,
          "#childScope/2": _.a = {}
        }, _.a]),
        "__tests__/template.marko_0_count 1"
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
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!---->
    <div>
      Fallback
    </div>
    <!---->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          count: 0,
          "#childScope/2": _.a = {}
        }, _.a]),
        "__tests__/template.marko_0_count 1"
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