# Render
```html
<html>
  <head />
  <body>
    <button>
      Count: 
      <!---->
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
          x: 1
        }]),
        "__tests__/template.marko_0_x 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
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
    <button>
      Count: 
      <!---->
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      2
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
          x: 1
        }]),
        "__tests__/template.marko_0_x 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "1" => "2"
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
      Count: 
      <!---->
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      3
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
          x: 1
        }]),
        "__tests__/template.marko_0_x 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "2" => "3"
UPDATE html/body/div/#text "2" => "3"
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
      Count: 
      <!---->
      4
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      4
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
          x: 1
        }]),
        "__tests__/template.marko_0_x 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "3" => "4"
UPDATE html/body/div/#text "3" => "4"
```