# Write
```html
  <button class=inc></button><!--M_*1 #button/0--><button class=toggle></button><!--M_*1 #button/1--><span>0<!--M_*2 #text/0--></span><!--M_|1 #text/2 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={show:!0,count:0},{_:_.a}]),"__tests__/template.marko_0_show 1 __tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<button
  class="inc"
/>
<!--M_*1 #button/0-->
<button
  class="toggle"
/>
<!--M_*1 #button/1-->
<span>
  0
  <!--M_*2 #text/0-->
</span>
<!--M_|1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      show: !0,
      count: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_0_show 1 __tests__/template.marko_0_count 1"
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
INSERT #comment0
INSERT button1
INSERT #comment1
INSERT span
INSERT span/#text
INSERT span/#comment
INSERT #comment2
INSERT script
INSERT script/#text
```