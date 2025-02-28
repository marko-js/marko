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
    <!--M_*1 #text/1-->
     
    <!---->
    4
    <!--M_*1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{b:4}}),1,"__tests__/template.marko_0_b",0];M._.w()
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
    <!--M_*1 #text/1-->
     
    <!---->
    5
    <!--M_*1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{b:4}}),1,"__tests__/template.marko_0_b",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/#text2 "4" => "5"
```