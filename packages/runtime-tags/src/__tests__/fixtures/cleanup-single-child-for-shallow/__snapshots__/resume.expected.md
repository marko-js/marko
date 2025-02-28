# Render
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <div>
      
mounted 1
mounted 2
mounted 3
    </div>
    <!--M_*1 #div/1-->
    <div>
      1
      <!--M_*3 #text/0-->
    </div>
    <!--M_$3-->
    <div>
      2
      <!--M_*5 #text/0-->
    </div>
    <!--M_$5-->
    <div>
      3
      <!--M_*7 #text/0-->
    </div>
    <!--M_$7-->
    <!--M_|1 #text/2 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},2:_.f,3:_.c,4:_.g,5:_.d,6:_.h,7:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.i),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
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
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <div>
      
mounted 1
mounted 2
mounted 3
destroyed 3
    </div>
    <!--M_*1 #div/1-->
    <div>
      1
      <!--M_*3 #text/0-->
    </div>
    <!--M_$3-->
    <div>
      2
      <!--M_*5 #text/0-->
    </div>
    <!--M_$5-->
    <!--M_$7-->
    <!--M_|1 #text/2 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},2:_.f,3:_.c,4:_.g,5:_.d,6:_.h,7:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.i),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
REMOVE div after html/body/#comment3
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
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <div>
      
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
    </div>
    <!--M_*1 #div/1-->
    <div>
      1
      <!--M_*3 #text/0-->
    </div>
    <!--M_$3-->
    <!--M_$5-->
    <!--M_$7-->
    <!--M_|1 #text/2 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},2:_.f,3:_.c,4:_.g,5:_.d,6:_.h,7:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.i),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
REMOVE div after html/body/#comment2
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
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <div>
      
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
destroyed 1
    </div>
    <!--M_*1 #div/1-->
    <!--M_|1 #text/2 6 4 2-->
    <!--M_$3-->
    <!--M_$5-->
    <!--M_$7-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},2:_.f,3:_.c,4:_.g,5:_.d,6:_.h,7:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.i),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment2 after html/body/#comment5
INSERT html/body/#comment2
REMOVE #text in html/body/div
INSERT html/body/div/#text
REMOVE div after html/body/#comment1
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
      Toggle
    </button>
    <!--M_*1 #button/0-->
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
    <!--M_*1 #div/1-->
    <div>
      1
    </div>
    <div>
      2
    </div>
    <div>
      3
    </div>
    <!--M_$3-->
    <!--M_$5-->
    <!--M_$7-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={"#childScope/0":_.c={name:1}}],[1,_.g={"#childScope/0":_.d={name:2}}],[2,_.h={"#childScope/0":_.e={name:3}}]])},2:_.f,3:_.c,4:_.g,5:_.d,6:_.h,7:_.e},_.a.write=_.c.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.i),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #comment after html/body/#comment1
INSERT html/body/div1
INSERT html/body/div2
INSERT html/body/div3
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
```