# Write
```html
  <div><button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{clickCount:0}]),"__tests__/template.marko_0_clickCount 1"];M._.w()</script>
```

# Render End
```html
<div>
  <button>
    0
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      clickCount: 0
    }]),
    "__tests__/template.marko_0_clickCount 1"
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
INSERT div/button
INSERT div/button/#text
INSERT div/button/#comment
INSERT div/#comment
INSERT script
INSERT script/#text
```