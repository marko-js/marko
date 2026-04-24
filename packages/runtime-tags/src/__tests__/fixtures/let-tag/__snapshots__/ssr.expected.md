# Write
```html
  <button>1<!--M_*1 #text/1--></button><!--M_*1 #button/0-->1<!--M_*1 #text/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{x:1,y:1}]),"__tests__/template.marko_0_x_y 1"];M._.w()</script>
```

# Render End
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
1
<!--M_*1 #text/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 1,
      y: 1
    }]),
    "__tests__/template.marko_0_x_y 1"
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
INSERT #comment0
INSERT #text
INSERT #comment1
INSERT script
INSERT script/#text
```