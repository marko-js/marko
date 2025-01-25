# Render
```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M_*0 #text/1-->
      |
      <!---->
      1
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={x:1,y:1}},_.a.handler=_.a["y@"]=_._["__tests__/template.marko_0/handler"](_.a),_.b),0,"__tests__/template.marko_0_y",0];M._.w()
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
      3
      <!--M_*0 #text/1-->
      |
      <!---->
      3
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={x:1,y:1}},_.a.handler=_.a["y@"]=_._["__tests__/template.marko_0/handler"](_.a),_.b),0,"__tests__/template.marko_0_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "1" => "3"
UPDATE html/body/button/#text2 "1" => "3"
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
      5
      <!--M_*0 #text/1-->
      |
      <!---->
      5
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={x:1,y:1}},_.a.handler=_.a["y@"]=_._["__tests__/template.marko_0/handler"](_.a),_.b),0,"__tests__/template.marko_0_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "3" => "5"
UPDATE html/body/button/#text2 "3" => "5"
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
      7
      <!--M_*0 #text/1-->
      |
      <!---->
      7
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={x:1,y:1}},_.a.handler=_.a["y@"]=_._["__tests__/template.marko_0/handler"](_.a),_.b),0,"__tests__/template.marko_0_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text0 "5" => "7"
UPDATE html/body/button/#text2 "5" => "7"
```