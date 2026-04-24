# Write
```html
  <div><button id=outer></button><!--M_*1 #button/0--><!--M_[--><button id=inner></button><!--M_*2 #button/0--><button id=count>0<!--M_*3 #text/1--></button><!--M_*3 #button/0--><!--M_|2 #text/1 3--><!--M_]1 #text/1 2--> hello</div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={outer:!0,inner:!0,count:0,"ClosureScopes:count":_.d=new Set},_.b={_:_.a},_.e={_:_.b}],(_.d).add(_.e),_.c),"__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"];M._.w()</script>
```

# Render End
```html
<div>
  <button
    id="outer"
  />
  <!--M_*1 #button/0-->
  <!--M_[-->
  <button
    id="inner"
  />
  <!--M_*2 #button/0-->
  <button
    id="count"
  >
    0
    <!--M_*3 #text/1-->
  </button>
  <!--M_*3 #button/0-->
  <!--M_|2 #text/1 3-->
  <!--M_]1 #text/1 2-->
   hello
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      outer: !0,
      inner: !0,
      count: 0,
      "ClosureScopes:count": _.d = new Set
    }, _.b = {
      _: _.a
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), _.c),
    "__tests__/template.marko_2_count 3 __tests__/template.marko_1_inner 2 __tests__/template.marko_0_outer 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT div/button0
INSERT div/#comment0
INSERT div/#comment1
INSERT div/button1
INSERT div/#comment2
INSERT div/button2
INSERT div/button2/#text
INSERT div/button2/#comment
INSERT div/#comment3
INSERT div/#comment4
INSERT div/#comment5
INSERT div/#text
INSERT script
INSERT script/#text
```