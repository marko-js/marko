# Write
```html
  <div>x=<span>0<!--M_*1 #text/0--></span>, was=<!><!--M_*1 #text/1--></div><button id=increment>Increment</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{x:0}]),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<div>
  x=
  <span>
    0
    <!--M_*1 #text/0-->
  </span>
  , was=
  <!---->
  <!--M_*1 #text/1-->
</div>
<button
  id="increment"
>
  Increment
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 0
    }]),
    "__tests__/template.marko_0_x 1"
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
INSERT div/#text0
INSERT div/span
INSERT div/span/#text
INSERT div/span/#comment
INSERT div/#text1
INSERT div/#comment0
INSERT div/#comment1
INSERT button
INSERT button/#text
INSERT #comment
INSERT script
INSERT script/#text
```