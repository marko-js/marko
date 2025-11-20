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
    1
    <!--M_*1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 1,
          y: 1
        }]),
        "__tests__/template.marko_0_x_y 1"
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
    2
    <!--M_*1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 1,
          y: 1
        }]),
        "__tests__/template.marko_0_x_y 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
UPDATE html/body/#text "1" => "2"
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
    4
    <!--M_*1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 1,
          y: 1
        }]),
        "__tests__/template.marko_0_x_y 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "4"
UPDATE html/body/#text "2" => "4"
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
      8
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    8
    <!--M_*1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 1,
          y: 1
        }]),
        "__tests__/template.marko_0_x_y 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "4" => "8"
UPDATE html/body/#text "4" => "8"
```