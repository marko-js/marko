# Render
```html
<html>
  <head />
  <body>
    <button>
      <!--M_[3-->
      0
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={"clickCount/1":0,"#childScope/0":_.e={"#button/0~":_.b={},"attrs/5":_.c={},"#text/1!":_.d={}}},2:_.e,3:_.d},_.b.click=_.c.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.d._=_.a,_.e["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.f),3,"__tests__/template.marko_1_clickCount/subscriber",2,"__tests__/tags/FancyButton.marko_0_attrs",0];M._.w()
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
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={"clickCount/1":0,"#childScope/0":_.e={"#button/0~":_.b={},"attrs/5":_.c={},"#text/1!":_.d={}}},2:_.e,3:_.d},_.b.click=_.c.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.d._=_.a,_.e["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.f),3,"__tests__/template.marko_1_clickCount/subscriber",2,"__tests__/tags/FancyButton.marko_0_attrs",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button/#text
REMOVE #comment after html/body/button/#text
REMOVE #text after html/body/button/#text
UPDATE html/body/button/#text " " => "1"
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
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={"clickCount/1":0,"#childScope/0":_.e={"#button/0~":_.b={},"attrs/5":_.c={},"#text/1!":_.d={}}},2:_.e,3:_.d},_.b.click=_.c.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.d._=_.a,_.e["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.f),3,"__tests__/template.marko_1_clickCount/subscriber",2,"__tests__/tags/FancyButton.marko_0_attrs",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button/#text
REMOVE #text after html/body/button/#text
UPDATE html/body/button/#text " " => "2"
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
      <!--M_*3 #text/0-->
      <!--M_]2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={"clickCount/1":0,"#childScope/0":_.e={"#button/0~":_.b={},"attrs/5":_.c={},"#text/1!":_.d={}}},2:_.e,3:_.d},_.b.click=_.c.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.d._=_.a,_.e["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.f),3,"__tests__/template.marko_1_clickCount/subscriber",2,"__tests__/tags/FancyButton.marko_0_attrs",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button/#text
REMOVE #text after html/body/button/#text
UPDATE html/body/button/#text " " => "3"
```