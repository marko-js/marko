# Render {}
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
    <!--M_|1 #text/0 2,4-->
    <div>
      1.0
      <!--M_*8 #text/0-->
    </div>
    <div>
      1.1
      <!--M_*10 #text/0-->
    </div>
    <!--M_|6 #text/0 7,9-->
    <!--M_|0 #text/1 1,6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.o={0:_.f={items:[0,1],items_length:2,"#text/1(":new Map(_.a=[[0,_.c={outer:0,"#text/0(":new Map(_.b=[[0,_.d={"#childScope/0":_.k={}}],[1,_.e={"#childScope/0":_.l={}}]])}],[1,_.h={outer:1,"#text/0(":new Map(_.g=[[0,_.i={"#childScope/0":_.m={}}],[1,_.j={"#childScope/0":_.n={}}]])}]])},1:_.c,2:_.d,3:_.k,4:_.e,5:_.l,6:_.h,7:_.i,8:_.m,9:_.j,10:_.n},_.d._=_.e._=_.c,_.c._=_.h._=_.f,_.i._=_.j._=_.h,_.o),0,"packages/translator-tags/src/__tests__/fixtures/basic-nested-for/template.marko_0_items_items_length",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

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
    <!--M_|1 #text/0 2,4-->
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
    <!--M_|6 #text/0 7,9-->
    <!--M_|0 #text/1 1,6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.o={0:_.f={items:[0,1],items_length:2,"#text/1(":new Map(_.a=[[0,_.c={outer:0,"#text/0(":new Map(_.b=[[0,_.d={"#childScope/0":_.k={}}],[1,_.e={"#childScope/0":_.l={}}]])}],[1,_.h={outer:1,"#text/0(":new Map(_.g=[[0,_.i={"#childScope/0":_.m={}}],[1,_.j={"#childScope/0":_.n={}}]])}]])},1:_.c,2:_.d,3:_.k,4:_.e,5:_.l,6:_.h,7:_.i,8:_.m,9:_.j,10:_.n},_.d._=_.e._=_.c,_.c._=_.h._=_.f,_.i._=_.j._=_.h,_.o),0,"packages/translator-tags/src/__tests__/fixtures/basic-nested-for/template.marko_0_items_items_length",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#comment9
inserted #text
inserted #document/html0/body1/#comment13
inserted #document/html0/body1/div4
inserted #document/html0/body1/div8
inserted #document/html0/body1/div10
inserted #document/html0/body1/div11
inserted #document/html0/body1/div12
removed #text after #document/html0/body1/#comment9
```