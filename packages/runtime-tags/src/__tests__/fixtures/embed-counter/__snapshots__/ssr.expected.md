# Write
```html
  <div><button>0<!--Membedded*1 #text/1--></button><!--Membedded*1 #button/0--></div><script>WALKER_RUNTIME("M")("embedded");(M.embedded.b={})["__tests__/template.marko"]=1;M.embedded.r=[_=>(_.a=[0,{clickCount:0}]),"__tests__/template.marko_0_clickCount 1"];M.embedded.w()</script>
```

# Render End
```html
<div>
  <button>
    0
    <!--Membedded*1 #text/1-->
  </button>
  <!--Membedded*1 #button/0-->
</div>
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0,
    {
      clickCount: 0
    }]),
    "__tests__/template.marko_0_clickCount 1"
  ];
  M.embedded.w()
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