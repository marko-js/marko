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
    <div>
      0
      <!--M_*2 #text/0-->
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "BranchScopes:#div/2": _.b = {},
          count: 0
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_0 1 __tests__/template.marko_0_count 1"
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
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "BranchScopes:#div/2": _.b = {},
          count: 0
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_0 1 __tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
UPDATE html/body/div/#text "0" => "1"
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
    <div>
      2
      <!--M_*2 #text/0-->
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "BranchScopes:#div/2": _.b = {},
          count: 0
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_0 1 __tests__/template.marko_0_count 1"
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
    <button>
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      3
      <!--M_*2 #text/0-->
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "BranchScopes:#div/2": _.b = {},
          count: 0
        }, _.b], _.b._ = _.a, _.c),
        "__tests__/template.marko_0 1 __tests__/template.marko_0_count 1"
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