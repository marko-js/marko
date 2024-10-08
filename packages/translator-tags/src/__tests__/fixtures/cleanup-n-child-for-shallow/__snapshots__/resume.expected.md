# Render {}
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div>
      
mounted 1
mounted 2
mounted 3
    </div>
    <!--M_*0 #div/1-->
    <!--M_[1-->
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <span>
      1
      <!--M_*2 #text/1-->
    </span>
    <p>
      1
      <!--M_*2 #text/2-->
    </p>
    <!--M_$2-->
    <!--M_[3 1-->
    <div>
      2
      <!--M_*4 #text/0-->
    </div>
    <span>
      2
      <!--M_*4 #text/1-->
    </span>
    <p>
      2
      <!--M_*4 #text/2-->
    </p>
    <!--M_$4-->
    <!--M_[5 2-->
    <div>
      3
      <!--M_*6 #text/0-->
    </div>
    <span>
      3
      <!--M_*6 #text/1-->
    </span>
    <p>
      3
      <!--M_*6 #text/2-->
    </p>
    <!--M_$6-->
    <!--M_]0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},1:_.f,2:_.c,3:_.g,4:_.d,5:_.h,6:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0/_"](_.a),_.i),2,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",4,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",6,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",0,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #text
removed #text in #document/html0/body1/div2
inserted #text
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div>
      
mounted 1
mounted 2
mounted 3
destroyed 3
    </div>
    <!--M_*0 #div/1-->
    <!--M_[1-->
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <span>
      1
      <!--M_*2 #text/1-->
    </span>
    <p>
      1
      <!--M_*2 #text/2-->
    </p>
    <!--M_$2-->
    <!--M_[3 1-->
    <div>
      2
      <!--M_*4 #text/0-->
    </div>
    <span>
      2
      <!--M_*4 #text/1-->
    </span>
    <p>
      2
      <!--M_*4 #text/2-->
    </p>
    <!--M_$4-->
    <!--M_$6-->
    <!--M_]0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},1:_.f,2:_.c,3:_.g,4:_.d,5:_.h,6:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0/_"](_.a),_.i),2,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",4,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",6,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",0,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
removed #comment after #document/html0/body1/#comment13
removed div after #document/html0/body1/#comment13
removed span after #document/html0/body1/#comment13
removed p after #document/html0/body1/#comment13
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div>
      
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
    </div>
    <!--M_*0 #div/1-->
    <!--M_[1-->
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <span>
      1
      <!--M_*2 #text/1-->
    </span>
    <p>
      1
      <!--M_*2 #text/2-->
    </p>
    <!--M_$2-->
    <!--M_$4-->
    <!--M_$6-->
    <!--M_]0 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},1:_.f,2:_.c,3:_.g,4:_.d,5:_.h,6:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0/_"](_.a),_.i),2,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",4,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",6,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",0,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
removed #comment after #document/html0/body1/#comment8
removed div after #document/html0/body1/#comment8
removed span after #document/html0/body1/#comment8
removed p after #document/html0/body1/#comment8
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div>
      
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
destroyed 1
    </div>
    <!--M_*0 #div/1-->
    <!--M_]0 #text/2-->
    <!--M_$2-->
    <!--M_$4-->
    <!--M_$6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},1:_.f,2:_.c,3:_.g,4:_.d,5:_.h,6:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0/_"](_.a),_.i),2,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",4,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",6,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",0,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment4 after #document/html0/body1/#comment7
inserted #document/html0/body1/#comment4
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
removed #comment after #document/html0/body1/#comment3
removed div after #document/html0/body1/#comment3
removed span after #document/html0/body1/#comment3
removed p after #document/html0/body1/#comment3
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div>
      
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
destroyed 1
mounted 1
mounted 2
mounted 3
    </div>
    <!--M_*0 #div/1-->
    <div>
      1
    </div>
    <span>
      1
    </span>
    <p>
      1
    </p>
    <div>
      2
    </div>
    <span>
      2
    </span>
    <p>
      2
    </p>
    <div>
      3
    </div>
    <span>
      3
    </span>
    <p>
      3
    </p>
    <!--M_$2-->
    <!--M_$4-->
    <!--M_$6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},1:_.f,2:_.c,3:_.g,4:_.d,5:_.h,6:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0/_"](_.a),_.i),2,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",4,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",6,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/components/child.marko_0_name_write",0,"packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div4
inserted #document/html0/body1/span5
inserted #document/html0/body1/p6
inserted #document/html0/body1/div7
inserted #document/html0/body1/span8
inserted #document/html0/body1/p9
inserted #document/html0/body1/div10
inserted #document/html0/body1/span11
inserted #document/html0/body1/p12
removed #comment after #document/html0/body1/#comment3
removed #text in #document/html0/body1/div2
inserted #text
removed #text in #document/html0/body1/div2
inserted #text
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
```