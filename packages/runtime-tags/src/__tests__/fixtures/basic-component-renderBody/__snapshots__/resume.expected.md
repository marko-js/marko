# Render
```html
<html>
  <head />
  <body>
    <button>
      <!--M_[2-->
      0
      <!--M_*2 #text/0-->
      <!--M_]1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={clickCount:0,"#childScope/0":_.b={"#text/1!":_.c={}}},1:_.b,2:_.c},_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.c._=_.a,_.b["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),2,"__tests__/template.marko_1_clickCount/subscriber",1,"__tests__/tags/my-button.marko_0_onClick",0];M._.w()
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
      <!--M_[2-->
      1
      <!--M_*2 #text/0-->
      <!--M_]1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={clickCount:0,"#childScope/0":_.b={"#text/1!":_.c={}}},1:_.b,2:_.c},_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.c._=_.a,_.b["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),2,"__tests__/template.marko_1_clickCount/subscriber",1,"__tests__/tags/my-button.marko_0_onClick",0];M._.w()
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
    <button>
      <!--M_[2-->
      2
      <!--M_*2 #text/0-->
      <!--M_]1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={clickCount:0,"#childScope/0":_.b={"#text/1!":_.c={}}},1:_.b,2:_.c},_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.c._=_.a,_.b["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),2,"__tests__/template.marko_1_clickCount/subscriber",1,"__tests__/tags/my-button.marko_0_onClick",0];M._.w()
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
    <button>
      <!--M_[2-->
      3
      <!--M_*2 #text/0-->
      <!--M_]1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={clickCount:0,"#childScope/0":_.b={"#text/1!":_.c={}}},1:_.b,2:_.c},_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.a),_.c._=_.a,_.b["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),2,"__tests__/template.marko_1_clickCount/subscriber",1,"__tests__/tags/my-button.marko_0_onClick",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
```