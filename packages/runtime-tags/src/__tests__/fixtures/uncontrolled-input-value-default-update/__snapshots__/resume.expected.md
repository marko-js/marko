# Render
```html
<html>
  <head />
  <body>
    <input
      value="a"
    />
    <input
      value="a"
    />
    <!--M_*1 #input/0-->
    <input
      value="a"
    />
    <!--M_*1 #input/1-->
    <button>
      Update
    </button>
    <!--M_*1 #button/2-->
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
      value="a"
    />
    <input
      default-value="b"
      value="a"
    />
    <!--M_*1 #input/0-->
    <input
      default-value="b"
      value="a"
    />
    <!--M_*1 #input/1-->
    <button>
      Update
    </button>
    <!--M_*1 #button/2-->
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
UPDATE html/body/input1[value] "a" => "b"
UPDATE html/body/input2[value] "a" => "b"
```