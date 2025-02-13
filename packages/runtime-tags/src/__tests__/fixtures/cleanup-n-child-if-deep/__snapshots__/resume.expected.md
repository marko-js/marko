# Render
```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*1 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*1 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*1 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
    </pre>
    <!--M_*1 #pre/3-->
    <div>
      <div>
        Outer
        <!--M_*3 #text/0-->
         a
      </div>
      <span>
        Outer
        <!--M_*3 #text/1-->
         a
      </span>
      <p>
        Outer
        <!--M_*3 #text/2-->
         a
      </p>
      <!--M_$3-->
      <div>
        <div>
          Middle
          <!--M_*5 #text/0-->
           a
        </div>
        <span>
          Middle
          <!--M_*5 #text/1-->
           a
        </span>
        <p>
          Middle
          <!--M_*5 #text/2-->
           a
        </p>
        <!--M_$5-->
        <!--M_[6-->
        <div>
          Inner
          <!--M_*7 #text/0-->
           a
        </div>
        <span>
          Inner
          <!--M_*7 #text/1-->
           a
        </span>
        <p>
          Inner
          <!--M_*7 #text/2-->
           a
        </p>
        <!--M_$7-->
        <!--M_]4 #text/1-->
      </div>
      <!--M_|2 #text/1 4-->
    </div>
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={}}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.b._=_.a,_.c._=_.b,_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",4,"__tests__/template.marko_2_showInner/subscriber",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #text
REMOVE #text in html/body/pre
INSERT #text
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
```

# Render
```js
container.querySelector("button#inner").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*1 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*1 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*1 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
    </pre>
    <!--M_*1 #pre/3-->
    <div>
      <div>
        Outer
        <!--M_*3 #text/0-->
         a
      </div>
      <span>
        Outer
        <!--M_*3 #text/1-->
         a
      </span>
      <p>
        Outer
        <!--M_*3 #text/2-->
         a
      </p>
      <!--M_$3-->
      <div>
        <div>
          Middle
          <!--M_*5 #text/0-->
           a
        </div>
        <span>
          Middle
          <!--M_*5 #text/1-->
           a
        </span>
        <p>
          Middle
          <!--M_*5 #text/2-->
           a
        </p>
        <!--M_$5-->
        <!--M_]4 #text/1-->
        <!--M_$7-->
      </div>
      <!--M_|2 #text/1 4-->
    </div>
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={}}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.b._=_.a,_.c._=_.b,_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",4,"__tests__/template.marko_2_showInner/subscriber",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/div1/#comment1 after html/body/div/div1/#comment2
INSERT html/body/div/div1/#comment1
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
REMOVE #comment after html/body/div/div1/#comment1
REMOVE div after html/body/div/div1/#comment1
REMOVE span after html/body/div/div1/#comment1
REMOVE p after html/body/div/div1/#comment1
```

# Render
```js
container.querySelector("button#middle").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*1 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*1 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*1 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
    </pre>
    <!--M_*1 #pre/3-->
    <div>
      <div>
        Outer
        <!--M_*3 #text/0-->
         a
      </div>
      <span>
        Outer
        <!--M_*3 #text/1-->
         a
      </span>
      <p>
        Outer
        <!--M_*3 #text/2-->
         a
      </p>
      <!--M_$3-->
      <!--M_|2 #text/1 4-->
    </div>
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={}}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.b._=_.a,_.c._=_.b,_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",4,"__tests__/template.marko_2_showInner/subscriber",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment1 after div
INSERT html/body/div/#comment1
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
REMOVE div after html/body/div/#comment1
```

# Render
```js
container.querySelector("button#outer").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*1 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*1 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*1 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*1 #pre/3-->
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={}}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.b._=_.a,_.c._=_.b,_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",4,"__tests__/template.marko_2_showInner/subscriber",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment4 after div
INSERT html/body/#comment4
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
REMOVE div after html/body/#comment4
```

# Render
```js
container.querySelector("button#inner").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*1 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*1 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*1 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*1 #pre/3-->
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={}}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.b._=_.a,_.c._=_.b,_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",4,"__tests__/template.marko_2_showInner/subscriber",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button#middle").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*1 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*1 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*1 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*1 #pre/3-->
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={}}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.b._=_.a,_.c._=_.b,_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",4,"__tests__/template.marko_2_showInner/subscriber",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button#outer").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*1 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*1 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*1 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
    </pre>
    <!--M_*1 #pre/3-->
    <div>
      <div>
        Outer a
      </div>
      <span>
        Outer a
      </span>
      <p>
        Outer a
      </p>
      <div>
        <div>
          Middle a
        </div>
        <span>
          Middle a
        </span>
        <p>
          Middle a
        </p>
        <div>
          Inner a
        </div>
        <span>
          Inner a
        </span>
        <p>
          Inner a
        </p>
      </div>
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={}}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.b._=_.a,_.c._=_.b,_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",4,"__tests__/template.marko_2_showInner/subscriber",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
REMOVE #comment after html/body/div
INSERT html/body/div/div1
REMOVE #text after html/body/div/div1
UPDATE html/body/div/div0/#text0 "" => "Outer"
UPDATE html/body/div/span/#text0 "" => "Outer"
UPDATE html/body/div/p/#text0 "" => "Outer"
INSERT html/body/div/div1/div1, html/body/div/div1/span1, html/body/div/div1/p1
REMOVE #text after html/body/div/div1/p1
UPDATE html/body/div/div1/div0/#text0 "" => "Middle"
UPDATE html/body/div/div1/span0/#text0 "" => "Middle"
UPDATE html/body/div/div1/p0/#text0 "" => "Middle"
UPDATE html/body/div/div1/div1/#text0 "" => "Inner"
UPDATE html/body/div/div1/span1/#text0 "" => "Inner"
UPDATE html/body/div/div1/p1/#text0 "" => "Inner"
REMOVE #text in html/body/pre
INSERT #text
REMOVE #text in html/body/pre
INSERT #text
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
```

# Render
```js
container.querySelector("button#outer").click();
```
```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*1 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*1 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*1 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*1 #pre/3-->
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={}}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.b._=_.a,_.c._=_.b,_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",4,"__tests__/template.marko_2_showInner/subscriber",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment4
REMOVE #text in html/body/pre
INSERT #text
REMOVE #text in html/body/pre
INSERT #text
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
REMOVE div after html/body/#comment4
```