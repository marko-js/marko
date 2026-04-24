# Write
```html
  <div>0: 1</div><div>1: 2</div><div>2: 3</div><div>0: <!>1<!--M_*5 #text/1--></div><div>1: <!>2<!--M_*6 #text/1--></div><div>2: <!>3<!--M_*7 #text/1--></div><!--M_|1 #text/1 7 6 5--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<div>
  0: 1
</div>
<div>
  1: 2
</div>
<div>
  2: 3
</div>
<div>
  0: 
  <!---->
  1
  <!--M_*5 #text/1-->
</div>
<div>
  1: 
  <!---->
  2
  <!--M_*6 #text/1-->
</div>
<div>
  2: 
  <!---->
  3
  <!--M_*7 #text/1-->
</div>
<!--M_|1 #text/1 7 6 5-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
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
INSERT div0/#text
INSERT div1
INSERT div1/#text
INSERT div2
INSERT div2/#text
INSERT div3
INSERT div3/#text0
INSERT div3/#comment0
INSERT div3/#text1
INSERT div3/#comment1
INSERT div4
INSERT div4/#text0
INSERT div4/#comment0
INSERT div4/#text1
INSERT div4/#comment1
INSERT div5
INSERT div5/#text0
INSERT div5/#comment0
INSERT div5/#text1
INSERT div5/#comment1
INSERT #comment
INSERT script
INSERT script/#text
```