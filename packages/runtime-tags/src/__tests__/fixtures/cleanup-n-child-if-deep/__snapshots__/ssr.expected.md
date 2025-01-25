# Write
```html
  <button id=outer>Toggle Outer</button><!--M_*0 #button/0--><button id=middle>Toggle Middle</button><!--M_*0 #button/1--><button id=inner>Toggle Inner</button><!--M_*0 #button/2--><pre></pre><!--M_*0 #pre/3--><div><div>Outer<!--M_*2 #text/0--> a</div><span>Outer<!--M_*2 #text/1--> a</span><p>Outer<!--M_*2 #text/2--> a</p><!--M_$2--><div><div>Middle<!--M_*4 #text/0--> a</div><span>Middle<!--M_*4 #text/1--> a</span><p>Middle<!--M_*4 #text/2--> a</p><!--M_$4--><!--M_[5--><div>Inner<!--M_*6 #text/0--> a</div><span>Inner<!--M_*6 #text/1--> a</span><p>Inner<!--M_*6 #text/2--> a</p><!--M_$6--><!--M_]3 #text/1--></div><!--M_|1 #text/1 3--></div><!--M_|0 #text/4 1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.h={0:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":_._["__tests__/template.marko_1_renderer"],"#text/4!":_.c={"#childScope/0":_.b={name:"Outer"},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.f={"#childScope/0":_.d={name:"Middle"},"#text/1(":_._["__tests__/template.marko_3_renderer"],"#text/1!":_.g={"#childScope/0":_.e={name:"Inner"}}}}},1:_.c,2:_.b,3:_.f,4:_.d,5:_.g,6:_.e},_.a.write=_.b.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.a,_.f._=_.c,_.h),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",3,"__tests__/template.marko_2_showInner/subscriber",0,"__tests__/template.marko_0_showInner",0,"__tests__/template.marko_0_showMiddle",0,"__tests__/template.marko_0_showOuter",0];M._.w()</script>
```

# Render End
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
    <pre />
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
        <!--M_]3 #text/1-->
      </div>
      <!--M_|1 #text/1 3-->
    </div>
    <!--M_|0 #text/4 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={0:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"#text/4(":_._["__tests__/template.marko_1_renderer"],"#text/4!":_.c={"#childScope/0":_.b={name:"Outer"},"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.f={"#childScope/0":_.d={name:"Middle"},"#text/1(":_._["__tests__/template.marko_3_renderer"],"#text/1!":_.g={"#childScope/0":_.e={name:"Inner"}}}}},1:_.c,2:_.b,3:_.f,4:_.d,5:_.g,6:_.e},_.a.write=_.b.write=_.d.write=_.e.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.a,_.f._=_.c,_.h),2,"__tests__/tags/child.marko_0_name_write",4,"__tests__/tags/child.marko_0_name_write",6,"__tests__/tags/child.marko_0_name_write",3,"__tests__/template.marko_2_showInner/subscriber",0,"__tests__/template.marko_0_showInner",0,"__tests__/template.marko_0_showMiddle",0,"__tests__/template.marko_0_showOuter",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button0
INSERT html/body/button0/#text
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text
INSERT html/body/#comment1
INSERT html/body/button2
INSERT html/body/button2/#text
INSERT html/body/#comment2
INSERT html/body/pre
INSERT html/body/#comment3
INSERT html/body/div
INSERT html/body/div/div0
INSERT html/body/div/div0/#text0
INSERT html/body/div/div0/#comment
INSERT html/body/div/div0/#text1
INSERT html/body/div/span
INSERT html/body/div/span/#text0
INSERT html/body/div/span/#comment
INSERT html/body/div/span/#text1
INSERT html/body/div/p
INSERT html/body/div/p/#text0
INSERT html/body/div/p/#comment
INSERT html/body/div/p/#text1
INSERT html/body/div/#comment0
INSERT html/body/div/div1
INSERT html/body/div/div1/div0
INSERT html/body/div/div1/div0/#text0
INSERT html/body/div/div1/div0/#comment
INSERT html/body/div/div1/div0/#text1
INSERT html/body/div/div1/span0
INSERT html/body/div/div1/span0/#text0
INSERT html/body/div/div1/span0/#comment
INSERT html/body/div/div1/span0/#text1
INSERT html/body/div/div1/p0
INSERT html/body/div/div1/p0/#text0
INSERT html/body/div/div1/p0/#comment
INSERT html/body/div/div1/p0/#text1
INSERT html/body/div/div1/#comment0
INSERT html/body/div/div1/#comment1
INSERT html/body/div/div1/div1
INSERT html/body/div/div1/div1/#text0
INSERT html/body/div/div1/div1/#comment
INSERT html/body/div/div1/div1/#text1
INSERT html/body/div/div1/span1
INSERT html/body/div/div1/span1/#text0
INSERT html/body/div/div1/span1/#comment
INSERT html/body/div/div1/span1/#text1
INSERT html/body/div/div1/p1
INSERT html/body/div/div1/p1/#text0
INSERT html/body/div/div1/p1/#comment
INSERT html/body/div/div1/p1/#text1
INSERT html/body/div/div1/#comment2
INSERT html/body/div/div1/#comment3
INSERT html/body/div/#comment1
INSERT html/body/#comment4
INSERT html/body/script
INSERT html/body/script/#text
```