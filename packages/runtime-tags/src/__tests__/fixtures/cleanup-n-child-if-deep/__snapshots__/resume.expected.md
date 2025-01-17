# Render {}
```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*0 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*0 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
    </pre>
    <!--M_*0 #pre/3-->
    <div>
      <div>
        Outer
        <!--M_*2 #text/0-->
         a
      </div>
      <span>
        Outer
        <!--M_*2 #text/1-->
         a
      </span>
      <p>
        Outer
        <!--M_*2 #text/2-->
         a
      </p>
      <!--M_$2-->
      <div>
        <div>
          Middle
          <!--M_*4 #text/0-->
           a
        </div>
        <span>
          Middle
          <!--M_*4 #text/1-->
           a
        </span>
        <p>
          Middle
          <!--M_*4 #text/2-->
           a
        </p>
        <!--M_$4-->
        <!--M_[5-->
        <div>
          Inner
          <!--M_*6 #text/0-->
           a
        </div>
        <span>
          Inner
          <!--M_*6 #text/1-->
           a
        </span>
        <p>
          Inner
          <!--M_*6 #text/2-->
           a
        </p>
        <!--M_$6-->
        <!--M_$5-->
        <!--M_]3 #text/1-->
      </div>
      <!--M_$3-->
      <!--M_|1 #text/1 3-->
    </div>
    <!--M_$1-->
    <!--M_|0 #text/4 1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={0:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":_._["__tests__/template.marko_1_renderer"],"#text/4!":_.c={"#childScope/0":_.b={name:"Outer"},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.f={"#childScope/0":_.d={name:"Middle"},"#text/1(":_._["__tests__/template.marko_3_renderer"],"#text/1!":_.g={"#childScope/0":_.e={name:"Inner"}}}}},1:_.c,2:_.b,3:_.f,4:_.d,5:_.g,6:_.e},_.a.write=_.b.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.a,_.f._=_.c,_.h),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",3,"__tests__/template.marko_2_showInner/subscriber",0,"__tests__/template.marko_0_showInner",0,"__tests__/template.marko_0_showMiddle",0,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #text
removed #text in #document/html0/body1/pre6
inserted #text
removed #text in #document/html0/body1/pre6
inserted #document/html0/body1/pre6/#text0
```


# Render 
container.querySelector("button#inner").click()

```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*0 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*0 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
    </pre>
    <!--M_*0 #pre/3-->
    <div>
      <div>
        Outer
        <!--M_*2 #text/0-->
         a
      </div>
      <span>
        Outer
        <!--M_*2 #text/1-->
         a
      </span>
      <p>
        Outer
        <!--M_*2 #text/2-->
         a
      </p>
      <!--M_$2-->
      <div>
        <div>
          Middle
          <!--M_*4 #text/0-->
           a
        </div>
        <span>
          Middle
          <!--M_*4 #text/1-->
           a
        </span>
        <p>
          Middle
          <!--M_*4 #text/2-->
           a
        </p>
        <!--M_$4-->
        <!--M_]3 #text/1-->
        <!--M_$6-->
        <!--M_$5-->
      </div>
      <!--M_$3-->
      <!--M_|1 #text/1 3-->
    </div>
    <!--M_$1-->
    <!--M_|0 #text/4 1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={0:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":_._["__tests__/template.marko_1_renderer"],"#text/4!":_.c={"#childScope/0":_.b={name:"Outer"},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.f={"#childScope/0":_.d={name:"Middle"},"#text/1(":_._["__tests__/template.marko_3_renderer"],"#text/1!":_.g={"#childScope/0":_.e={name:"Inner"}}}}},1:_.c,2:_.b,3:_.f,4:_.d,5:_.g,6:_.e},_.a.write=_.b.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.a,_.f._=_.c,_.h),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",3,"__tests__/template.marko_2_showInner/subscriber",0,"__tests__/template.marko_0_showInner",0,"__tests__/template.marko_0_showMiddle",0,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div8/div4/#comment4 after #document/html0/body1/div8/div4/#comment6
inserted #document/html0/body1/div8/div4/#comment4
removed #text in #document/html0/body1/pre6
inserted #document/html0/body1/pre6/#text0
removed #comment after #document/html0/body1/div8/div4/#comment4
removed div after #document/html0/body1/div8/div4/#comment4
removed span after #document/html0/body1/div8/div4/#comment4
removed p after #document/html0/body1/div8/div4/#comment4
```


# Render 
container.querySelector("button#middle").click()

```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*0 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*0 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
    </pre>
    <!--M_*0 #pre/3-->
    <div>
      <div>
        Outer
        <!--M_*2 #text/0-->
         a
      </div>
      <span>
        Outer
        <!--M_*2 #text/1-->
         a
      </span>
      <p>
        Outer
        <!--M_*2 #text/2-->
         a
      </p>
      <!--M_$2-->
      <!--M_|1 #text/1 3-->
      <!--M_$3-->
    </div>
    <!--M_$1-->
    <!--M_|0 #text/4 1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={0:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":_._["__tests__/template.marko_1_renderer"],"#text/4!":_.c={"#childScope/0":_.b={name:"Outer"},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.f={"#childScope/0":_.d={name:"Middle"},"#text/1(":_._["__tests__/template.marko_3_renderer"],"#text/1!":_.g={"#childScope/0":_.e={name:"Inner"}}}}},1:_.c,2:_.b,3:_.f,4:_.d,5:_.g,6:_.e},_.a.write=_.b.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.a,_.f._=_.c,_.h),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",3,"__tests__/template.marko_2_showInner/subscriber",0,"__tests__/template.marko_0_showInner",0,"__tests__/template.marko_0_showMiddle",0,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div8/#comment4 after #document/html0/body1/div8/#comment5
inserted #document/html0/body1/div8/#comment4
removed #text in #document/html0/body1/pre6
inserted #document/html0/body1/pre6/#text0
removed div after #document/html0/body1/div8/#comment4
```


# Render 
container.querySelector("button#outer").click()

```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*0 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*0 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*0 #pre/3-->
    <!--M_|0 #text/4 1-->
    <!--M_$1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={0:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":_._["__tests__/template.marko_1_renderer"],"#text/4!":_.c={"#childScope/0":_.b={name:"Outer"},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.f={"#childScope/0":_.d={name:"Middle"},"#text/1(":_._["__tests__/template.marko_3_renderer"],"#text/1!":_.g={"#childScope/0":_.e={name:"Inner"}}}}},1:_.c,2:_.b,3:_.f,4:_.d,5:_.g,6:_.e},_.a.write=_.b.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.a,_.f._=_.c,_.h),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",3,"__tests__/template.marko_2_showInner/subscriber",0,"__tests__/template.marko_0_showInner",0,"__tests__/template.marko_0_showMiddle",0,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment8 after #document/html0/body1/#comment9
inserted #document/html0/body1/#comment8
removed #text in #document/html0/body1/pre6
inserted #document/html0/body1/pre6/#text0
removed div after #document/html0/body1/#comment8
```


# Render 
container.querySelector("button#inner").click()

```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*0 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*0 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*0 #pre/3-->
    <!--M_|0 #text/4 1-->
    <!--M_$1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={0:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":_._["__tests__/template.marko_1_renderer"],"#text/4!":_.c={"#childScope/0":_.b={name:"Outer"},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.f={"#childScope/0":_.d={name:"Middle"},"#text/1(":_._["__tests__/template.marko_3_renderer"],"#text/1!":_.g={"#childScope/0":_.e={name:"Inner"}}}}},1:_.c,2:_.b,3:_.f,4:_.d,5:_.g,6:_.e},_.a.write=_.b.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.a,_.f._=_.c,_.h),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",3,"__tests__/template.marko_2_showInner/subscriber",0,"__tests__/template.marko_0_showInner",0,"__tests__/template.marko_0_showMiddle",0,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button#middle").click()

```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*0 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*0 #button/2-->
    <pre>
      
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
    </pre>
    <!--M_*0 #pre/3-->
    <!--M_|0 #text/4 1-->
    <!--M_$1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={0:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":_._["__tests__/template.marko_1_renderer"],"#text/4!":_.c={"#childScope/0":_.b={name:"Outer"},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.f={"#childScope/0":_.d={name:"Middle"},"#text/1(":_._["__tests__/template.marko_3_renderer"],"#text/1!":_.g={"#childScope/0":_.e={name:"Inner"}}}}},1:_.c,2:_.b,3:_.f,4:_.d,5:_.g,6:_.e},_.a.write=_.b.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.a,_.f._=_.c,_.h),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",3,"__tests__/template.marko_2_showInner/subscriber",0,"__tests__/template.marko_0_showInner",0,"__tests__/template.marko_0_showMiddle",0,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button#outer").click()

```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*0 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*0 #button/2-->
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
    <!--M_*0 #pre/3-->
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
    <!--M_$1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={0:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":_._["__tests__/template.marko_1_renderer"],"#text/4!":_.c={"#childScope/0":_.b={name:"Outer"},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.f={"#childScope/0":_.d={name:"Middle"},"#text/1(":_._["__tests__/template.marko_3_renderer"],"#text/1!":_.g={"#childScope/0":_.e={name:"Inner"}}}}},1:_.c,2:_.b,3:_.f,4:_.d,5:_.g,6:_.e},_.a.write=_.b.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.a,_.f._=_.c,_.h),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",3,"__tests__/template.marko_2_showInner/subscriber",0,"__tests__/template.marko_0_showInner",0,"__tests__/template.marko_0_showMiddle",0,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div8
removed #comment after #document/html0/body1/div8
inserted #document/html0/body1/div8/div3
removed #text after #document/html0/body1/div8/div3
#document/html0/body1/div8/div0/#text0: "" => "Outer"
#document/html0/body1/div8/span1/#text0: "" => "Outer"
#document/html0/body1/div8/p2/#text0: "" => "Outer"
inserted #document/html0/body1/div8/div3/div3
inserted #document/html0/body1/div8/div3/span4
inserted #document/html0/body1/div8/div3/p5
removed #text after #document/html0/body1/div8/div3/p5
#document/html0/body1/div8/div3/div0/#text0: "" => "Middle"
#document/html0/body1/div8/div3/span1/#text0: "" => "Middle"
#document/html0/body1/div8/div3/p2/#text0: "" => "Middle"
#document/html0/body1/div8/div3/div3/#text0: "" => "Inner"
#document/html0/body1/div8/div3/span4/#text0: "" => "Inner"
#document/html0/body1/div8/div3/p5/#text0: "" => "Inner"
removed #text in #document/html0/body1/pre6
inserted #text
removed #text in #document/html0/body1/pre6
inserted #text
removed #text in #document/html0/body1/pre6
inserted #document/html0/body1/pre6/#text0
```


# Render 
container.querySelector("button#outer").click()

```html
<html>
  <head />
  <body>
    <button
      id="outer"
    >
      Toggle Outer
    </button>
    <!--M_*0 #button/0-->
    <button
      id="middle"
    >
      Toggle Middle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="inner"
    >
      Toggle Inner
    </button>
    <!--M_*0 #button/2-->
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
    <!--M_*0 #pre/3-->
    <!--M_|0 #text/4 1-->
    <!--M_$1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={0:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":_._["__tests__/template.marko_1_renderer"],"#text/4!":_.c={"#childScope/0":_.b={name:"Outer"},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.f={"#childScope/0":_.d={name:"Middle"},"#text/1(":_._["__tests__/template.marko_3_renderer"],"#text/1!":_.g={"#childScope/0":_.e={name:"Inner"}}}}},1:_.c,2:_.b,3:_.f,4:_.d,5:_.g,6:_.e},_.a.write=_.b.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.a,_.f._=_.c,_.h),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",3,"__tests__/template.marko_2_showInner/subscriber",0,"__tests__/template.marko_0_showInner",0,"__tests__/template.marko_0_showMiddle",0,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#comment8
removed #text in #document/html0/body1/pre6
inserted #text
removed #text in #document/html0/body1/pre6
inserted #text
removed #text in #document/html0/body1/pre6
inserted #document/html0/body1/pre6/#text0
removed div after #document/html0/body1/#comment8
```