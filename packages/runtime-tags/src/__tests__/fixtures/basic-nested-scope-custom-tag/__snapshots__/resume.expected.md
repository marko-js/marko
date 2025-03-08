# Render
```html
<html>
  <head />
  <body>
    <!--M_[3-->
    <button>
      0
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <!--M_]2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={count:0,"count!":_.d=new Set},2:{"#text/0!":_.b={_:_.a,"count(":0},"#text/0(":"__tests__/template.marko_1_renderer"},3:_.b},(_.d).add(_.b),_.c),3,"__tests__/template.marko_1_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[3-->
    <button>
      1
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <!--M_]2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={count:0,"count!":_.d=new Set},2:{"#text/0!":_.b={_:_.a,"count(":0},"#text/0(":"__tests__/template.marko_1_renderer"},3:_.b},(_.d).add(_.b),_.c),3,"__tests__/template.marko_1_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[3-->
    <button>
      2
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <!--M_]2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={count:0,"count!":_.d=new Set},2:{"#text/0!":_.b={_:_.a,"count(":0},"#text/0(":"__tests__/template.marko_1_renderer"},3:_.b},(_.d).add(_.b),_.c),3,"__tests__/template.marko_1_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[3-->
    <button>
      3
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <!--M_]2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={count:0,"count!":_.d=new Set},2:{"#text/0!":_.b={_:_.a,"count(":0},"#text/0(":"__tests__/template.marko_1_renderer"},3:_.b},(_.d).add(_.b),_.c),3,"__tests__/template.marko_1_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
```