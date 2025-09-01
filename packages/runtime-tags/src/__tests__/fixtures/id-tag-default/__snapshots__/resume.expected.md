# Render
```html
<html>
  <head />
  <body>
    <button>
      toggle
    </button>
    <!--M_*1 #button/0-->
    <div
      id="foo"
    >
      foo
    </div>
    <div
      id="sM_1"
    >
      bar
    </div>
    <!--M_*1 #div/2-->
    <div
      id="baz"
    >
      baz
    </div>
    <!--M_*1 #div/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          baz: "baz"
        }]),
        "__tests__/template.marko_0_bar_baz",
        1
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
      toggle
    </button>
    <!--M_*1 #button/0-->
    <div
      id="foo"
    >
      foo
    </div>
    <div
      id="bar"
    >
      bar
    </div>
    <!--M_*1 #div/2-->
    <div
      id="cM_0"
    >
      baz
    </div>
    <!--M_*1 #div/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          baz: "baz"
        }]),
        "__tests__/template.marko_0_bar_baz",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div1[id] "sM_1" => "bar"
UPDATE html/body/div2[id] "baz" => "cM_0"
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
      toggle
    </button>
    <!--M_*1 #button/0-->
    <div
      id="foo"
    >
      foo
    </div>
    <div
      id="cM_1"
    >
      bar
    </div>
    <!--M_*1 #div/2-->
    <div
      id="baz"
    >
      baz
    </div>
    <!--M_*1 #div/3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          baz: "baz"
        }]),
        "__tests__/template.marko_0_bar_baz",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div1[id] "bar" => "cM_1"
UPDATE html/body/div2[id] "cM_0" => "baz"
```