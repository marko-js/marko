# Render `{"a":2}`

```html
<html>
  <head />
  <body>
    <button>
      Increment
    </button>
    <!--M_*1 #button/0-->
    2 
    <!---->
    4
    <!--M_*1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          b: 4
        }]),
        "__tests__/template.marko_0_b",
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
      Increment
    </button>
    <!--M_*1 #button/0-->
    2 
    <!---->
    5
    <!--M_*1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          b: 4
        }]),
        "__tests__/template.marko_0_b",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/#text1 "4" => "5"
```