# Render
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{"#childScope/0":_.a={clickCount:0}},1:_.a}),1,"__tests__/tags/counter.marko_0_clickCount",0];M._.w()
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
      <button>
        1
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{"#childScope/0":_.a={clickCount:0}},1:_.a}),1,"__tests__/tags/counter.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "0" => "1"
```