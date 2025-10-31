# Render
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button />
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0
        }], _.a.resetCount = _._[
          "__tests__/template.marko_0/resetCount"
          ](_.a), _.b),
        "__tests__/template.marko_0_resetCount",
        1,
        "__tests__/template.marko_0_count",
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
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button />
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0
        }], _.a.resetCount = _._[
          "__tests__/template.marko_0/resetCount"
          ](_.a), _.b),
        "__tests__/template.marko_0_resetCount",
        1,
        "__tests__/template.marko_0_count",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "0" => "2"
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
      4
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button />
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0
        }], _.a.resetCount = _._[
          "__tests__/template.marko_0/resetCount"
          ](_.a), _.b),
        "__tests__/template.marko_0_resetCount",
        1,
        "__tests__/template.marko_0_count",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "2" => "4"
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
      6
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button />
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          count: 0
        }], _.a.resetCount = _._[
          "__tests__/template.marko_0/resetCount"
          ](_.a), _.b),
        "__tests__/template.marko_0_resetCount",
        1,
        "__tests__/template.marko_0_count",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "4" => "6"
```