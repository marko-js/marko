# Write
```html
  <button></button><!--M_*1 #button/0--><span>hi<!--M_*2 #text/0--></span><!--M_|1 #text/1 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={show:!0,message:"hi"},{_:_.a}]),"__tests__/template.marko_0_show 1"];M._.w()</script>
```

# Render End
```html
<button />
<!--M_*1 #button/0-->
<span>
  hi
  <!--M_*2 #text/0-->
</span>
<!--M_|1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      show: !0,
      message: "hi"
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button
INSERT #comment0
INSERT span
INSERT span/#text
INSERT span/#comment
INSERT #comment1
INSERT script
INSERT script/#text
```