# Render
```html
<html>
  <head />
  <body>
    <button>
      Push
    </button>
    <!--M_*1 #button/0-->
    <div>
      0.0
      <!--M_*4 #text/0-->
    </div>
    <div>
      0.1
      <!--M_*6 #text/0-->
    </div>
    <!--M_|2 #text/0 5 3-->
    <div>
      1.0
      <!--M_*9 #text/0-->
    </div>
    <div>
      1.1
      <!--M_*11 #text/0-->
    </div>
    <!--M_|7 #text/0 10 8-->
    <!--M_|1 #text/1 7 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.o=[0,_.f={items:[0,1],"LoopScopeMap:#text/1":new Map(_.a=[[0,_.c={outer:0,"LoopScopeMap:#text/0":new Map(_.b=[[0,_.d={"#childScope/0":_.k={}}],[1,_.e={"#childScope/0":_.l={}}]])}],[1,_.h={outer:1,"LoopScopeMap:#text/0":new Map(_.g=[[0,_.i={"#childScope/0":_.m={}}],[1,_.j={"#childScope/0":_.n={}}]])}]])},_.c,_.d,_.k,_.e,_.l,_.h,_.i,_.m,_.j,_.n],_.d._=_.e._=_.c,_.c._=_.h._=_.f,_.i._=_.j._=_.h,_.o),1,"__tests__/template.marko_0_items"];M._.w()
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
      Push
    </button>
    <!--M_*1 #button/0-->
    <div>
      0.0
      <!--M_*4 #text/0-->
    </div>
    <div>
      0.1
      <!--M_*6 #text/0-->
    </div>
    <div>
      0.2
    </div>
    <!--M_|2 #text/0 5 3-->
    <div>
      1.0
      <!--M_*9 #text/0-->
    </div>
    <div>
      1.1
      <!--M_*11 #text/0-->
    </div>
    <div>
      1.2
    </div>
    <!---->
    <div>
      2.0
    </div>
    <div>
      2.1
    </div>
    <div>
      2.2
    </div>
    <!---->
    <!--M_|7 #text/0 10 8-->
    <!--M_|1 #text/1 7 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.o=[0,_.f={items:[0,1],"LoopScopeMap:#text/1":new Map(_.a=[[0,_.c={outer:0,"LoopScopeMap:#text/0":new Map(_.b=[[0,_.d={"#childScope/0":_.k={}}],[1,_.e={"#childScope/0":_.l={}}]])}],[1,_.h={outer:1,"LoopScopeMap:#text/0":new Map(_.g=[[0,_.i={"#childScope/0":_.m={}}],[1,_.j={"#childScope/0":_.n={}}]])}]])},_.c,_.d,_.k,_.e,_.l,_.h,_.i,_.m,_.j,_.n],_.d._=_.e._=_.c,_.c._=_.h._=_.f,_.i._=_.j._=_.h,_.o),1,"__tests__/template.marko_0_items"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment2, #text, html/body/#comment3
INSERT html/body/div2
INSERT html/body/div5
REMOVE #text after html/body/#comment2
INSERT html/body/div6
INSERT html/body/div7
INSERT html/body/div8
UPDATE html/body/div2/#text " " => "0.2"
UPDATE html/body/div5/#text " " => "1.2"
UPDATE html/body/div6/#text " " => "2.0"
UPDATE html/body/div7/#text " " => "2.1"
UPDATE html/body/div8/#text " " => "2.2"
```