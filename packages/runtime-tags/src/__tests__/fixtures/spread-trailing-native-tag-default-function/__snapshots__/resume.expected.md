# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          "EventAttributes:#button/0":
          {
            click: _._[
              "__tests__/template.marko_0/onClick"
              ]
          },
          rest:
          {}
        }]),
        "__tests__/template.marko_0_rest 1"
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
      clicked
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          "EventAttributes:#button/0":
          {
            click: _._[
              "__tests__/template.marko_0/onClick"
              ]
          },
          rest:
          {}
        }]),
        "__tests__/template.marko_0_rest 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button/#text
```