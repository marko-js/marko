# Render
```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="checkbox"
      value="a"
    />
    <input
      type="checkbox"
      value="b"
    />
    <input
      type="checkbox"
      value="b"
    />
    <!--M_*1 #input/2-->
    <input
      type="checkbox"
      value="b"
    />
    <!--M_*1 #input/3-->
    <button>
      Update
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
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
    <input
      checked=""
      type="checkbox"
      value="a"
    />
    <input
      type="checkbox"
      value="b"
    />
    <input
      default-checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*1 #input/2-->
    <input
      default-checked=""
      type="checkbox"
      value="b"
    />
    <!--M_*1 #input/3-->
    <button>
      Update
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/input2[checked] null => ""
UPDATE html/body/input3[checked] null => ""
```