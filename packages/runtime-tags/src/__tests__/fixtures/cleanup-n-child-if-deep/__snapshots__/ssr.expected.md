# Write
```html
  <button id=outer>Toggle Outer</button><!--M_*1 #button/0--><button id=middle>Toggle Middle</button><!--M_*1 #button/1--><button id=inner>Toggle Inner</button><!--M_*1 #button/2--><pre></pre><!--M_*1 #pre/3--><div><div>Outer a</div><span>Outer a</span><p>Outer a</p><div><div>Middle a</div><span>Middle a</span><p>Middle a</p><!--M_[--><div>Inner a</div><span>Inner a</span><p>Inner a</p><!--M_]4 #text/1 6--></div><!--M_|2 #text/1 4--></div><!--M_|1 #text/4 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.g=[0,_.a={showOuter:!0,showMiddle:!0,showInner:!0,"ClosureScopes:showInner":_.h=new Set},_.c={_:_.a},_.b={name:"Outer","#ClosestBranchId":2},_.e={_:_.c},_.d={name:"Middle","#ClosestBranchId":4},{_:_.e},_.f={name:"Inner","#ClosestBranchId":6}],_.a.write=_.b.write=_.d.write=_.f.write=_._["__tests__/template.marko_0/write"](_.a),(_.h).add(_.e),_.g),"__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"];M._.w()</script>
```

# Render End
```html
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
    <!--M_[-->
    <div>
      Inner a
    </div>
    <span>
      Inner a
    </span>
    <p>
      Inner a
    </p>
    <!--M_]4 #text/1 6-->
  </div>
  <!--M_|2 #text/1 4-->
</div>
<!--M_|1 #text/4 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.g = [0, _.a = {
      showOuter: !0,
      showMiddle: !0,
      showInner: !0,
      "ClosureScopes:showInner": _.h = new Set
    }, _.c = {
      _: _.a
    }, _.b = {
      name: "Outer",
      "#ClosestBranchId": 2
    }, _.e = {
      _: _.c
    }, _.d = {
      name: "Middle",
      "#ClosestBranchId": 4
    },
    {
      _: _.e
    }, _.f = {
      name: "Inner",
      "#ClosestBranchId": 6
    }], _.a.write = _.b.write = _.d.write = _.f.write = _._[
      "__tests__/template.marko_0/write"
      ](_.a), (_.h).add(_.e), _.g),
    "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_showInner 1 __tests__/template.marko_0_showMiddle 1 __tests__/template.marko_0_showOuter 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button0
INSERT button0/#text
INSERT #comment0
INSERT button1
INSERT button1/#text
INSERT #comment1
INSERT button2
INSERT button2/#text
INSERT #comment2
INSERT pre
INSERT #comment3
INSERT div
INSERT div/div0
INSERT div/div0/#text
INSERT div/span
INSERT div/span/#text
INSERT div/p
INSERT div/p/#text
INSERT div/div1
INSERT div/div1/div0
INSERT div/div1/div0/#text
INSERT div/div1/span0
INSERT div/div1/span0/#text
INSERT div/div1/p0
INSERT div/div1/p0/#text
INSERT div/div1/#comment0
INSERT div/div1/div1
INSERT div/div1/div1/#text
INSERT div/div1/span1
INSERT div/div1/span1/#text
INSERT div/div1/p1
INSERT div/div1/p1/#text
INSERT div/div1/#comment1
INSERT div/#comment
INSERT #comment4
INSERT script
INSERT script/#text
```