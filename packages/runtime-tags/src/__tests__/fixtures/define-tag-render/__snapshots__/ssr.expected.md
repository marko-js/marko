# Write
```html
  <div>Hello Ryan <!>1<!--M_*2 #text/1--></div><button>1<!--M_*2 #text/3--></button><!--M_*2 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{y:1}]),"__tests__/template.marko_1_y 2"];M._.w()</script>
```

# Render End
```html
<div>
  Hello Ryan 
  <!---->
  1
  <!--M_*2 #text/1-->
</div>
<button>
  1
  <!--M_*2 #text/3-->
</button>
<!--M_*2 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      y: 1
    }]),
    "__tests__/template.marko_1_y 2"
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
INSERT div/#comment0
INSERT div/#text1
INSERT div/#comment1
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment
INSERT script
INSERT script/#text
```