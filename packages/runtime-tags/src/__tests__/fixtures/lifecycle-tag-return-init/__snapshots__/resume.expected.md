# Render
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    />
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 0
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
container.querySelector("#increment")?.click();
```
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      {"x":1,"w":1,"y":0,"u":5}
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          x: 0
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
INSERT html/body/div/#text
```