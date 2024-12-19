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
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_$2-->
    <div>
      2
      <!--M_*4 #text/0-->
    </div>
    <!--M_$4-->
    <div>
      3
      <!--M_*6 #text/0-->
    </div>
    <!--M_$6-->
    <!--M_|0 #text/2 1,3,5-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},1:_.f,2:_.c,3:_.g,4:_.d,5:_.h,6:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.i),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",0,"__tests__/template.marko_0_items",0];M._.w()
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
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_$2-->
    <div>
      2
      <!--M_*4 #text/0-->
    </div>
    <!--M_$4-->
    <!--M_$6-->
    <!--M_|0 #text/2 1,3,5-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},1:_.f,2:_.c,3:_.g,4:_.d,5:_.h,6:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.i),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
removed div after #document/html0/body1/#comment7
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
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_$2-->
    <!--M_$4-->
    <!--M_$6-->
    <!--M_|0 #text/2 1,3,5-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},1:_.f,2:_.c,3:_.g,4:_.d,5:_.h,6:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.i),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
removed div after #document/html0/body1/#comment5
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
    <!--M_|0 #text/2 1,3,5-->
    <!--M_$2-->
    <!--M_$4-->
    <!--M_$6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},1:_.f,2:_.c,3:_.g,4:_.d,5:_.h,6:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.i),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",0,"__tests__/template.marko_0_items",0];M._.w()
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
removed div after #document/html0/body1/#comment3
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
    <div>
      2
    </div>
    <div>
      3
    </div>
    <!--M_$2-->
    <!--M_$4-->
    <!--M_$6-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},1:_.f,2:_.c,3:_.g,4:_.d,5:_.h,6:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.i),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",0,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div4
inserted #document/html0/body1/div5
inserted #document/html0/body1/div6
removed #comment after #document/html0/body1/#comment3
removed #text in #document/html0/body1/div2
inserted #text
removed #text in #document/html0/body1/div2
inserted #text
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
```