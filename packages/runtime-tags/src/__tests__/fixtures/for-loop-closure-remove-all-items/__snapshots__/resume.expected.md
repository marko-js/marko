# Render
```html
<html>
  <head />
  <body>
    <div>
      <button>
        Test
      </button>
      <!--M_*2 #button/0-->
      <!--M_|1 #text/0 2-->
      <div />
      <!--M_*1 #div/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          items: ["hello"]
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1_items 2"
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
      <!--M_|1 #text/0 2-->
      <!--M_*2 #button/0-->
      <div>
        hello
      </div>
      <!--M_*1 #div/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          items: ["hello"]
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_1_items 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/div/#text
REMOVE html/body/div/#comment0 after html/body/div/#comment1
INSERT html/body/div/#comment0
REMOVE button before html/body/div/#comment0
```