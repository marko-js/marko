# Render
```html
<html>
  <head />
  <body>
    = 
    <!---->
    0
    <!--M_*1 #text/0-->
    <button>
      Inc
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{count:0}]),"__tests__/template.marko_0_count",1];M._.w()
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
    = 
    <!---->
    1
    <!--M_*1 #text/0-->
    <button>
      Inc
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{count:0}]),"__tests__/template.marko_0_count",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/#text1 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    = 
    <!---->
    2
    <!--M_*1 #text/0-->
    <button>
      Inc
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{count:0}]),"__tests__/template.marko_0_count",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/#text1 "1" => "2"
```