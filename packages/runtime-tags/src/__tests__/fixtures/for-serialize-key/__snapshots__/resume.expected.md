# Render
```html
<html>
  <head />
  <body>
    <div
      id="el"
    />
    <div>
      <button>
        Click
      </button>
      <!--M_*2 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          "#LoopKey": 0
        }]),
        "__tests__/template.marko_1 2"
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
    <div
      id="el"
    >
      0
    </div>
    <div>
      <button>
        Click
      </button>
      <!--M_*2 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          "#LoopKey": 0
        }]),
        "__tests__/template.marko_1 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div0/#text
```