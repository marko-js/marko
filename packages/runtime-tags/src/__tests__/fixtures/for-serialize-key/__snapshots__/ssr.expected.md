# Write
```html
  <div id=el></div><div><button>Click</button><!--M_*2 #button/0--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{"#LoopKey":0}]),"__tests__/template.marko_1 2"];M._.w()</script>
```

# Render End
```html
<div
  id="el"
/>
<div>
  <button>
    Click
  </button>
  <!--M_*2 #button/0-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      "#LoopKey": 0
    }]),
    "__tests__/template.marko_1 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div1
INSERT div1/button
INSERT div1/button/#text
INSERT div1/#comment
INSERT script
INSERT script/#text
```