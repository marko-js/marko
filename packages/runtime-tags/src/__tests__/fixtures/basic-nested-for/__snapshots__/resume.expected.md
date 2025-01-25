# Render
```html
<html>
  <head />
  <body>
    <button>
      Push
    </button>
    <!--M_*0 #button/0-->
    <div>
      0.0
      <!--M_*3 #text/0-->
    </div>
    <div>
      0.1
      <!--M_*5 #text/0-->
    </div>
    <!--M_|1 #text/0 4 2-->
    <div>
      1.0
      <!--M_*8 #text/0-->
    </div>
    <div>
      1.1
      <!--M_*10 #text/0-->
    </div>
    <!--M_|6 #text/0 9 7-->
    <!--M_|0 #text/1 6 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.o={0:_.f={items:[0,1],"#text/1(":new Map(_.a=[[0,_.c={outer:0,"#text/0(":new Map(_.b=[[0,_.d={"#childScope/0":_.k={}}],[1,_.e={"#childScope/0":_.l={}}]])}],[1,_.h={outer:1,"#text/0(":new Map(_.g=[[0,_.i={"#childScope/0":_.m={}}],[1,_.j={"#childScope/0":_.n={}}]])}]])},1:_.c,2:_.d,3:_.k,4:_.e,5:_.l,6:_.h,7:_.i,8:_.m,9:_.j,10:_.n},_.d._=_.e._=_.c,_.c._=_.h._=_.f,_.i._=_.j._=_.h,_.o),0,"__tests__/template.marko_0_items",0];M._.w()
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
    <!--M_*0 #button/0-->
    <div>
      0.0
      <!--M_*3 #text/0-->
    </div>
    <div>
      0.1
      <!--M_*5 #text/0-->
    </div>
    <div>
      0.2
    </div>
    <!--M_|1 #text/0 4 2-->
    <div>
      1.0
      <!--M_*8 #text/0-->
    </div>
    <div>
      1.1
      <!--M_*10 #text/0-->
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
    <!--M_|6 #text/0 9 7-->
    <!--M_|0 #text/1 6 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.o={0:_.f={items:[0,1],"#text/1(":new Map(_.a=[[0,_.c={outer:0,"#text/0(":new Map(_.b=[[0,_.d={"#childScope/0":_.k={}}],[1,_.e={"#childScope/0":_.l={}}]])}],[1,_.h={outer:1,"#text/0(":new Map(_.g=[[0,_.i={"#childScope/0":_.m={}}],[1,_.j={"#childScope/0":_.n={}}]])}]])},1:_.c,2:_.d,3:_.k,4:_.e,5:_.l,6:_.h,7:_.i,8:_.m,9:_.j,10:_.n},_.d._=_.e._=_.c,_.c._=_.h._=_.f,_.i._=_.j._=_.h,_.o),0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment2
INSERT #text
INSERT html/body/#comment3
INSERT html/body/div2
INSERT html/body/div5
INSERT html/body/div6
INSERT html/body/div7
INSERT html/body/div8
REMOVE #text after html/body/#comment2
UPDATE html/body/div2/#text " " => "0.2"
UPDATE html/body/div5/#text " " => "1.2"
UPDATE html/body/div6/#text " " => "2.0"
UPDATE html/body/div7/#text " " => "2.1"
UPDATE html/body/div8/#text " " => "2.2"
```