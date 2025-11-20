# Render
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          clickCount: 0,
          "#childScope/0": _.a = {}
        }, _.a], _.a.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.c), _.b),
        "__tests__/tags/my-button.marko_0_onClick 2"
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
      1
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          clickCount: 0,
          "#childScope/0": _.a = {}
        }, _.a], _.a.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.c), _.b),
        "__tests__/tags/my-button.marko_0_onClick 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
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
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          clickCount: 0,
          "#childScope/0": _.a = {}
        }, _.a], _.a.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.c), _.b),
        "__tests__/tags/my-button.marko_0_onClick 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
```