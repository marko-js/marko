# Write
```html
  <button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0-->used to be <span>0<!--M_*1 #text/2--></span> which should be the same as <span>0<!--M_*1 #text/3--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{clickCount:0}]),"__tests__/template.marko_0_clickCount 1"];M._.w()</script>
```

# Render End
```html
<button>
  0
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
used to be
<span>
  0
  <!--M_*1 #text/2-->
</span>
which should be the same as
<span>
  0
  <!--M_*1 #text/3-->
</span>
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
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment
INSERT #text0
INSERT span0
INSERT span0/#text
INSERT span0/#comment
INSERT #text1
INSERT span1
INSERT span1/#text
INSERT span1/#comment
INSERT script
INSERT script/#text
```