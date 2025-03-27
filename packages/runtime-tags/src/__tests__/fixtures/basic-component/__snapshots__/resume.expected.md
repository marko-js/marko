# Render
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,1,{clickCount:0}]),2,"__tests__/tags/counter.marko_0_clickCount"];M._.w()
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
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,1,{clickCount:0}]),2,"__tests__/tags/counter.marko_0_clickCount"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "0" => "1"
```