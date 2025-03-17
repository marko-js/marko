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
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{a:[0],b:1}}),1,"__tests__/template.marko_0_a_b"];M._.w()
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
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{a:[0],b:1}}),1,"__tests__/template.marko_0_a_b"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
```