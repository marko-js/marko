# Write
```html
  <button>1<!--M_*1 #text/1--></button><!--M_*1 #button/0-->2<!--M_*1 #text/2--> <!>3<!--M_*1 #text/3--> <!>5<!--M_*1 #text/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{x:1}]),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
2
<!--M_*1 #text/2-->
<!---->
3
<!--M_*1 #text/3-->
<!---->
5
<!--M_*1 #text/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 1
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
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment0
INSERT #text0
INSERT #comment1
INSERT #text1
INSERT #comment2
INSERT #text2
INSERT #comment3
INSERT #text3
INSERT #comment4
INSERT #text4
INSERT #comment5
INSERT script
INSERT script/#text
```