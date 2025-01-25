# Render
```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    2
    <!--M_*0 #text/2-->
     
    <!---->
    3
    <!--M_*0 #text/3-->
     
    <!---->
    5
    <!--M_*0 #text/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()
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
      2
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    3
    <!--M_*0 #text/2-->
     
    <!---->
    4
    <!--M_*0 #text/3-->
     
    <!---->
    7
    <!--M_*0 #text/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
UPDATE html/body/#text0 "2" => "3"
UPDATE html/body/#text2 "3" => "4"
UPDATE html/body/#text4 "5" => "7"
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
      3
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    4
    <!--M_*0 #text/2-->
     
    <!---->
    5
    <!--M_*0 #text/3-->
     
    <!---->
    9
    <!--M_*0 #text/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
UPDATE html/body/#text0 "3" => "4"
UPDATE html/body/#text2 "4" => "5"
UPDATE html/body/#text4 "7" => "9"
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
      4
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    5
    <!--M_*0 #text/2-->
     
    <!---->
    6
    <!--M_*0 #text/3-->
     
    <!---->
    11
    <!--M_*0 #text/4-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "3" => "4"
UPDATE html/body/#text0 "4" => "5"
UPDATE html/body/#text2 "5" => "6"
UPDATE html/body/#text4 "9" => "11"
```