# Render
```html
<html>
  <head />
  <body>
    <button>
      Inc
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[3-->
      <div>
        <!--M_[5-->
        <div>
          1
          <!--M_*5 #text/0-->
          .
          <!---->
          2
          <!--M_*5 #text/1-->
        </div>
        <!--M_]4 #text/0-->
      </div>
      <!--M_]2 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.d={x:1,y:2,"#childScope/1":_.e={value:1,"#text/0!":_.a={outer:1,"#childScope/0":_.c={value:2,"#text/0!":_.b={}}}}},2:_.e,3:_.a,4:_.c,5:_.b},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_2_renderer"](_.a),_.a._=_.d,_.e["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.d),_.f),5,"__tests__/template.marko_2_outer/subscriber",3,"__tests__/template.marko_1_y/subscriber",1,"__tests__/template.marko_0_x",0];M._.w()
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
      Inc
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[3-->
      <div>
        <!--M_[5-->
        <div>
          2
          <!--M_*5 #text/0-->
          .
          <!---->
          2
          <!--M_*5 #text/1-->
        </div>
        <!--M_]4 #text/0-->
      </div>
      <!--M_]2 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.d={x:1,y:2,"#childScope/1":_.e={value:1,"#text/0!":_.a={outer:1,"#childScope/0":_.c={value:2,"#text/0!":_.b={}}}}},2:_.e,3:_.a,4:_.c,5:_.b},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_2_renderer"](_.a),_.a._=_.d,_.e["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.d),_.f),5,"__tests__/template.marko_2_outer/subscriber",3,"__tests__/template.marko_1_y/subscriber",1,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/div/div/#text0 "1" => "2"
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
      Inc
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[3-->
      <div>
        <!--M_[5-->
        <div>
          3
          <!--M_*5 #text/0-->
          .
          <!---->
          2
          <!--M_*5 #text/1-->
        </div>
        <!--M_]4 #text/0-->
      </div>
      <!--M_]2 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.d={x:1,y:2,"#childScope/1":_.e={value:1,"#text/0!":_.a={outer:1,"#childScope/0":_.c={value:2,"#text/0!":_.b={}}}}},2:_.e,3:_.a,4:_.c,5:_.b},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_2_renderer"](_.a),_.a._=_.d,_.e["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.d),_.f),5,"__tests__/template.marko_2_outer/subscriber",3,"__tests__/template.marko_1_y/subscriber",1,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/div/div/#text0 "2" => "3"
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
      Inc
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[3-->
      <div>
        <!--M_[5-->
        <div>
          4
          <!--M_*5 #text/0-->
          .
          <!---->
          2
          <!--M_*5 #text/1-->
        </div>
        <!--M_]4 #text/0-->
      </div>
      <!--M_]2 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.d={x:1,y:2,"#childScope/1":_.e={value:1,"#text/0!":_.a={outer:1,"#childScope/0":_.c={value:2,"#text/0!":_.b={}}}}},2:_.e,3:_.a,4:_.c,5:_.b},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_2_renderer"](_.a),_.a._=_.d,_.e["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.d),_.f),5,"__tests__/template.marko_2_outer/subscriber",3,"__tests__/template.marko_1_y/subscriber",1,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/div/div/#text0 "3" => "4"
```