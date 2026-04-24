# Write
```html
  <input disabled><!--M_*1 #input/0--><button>enable<!--M_*1 #text/2--></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{disabled:!0}]),"__tests__/template.marko_0_disabled 1"];M._.w()</script>
```

# Render End
```html
<input
  disabled=""
/>
<!--M_*1 #input/0-->
<button>
  enable
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      disabled: !0
    }]),
    "__tests__/template.marko_0_disabled 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT input
INSERT #comment0
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment1
INSERT script
INSERT script/#text
```