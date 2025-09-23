# Render
```html
<html>
  <head />
  <body>
    <div>
      [object Object]
      <!--M_*2 #text/0-->
      |
      <!---->
      ‍
      <!--M_*2 #text/1-->
      |
      <!---->
      ‍
      <!--M_*2 #text/2-->
    </div>
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          x: 1,
          "#childScope/0": _.a = {}
        }, _.a]),
        "__tests__/template.marko_0_x",
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
    <div>
      1
      <!--M_*2 #text/0-->
      |
      <!---->
      ‍
      <!--M_*2 #text/1-->
      |
      <!---->
      ‍
      <!--M_*2 #text/2-->
    </div>
    <button>
      2
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          x: 1,
          "#childScope/0": _.a = {}
        }, _.a]),
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
UPDATE html/body/div/#text0 "[object Object]" => "1"
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
    <div>
      1
      <!--M_*2 #text/0-->
      |
      <!---->
      ‍
      <!--M_*2 #text/1-->
      |
      <!---->
      ‍
      <!--M_*2 #text/2-->
    </div>
    <button>
      3
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          x: 1,
          "#childScope/0": _.a = {}
        }, _.a]),
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
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      1
      <!--M_*2 #text/0-->
      |
      <!---->
      ‍
      <!--M_*2 #text/1-->
      |
      <!---->
      ‍
      <!--M_*2 #text/2-->
    </div>
    <button>
      4
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          x: 1,
          "#childScope/0": _.a = {}
        }, _.a]),
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
```