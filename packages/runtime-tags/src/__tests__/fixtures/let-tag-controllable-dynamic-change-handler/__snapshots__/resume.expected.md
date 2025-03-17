# Render
```html
<html>
  <head />
  <body>
    <button
      id="inc"
    >
      1
      <!--M_*1 #text/1-->
      |
      <!---->
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <button
      id="toggle"
    >
      toggle
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={x:1,y:1}},_.a.yChange=_.a["y@"]=_._["__tests__/template.marko_0/yChange"](_.a),_.b),1,"__tests__/template.marko_0",1,"__tests__/template.marko_0_y"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#inc").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="inc"
    >
      3
      <!--M_*1 #text/1-->
      |
      <!---->
      3
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <button
      id="toggle"
    >
      toggle
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={x:1,y:1}},_.a.yChange=_.a["y@"]=_._["__tests__/template.marko_0/yChange"](_.a),_.b),1,"__tests__/template.marko_0",1,"__tests__/template.marko_0_y"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text0 "1" => "3"
UPDATE html/body/button0/#text2 "1" => "3"
```

# Render
```js
container.querySelector("#inc").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="inc"
    >
      5
      <!--M_*1 #text/1-->
      |
      <!---->
      5
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <button
      id="toggle"
    >
      toggle
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={x:1,y:1}},_.a.yChange=_.a["y@"]=_._["__tests__/template.marko_0/yChange"](_.a),_.b),1,"__tests__/template.marko_0",1,"__tests__/template.marko_0_y"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text0 "3" => "5"
UPDATE html/body/button0/#text2 "3" => "5"
```

# Render
```js
container.querySelector("#toggle").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="inc"
    >
      5
      <!--M_*1 #text/1-->
      |
      <!---->
      5
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <button
      id="toggle"
    >
      toggle
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={x:1,y:1}},_.a.yChange=_.a["y@"]=_._["__tests__/template.marko_0/yChange"](_.a),_.b),1,"__tests__/template.marko_0",1,"__tests__/template.marko_0_y"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#inc").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="inc"
    >
      5
      <!--M_*1 #text/1-->
      |
      <!---->
      6
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <button
      id="toggle"
    >
      toggle
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={x:1,y:1}},_.a.yChange=_.a["y@"]=_._["__tests__/template.marko_0/yChange"](_.a),_.b),1,"__tests__/template.marko_0",1,"__tests__/template.marko_0_y"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text2 "5" => "6"
```

# Render
```js
container.querySelector("#inc").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="inc"
    >
      5
      <!--M_*1 #text/1-->
      |
      <!---->
      7
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <button
      id="toggle"
    >
      toggle
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={x:1,y:1}},_.a.yChange=_.a["y@"]=_._["__tests__/template.marko_0/yChange"](_.a),_.b),1,"__tests__/template.marko_0",1,"__tests__/template.marko_0_y"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text2 "6" => "7"
```