# Render
```html
<html>
  <head />
  <body>
    <div>
      ‍
      <!--M_*1 #text/0-->
    </div>
    <div>
      ‍
      <!--M_*1 #text/1-->
    </div>
    <button>
      Update
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          index: -1
        }]),
        "__tests__/template.marko_0_index 1"
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
      0
      <!--M_*1 #text/0-->
    </div>
    <div>
      Dylan
      <!--M_*1 #text/1-->
    </div>
    <button>
      Update
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          index: -1
        }]),
        "__tests__/template.marko_0_index 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text "‍" => "0"
UPDATE html/body/div1/#text "‍" => "Dylan"
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
      <!--M_*1 #text/0-->
    </div>
    <div>
      Michael
      <!--M_*1 #text/1-->
    </div>
    <button>
      Update
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          index: -1
        }]),
        "__tests__/template.marko_0_index 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text "0" => "1"
UPDATE html/body/div1/#text "Dylan" => "Michael"
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
      2
      <!--M_*1 #text/0-->
    </div>
    <div>
      Ryan
      <!--M_*1 #text/1-->
    </div>
    <button>
      Update
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          index: -1
        }]),
        "__tests__/template.marko_0_index 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text "1" => "2"
UPDATE html/body/div1/#text "Michael" => "Ryan"
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
      3
      <!--M_*1 #text/0-->
    </div>
    <div>
      Luke
      <!--M_*1 #text/1-->
    </div>
    <button>
      Update
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          index: -1
        }]),
        "__tests__/template.marko_0_index 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text "2" => "3"
UPDATE html/body/div1/#text "Ryan" => "Luke"
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
      ‍
      <!--M_*1 #text/0-->
    </div>
    <div>
      ‍
      <!--M_*1 #text/1-->
    </div>
    <button>
      Update
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          index: -1
        }]),
        "__tests__/template.marko_0_index 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text "3" => "‍"
UPDATE html/body/div1/#text "Luke" => "‍"
```