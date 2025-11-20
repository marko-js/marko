# Render
```html
<html>
  <head />
  <body>
    <button>
      Before
    </button>
    <!--M_*1 #button/0-->
    <div>
      0
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {}], _.a["TagVariableChange:count"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
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
    <button>
      1
    </button>
    <!--M_*1 #button/0-->
    <div>
      1
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {}], _.a["TagVariableChange:count"] = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/template.marko_0 1"
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
UPDATE html/body/div/#text "0" => "1"
```