# Render
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*1 #text/1-->
       
      <!---->
      0
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{count:0}]),1,"__tests__/template.marko_0_count"];M._.w()
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
       
      <!---->
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{count:0}]),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "0" => "1"
UPDATE html/body/button/#text2 "0" => "1"
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
      2
      <!--M_*1 #text/1-->
       
      <!---->
      2
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{count:0}]),1,"__tests__/template.marko_0_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "1" => "2"
UPDATE html/body/button/#text2 "1" => "2"
```