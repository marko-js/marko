# Render
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <button>
      0
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={count:0,"#childScope/0":_.c={"#text/0!":_.b={}}},1:_.c,2:_.b},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),2,"__tests__/template.marko_1_count/subscriber",2,"__tests__/template.marko_1_count",0];M._.w()
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
    <!--M_[2-->
    <button>
      1
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={count:0,"#childScope/0":_.c={"#text/0!":_.b={}}},1:_.c,2:_.b},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),2,"__tests__/template.marko_1_count/subscriber",2,"__tests__/template.marko_1_count",0];M._.w()
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
    <!--M_[2-->
    <button>
      2
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={count:0,"#childScope/0":_.c={"#text/0!":_.b={}}},1:_.c,2:_.b},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),2,"__tests__/template.marko_1_count/subscriber",2,"__tests__/template.marko_1_count",0];M._.w()
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
    <!--M_[2-->
    <button>
      3
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={count:0,"#childScope/0":_.c={"#text/0!":_.b={}}},1:_.c,2:_.b},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),2,"__tests__/template.marko_1_count/subscriber",2,"__tests__/template.marko_1_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
```