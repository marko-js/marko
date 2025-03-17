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
      <p>
        Outer
        <!--M_*3 #text/0-->
      </p>
      <!--M_$3-->
      <div>
        <p>
          Middle
          <!--M_*5 #text/0-->
        </p>
        <!--M_$5-->
        <p>
          Inner
          <!--M_*7 #text/0-->
        </p>
        <!--M_$7-->
        <!--M_|4 #text/1 6-->
      </div>
      <!--M_|2 #text/1 4-->
    </div>
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"showInner!":_.i=new Set,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={},"showInner(":0}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.b._=_.a,_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.b,(_.i).add(_.c),_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter"];M._.w()
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
      <p>
        Outer
        <!--M_*3 #text/0-->
      </p>
      <!--M_$3-->
      <div>
        <p>
          Middle
          <!--M_*5 #text/0-->
        </p>
        <!--M_$5-->
        <!--M_|4 #text/1 6-->
        <!--M_$7-->
      </div>
      <!--M_|2 #text/1 4-->
    </div>
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"showInner!":_.i=new Set,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={},"showInner(":0}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.b._=_.a,_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.b,(_.i).add(_.c),_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/div/#comment1 after html/body/div/div/#comment2
INSERT html/body/div/div/#comment1
REMOVE #text in html/body/pre
INSERT html/body/pre/#text
REMOVE p after html/body/div/div/#comment1
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
      <p>
        Outer
        <!--M_*3 #text/0-->
      </p>
      <!--M_$3-->
      <!--M_|2 #text/1 4-->
    </div>
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"showInner!":_.i=new Set,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={},"showInner(":0}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.b._=_.a,_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.b,(_.i).add(_.c),_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter"];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"showInner!":_.i=new Set,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={},"showInner(":0}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.b._=_.a,_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.b,(_.i).add(_.c),_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter"];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"showInner!":_.i=new Set,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={},"showInner(":0}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.b._=_.a,_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.b,(_.i).add(_.c),_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter"];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"showInner!":_.i=new Set,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={},"showInner(":0}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.b._=_.a,_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.b,(_.i).add(_.c),_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter"];M._.w()
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
      <p>
        Outer
      </p>
      <div>
        <p>
          Middle
        </p>
        <p>
          Inner
        </p>
      </div>
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"showInner!":_.i=new Set,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={},"showInner(":0}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.b._=_.a,_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.b,(_.i).add(_.c),_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
REMOVE #comment after html/body/div
UPDATE html/body/div/p/#text " " => "Outer"
INSERT html/body/div/div
REMOVE #text after html/body/div/div
UPDATE html/body/div/div/p0/#text " " => "Middle"
INSERT html/body/div/div/p1
REMOVE #text after html/body/div/div/p1
UPDATE html/body/div/div/p1/#text " " => "Inner"
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"showInner!":_.i=new Set,"#text/4(":0,"#text/4!":_.b={"#text/1(":0,"#text/1!":_.c={"#text/1(":0,"#text/1!":_.f={},"showInner(":0}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.b._=_.a,_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.b,(_.i).add(_.c),_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter"];M._.w()
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