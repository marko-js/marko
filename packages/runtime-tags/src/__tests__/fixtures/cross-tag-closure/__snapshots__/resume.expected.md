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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={count:0,"#childScope/0":_.b={},"#childScope/1":_.d={"#text/0!":_.c={}}},1:_.b,2:_.d,3:_.c},_.b["/"]=_._["__tests__/template.marko_0_count/var"](_.a),_.b["@"]=_._["__tests__/tags/my-let.marko_0/valueChange"](_.b),_.c._=_.a,_.d["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.e),3,"__tests__/template.marko_1_count/subscriber",3,"__tests__/template.marko_1_count",0];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={count:0,"#childScope/0":_.b={},"#childScope/1":_.d={"#text/0!":_.c={}}},1:_.b,2:_.d,3:_.c},_.b["/"]=_._["__tests__/template.marko_0_count/var"](_.a),_.b["@"]=_._["__tests__/tags/my-let.marko_0/valueChange"](_.b),_.c._=_.a,_.d["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.e),3,"__tests__/template.marko_1_count/subscriber",3,"__tests__/template.marko_1_count",0];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={count:0,"#childScope/0":_.b={},"#childScope/1":_.d={"#text/0!":_.c={}}},1:_.b,2:_.d,3:_.c},_.b["/"]=_._["__tests__/template.marko_0_count/var"](_.a),_.b["@"]=_._["__tests__/tags/my-let.marko_0/valueChange"](_.b),_.c._=_.a,_.d["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.e),3,"__tests__/template.marko_1_count/subscriber",3,"__tests__/template.marko_1_count",0];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={count:0,"#childScope/0":_.b={},"#childScope/1":_.d={"#text/0!":_.c={}}},1:_.b,2:_.d,3:_.c},_.b["/"]=_._["__tests__/template.marko_0_count/var"](_.a),_.b["@"]=_._["__tests__/tags/my-let.marko_0/valueChange"](_.b),_.c._=_.a,_.d["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.e),3,"__tests__/template.marko_1_count/subscriber",3,"__tests__/template.marko_1_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
```