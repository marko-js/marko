# Render
```html
<html>
  <head />
  <body>
    <select
      multiple=""
    >
      <option />
      <option
        selected=""
        value="a"
      />
    </select>
    <select
      multiple=""
    >
      <option />
      <option
        value="b"
      />
    </select>
    <select
      multiple=""
    >
      <option />
      <option
        value="b"
      />
    </select>
    <!--M_*1 #select/2-->
    <select
      multiple=""
    >
      <option />
      <option
        value="b"
      />
    </select>
    <!--M_*1 #select/3-->
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
    <select
      multiple=""
    >
      <option />
      <option
        selected=""
        value="a"
      />
    </select>
    <select
      multiple=""
    >
      <option />
      <option
        value="b"
      />
    </select>
    <select
      multiple=""
    >
      <option />
      <option
        default-selected=""
        value="b"
      />
    </select>
    <!--M_*1 #select/2-->
    <select
      multiple=""
    >
      <option />
      <option
        default-selected=""
        value="b"
      />
    </select>
    <!--M_*1 #select/3-->
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
UPDATE html/body/select3/option1[selected] null => ""
UPDATE html/body/select2/option1[selected] null => ""
```