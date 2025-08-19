# Render
```html
<html>
  <head />
  <body>
    <div>
      {"foo":1,"bar":2}
      <!--M_*1 #text/0-->
    </div>
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 1
        }]),
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
      {"foo":1,"bar":3}
      <!--M_*1 #text/0-->
    </div>
    <button>
      2
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 1
        }]),
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
UPDATE html/body/div/#text "{\"foo\":1,\"bar\":2}" => "{\"foo\":1,\"bar\":3}"
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
      {"foo":1,"bar":4}
      <!--M_*1 #text/0-->
    </div>
    <button>
      3
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 1
        }]),
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
UPDATE html/body/div/#text "{\"foo\":1,\"bar\":3}" => "{\"foo\":1,\"bar\":4}"
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
      {"foo":1,"bar":5}
      <!--M_*1 #text/0-->
    </div>
    <button>
      4
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 1
        }]),
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
UPDATE html/body/div/#text "{\"foo\":1,\"bar\":4}" => "{\"foo\":1,\"bar\":5}"
```