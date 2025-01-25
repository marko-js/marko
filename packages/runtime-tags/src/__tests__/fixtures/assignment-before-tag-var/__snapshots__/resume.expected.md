# Render
```html
<html>
  <head />
  <body>
    <button>
      +
    </button>
    <!--M_*0 #button/0-->
    <span>
      0
      <!--M_*0 #text/1-->
       was 
      <!---->
      ‍
      <!--M_*0 #text/2-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
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
      +
    </button>
    <!--M_*0 #button/0-->
    <span>
      1
      <!--M_*0 #text/1-->
       was 
      <!---->
      0
      <!--M_*0 #text/2-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text2 "‍" => "0"
UPDATE html/body/span/#text0 "0" => "1"
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
      +
    </button>
    <!--M_*0 #button/0-->
    <span>
      2
      <!--M_*0 #text/1-->
       was 
      <!---->
      1
      <!--M_*0 #text/2-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text2 "0" => "1"
UPDATE html/body/span/#text0 "1" => "2"
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
      +
    </button>
    <!--M_*0 #button/0-->
    <span>
      3
      <!--M_*0 #text/1-->
       was 
      <!---->
      2
      <!--M_*0 #text/2-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span/#text2 "1" => "2"
UPDATE html/body/span/#text0 "2" => "3"
```