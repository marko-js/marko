# Render
```html
<html>
  <head />
  <body>
    <button>
      0
    </button>
    <!--M_*2 #button/0-->
    <!--M_|1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          num: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1_num 2"
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
      0
    </button>
    <button>
      1
    </button>
    <!--M_*2 #button/0-->
    <!--M_|1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          num: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1_num 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button1
UPDATE html/body/button1/#text " " => "1"
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
      0
    </button>
    <button>
      1
    </button>
    <button>
      2
    </button>
    <!--M_*2 #button/0-->
    <!--M_|1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          num: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1_num 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button2
UPDATE html/body/button2/#text " " => "2"
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
      0
    </button>
    <button>
      1
    </button>
    <button>
      2
    </button>
    <button>
      3
    </button>
    <!--M_*2 #button/0-->
    <!--M_|1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          num: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1_num 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button3
UPDATE html/body/button3/#text " " => "3"
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
      0
    </button>
    <button>
      1
    </button>
    <button>
      2
    </button>
    <button>
      3
    </button>
    <button>
      4
    </button>
    <!--M_*2 #button/0-->
    <!--M_|1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          num: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1_num 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button4
UPDATE html/body/button4/#text " " => "4"
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
      0
    </button>
    <button>
      1
    </button>
    <button>
      2
    </button>
    <button>
      3
    </button>
    <button>
      4
    </button>
    <button>
      5
    </button>
    <!--M_*2 #button/0-->
    <!--M_|1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          num: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1_num 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button5
UPDATE html/body/button5/#text " " => "5"
```