# Render
```html
<html>
  <head />
  <body>
    <div>
      Hit
    </div>
    <!--M_*1 #div/0-->
    <button>
      0
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_[-->
    <!--M_]1 #text/3 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1 2 __tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
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
      Hit
    </div>
    <!--M_*1 #div/0-->
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_]1 #text/3 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1 2 __tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
REMOVE html/body/#comment2 after #comment
INSERT html/body/#comment2
REMOVE #comment after html/body/#comment2
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
      Hit
    </div>
    <!--M_*1 #div/0-->
    <button>
      2
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_]1 #text/3 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1 2 __tests__/template.marko_0_count 1"
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
    <div>
      Hit
    </div>
    <!--M_*1 #div/0-->
    <button>
      3
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <!--M_]1 #text/3 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1 2 __tests__/template.marko_0_count 1"
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