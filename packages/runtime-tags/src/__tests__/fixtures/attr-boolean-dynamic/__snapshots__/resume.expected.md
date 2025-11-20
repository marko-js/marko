# Render
```html
<html>
  <head />
  <body>
    <input
      disabled=""
    />
    <!--M_*1 #input/0-->
    <button>
      enable
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          disabled: !0
        }]),
        "__tests__/template.marko_0_disabled 1"
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
    <input />
    <!--M_*1 #input/0-->
    <button>
      disable
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          disabled: !0
        }]),
        "__tests__/template.marko_0_disabled 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/input[disabled] "" => null
UPDATE html/body/button/#text "enable" => "disable"
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
      disabled=""
    />
    <!--M_*1 #input/0-->
    <button>
      enable
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          disabled: !0
        }]),
        "__tests__/template.marko_0_disabled 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/input[disabled] null => ""
UPDATE html/body/button/#text "disable" => "enable"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <input />
    <!--M_*1 #input/0-->
    <button>
      disable
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          disabled: !0
        }]),
        "__tests__/template.marko_0_disabled 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/input[disabled] "" => null
UPDATE html/body/button/#text "enable" => "disable"
```