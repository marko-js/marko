# Render
```html
<html>
  <head />
  <body>
    <div>
      3
    </div>
    <button>
      before
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          onClick: _._[
            "__tests__/template.marko_0/updateText"
            ]
        }]),
        "__tests__/template.marko_0_onClick 1"
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
    <div>
      3
    </div>
    <button>
      after
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          onClick: _._[
            "__tests__/template.marko_0/updateText"
            ]
        }]),
        "__tests__/template.marko_0_onClick 1"
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