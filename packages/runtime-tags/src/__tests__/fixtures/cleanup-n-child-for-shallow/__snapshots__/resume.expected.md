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
    <!--M_[2-->
    <div>
      1
      <!--M_*3 #text/0-->
    </div>
    <span>
      1
      <!--M_*3 #text/1-->
    </span>
    <p>
      1
      <!--M_*3 #text/2-->
    </p>
    <!--M_[4 -->
    <div>
      2
      <!--M_*5 #text/0-->
    </div>
    <span>
      2
      <!--M_*5 #text/1-->
    </span>
    <p>
      2
      <!--M_*5 #text/2-->
    </p>
    <!--M_[6 -->
    <div>
      3
      <!--M_*7 #text/0-->
    </div>
    <span>
      3
      <!--M_*7 #text/1-->
    </span>
    <p>
      3
      <!--M_*7 #text/2-->
    </p>
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={"LoopScopeMap:#text/2":new Map(_.a=[[0,_.f={"#childScope/0":_.c={name:1,"#ClosestBranchId":2}}],[1,_.g={"#childScope/0":_.d={name:2,"#ClosestBranchId":4}}],[2,_.h={"#childScope/0":_.e={name:3,"#ClosestBranchId":6}}]]),items:[1,2,3]},_.f,_.c,_.g,_.d,_.h,_.e],_.c.write=_.d.write=_.e.write=_.b.write=_._["__tests__/template.marko_0/write"](_.b),_.i),"__tests__/tags/child.marko_0_name_write",3,5,7,"__tests__/template.marko_0_items",1];M._.w()
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
    <!--M_[2-->
    <div>
      1
      <!--M_*3 #text/0-->
    </div>
    <span>
      1
      <!--M_*3 #text/1-->
    </span>
    <p>
      1
      <!--M_*3 #text/2-->
    </p>
    <!--M_[4 -->
    <div>
      2
      <!--M_*5 #text/0-->
    </div>
    <span>
      2
      <!--M_*5 #text/1-->
    </span>
    <p>
      2
      <!--M_*5 #text/2-->
    </p>
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={"LoopScopeMap:#text/2":new Map(_.a=[[0,_.f={"#childScope/0":_.c={name:1,"#ClosestBranchId":2}}],[1,_.g={"#childScope/0":_.d={name:2,"#ClosestBranchId":4}}],[2,_.h={"#childScope/0":_.e={name:3,"#ClosestBranchId":6}}]]),items:[1,2,3]},_.f,_.c,_.g,_.d,_.h,_.e],_.c.write=_.d.write=_.e.write=_.b.write=_._["__tests__/template.marko_0/write"](_.b),_.i),"__tests__/tags/child.marko_0_name_write",3,5,7,"__tests__/template.marko_0_items",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
REMOVE #comment after html/body/p1
REMOVE div after html/body/p1
REMOVE span after html/body/p1
REMOVE p after html/body/p1
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
    <!--M_[2-->
    <div>
      1
      <!--M_*3 #text/0-->
    </div>
    <span>
      1
      <!--M_*3 #text/1-->
    </span>
    <p>
      1
      <!--M_*3 #text/2-->
    </p>
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={"LoopScopeMap:#text/2":new Map(_.a=[[0,_.f={"#childScope/0":_.c={name:1,"#ClosestBranchId":2}}],[1,_.g={"#childScope/0":_.d={name:2,"#ClosestBranchId":4}}],[2,_.h={"#childScope/0":_.e={name:3,"#ClosestBranchId":6}}]]),items:[1,2,3]},_.f,_.c,_.g,_.d,_.h,_.e],_.c.write=_.d.write=_.e.write=_.b.write=_._["__tests__/template.marko_0/write"](_.b),_.i),"__tests__/tags/child.marko_0_name_write",3,5,7,"__tests__/template.marko_0_items",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
REMOVE #comment after html/body/p
REMOVE div after html/body/p
REMOVE span after html/body/p
REMOVE p after html/body/p
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
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={"LoopScopeMap:#text/2":new Map(_.a=[[0,_.f={"#childScope/0":_.c={name:1,"#ClosestBranchId":2}}],[1,_.g={"#childScope/0":_.d={name:2,"#ClosestBranchId":4}}],[2,_.h={"#childScope/0":_.e={name:3,"#ClosestBranchId":6}}]]),items:[1,2,3]},_.f,_.c,_.g,_.d,_.h,_.e],_.c.write=_.d.write=_.e.write=_.b.write=_._["__tests__/template.marko_0/write"](_.b),_.i),"__tests__/tags/child.marko_0_name_write",3,5,7,"__tests__/template.marko_0_items",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment2 after p
INSERT html/body/#comment2
REMOVE #text in html/body/div
INSERT html/body/div/#text
REMOVE #comment after html/body/#comment1
REMOVE div after html/body/#comment1
REMOVE span after html/body/#comment1
REMOVE p after html/body/#comment1
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
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={"LoopScopeMap:#text/2":new Map(_.a=[[0,_.f={"#childScope/0":_.c={name:1,"#ClosestBranchId":2}}],[1,_.g={"#childScope/0":_.d={name:2,"#ClosestBranchId":4}}],[2,_.h={"#childScope/0":_.e={name:3,"#ClosestBranchId":6}}]]),items:[1,2,3]},_.f,_.c,_.g,_.d,_.h,_.e],_.c.write=_.d.write=_.e.write=_.b.write=_._["__tests__/template.marko_0/write"](_.b),_.i),"__tests__/tags/child.marko_0_name_write",3,5,7,"__tests__/template.marko_0_items",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #comment after html/body/#comment1
INSERT html/body/div1, html/body/span0, html/body/p0
INSERT html/body/div2, html/body/span1, html/body/p1
INSERT html/body/div3, html/body/span2, html/body/p2
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT #text
REMOVE #text in html/body/div0
INSERT html/body/div0/#text
```