# Render
```html
<html>
  <head />
  <body>
    <div>
      a
      <!--M_*1 #text/0-->
    </div>
    <div>
      a
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
          items: ["a", "b", "c"],
          index: 0
        }]),
        "__tests__/template.marko_0_items_index 1"
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
      b
      <!--M_*1 #text/0-->
    </div>
    <div>
      c
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
          items: ["a", "b", "c"],
          index: 0
        }]),
        "__tests__/template.marko_0_items_index 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text "a" => "b"
UPDATE html/body/div1/#text "a" => "c"
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
      c
      <!--M_*1 #text/0-->
    </div>
    <div>
      c
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
          items: ["a", "b", "c"],
          index: 0
        }]),
        "__tests__/template.marko_0_items_index 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text "b" => "c"
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
          items: ["a", "b", "c"],
          index: 0
        }]),
        "__tests__/template.marko_0_items_index 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text "c" => "‍"
UPDATE html/body/div1/#text "c" => "‍"
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
          items: ["a", "b", "c"],
          index: 0
        }]),
        "__tests__/template.marko_0_items_index 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```
