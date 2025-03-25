# Write
```html
  <button id=outer>Toggle Outer</button><!--M_*1 #button/0--><button id=middle>Toggle Middle</button><!--M_*1 #button/1--><button id=inner>Toggle Inner</button><!--M_*1 #button/2--><pre></pre><!--M_*1 #pre/3--><div><div>Outer<!--M_*3 #text/0--> a</div><span>Outer<!--M_*3 #text/1--> a</span><p>Outer<!--M_*3 #text/2--> a</p><!--M_$3 2--><div><div>Middle<!--M_*5 #text/0--> a</div><span>Middle<!--M_*5 #text/1--> a</span><p>Middle<!--M_*5 #text/2--> a</p><!--M_$5 4--><!--M_[6--><div>Inner<!--M_*7 #text/0--> a</div><span>Inner<!--M_*7 #text/1--> a</span><p>Inner<!--M_*7 #text/2--> a</p><!--M_$7 6--><!--M_]4 #text/1--></div><!--M_|2 #text/1 4--></div><!--M_|1 #text/4 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"ClosureScopes:showInner":_.i=new Set,"ConditionalRenderer:#text/4":0,"ConditionalScope:#text/4":_.b={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.f={},"ClosureSignalIndex:showInner":0}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.b._=_.a,_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.b,(_.i).add(_.c),_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter"];M._.w()</script>
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
    <pre />
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
      <!--M_$3 2-->
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
        <!--M_$5 4-->
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
        <!--M_$7 6-->
        <!--M_]4 #text/1-->
      </div>
      <!--M_|2 #text/1 4-->
    </div>
    <!--M_|1 #text/4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.h={1:_.a={showOuter:!0,showMiddle:!0,showInner:!0,"ClosureScopes:showInner":_.i=new Set,"ConditionalRenderer:#text/4":0,"ConditionalScope:#text/4":_.b={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.f={},"ClosureSignalIndex:showInner":0}}},2:_.b,3:_.d={name:"Outer"},4:_.c,5:_.e={name:"Middle"},6:_.f,7:_.g={name:"Inner"}},_.b._=_.a,_.a.write=_.d.write=_.e.write=_.g.write=_._["__tests__/template.marko_0/write"](_.a),_.c._=_.b,(_.i).add(_.c),_.h),3,"__tests__/tags/child.marko_0_name_write",5,"__tests__/tags/child.marko_0_name_write",7,"__tests__/tags/child.marko_0_name_write",1,"__tests__/template.marko_0_showInner",1,"__tests__/template.marko_0_showMiddle",1,"__tests__/template.marko_0_showOuter"];M._.w()
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