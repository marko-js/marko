# Render
```html
<html>
  <head />
  <body>
    <button>
      Before
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {}], _.a.$fooChange = _._[
          "__tests__/template.marko_0/fooBar"
          ](_.a), _.b),
        "__tests__/template.marko_0_$fooChange",
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
      After
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {}], _.a.$fooChange = _._[
          "__tests__/template.marko_0/fooBar"
          ](_.a), _.b),
        "__tests__/template.marko_0_$fooChange",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/button
INSERT html/body/button/#text
```