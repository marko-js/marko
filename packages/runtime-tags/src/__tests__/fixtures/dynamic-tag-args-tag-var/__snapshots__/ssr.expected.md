# Write
```html
  <button>Count: <!>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><!--M_[--><div>Child: <!>1<!--M_*2 #text/0--></div><!--M_]1 #text/2 2--><div>Parent: <!>1<!--M_*1 #text/4--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko","#scopeOffset/3":3,x:1},_.a={}],_.a["#TagVariable"]=_._["__tests__/template.marko_0_y/var"](_.c),_.b),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<button>
  Count: 
  <!---->
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<!--M_[-->
<div>
  Child: 
  <!---->
  1
  <!--M_*2 #text/0-->
</div>
<!--M_]1 #text/2 2-->
<div>
  Parent: 
  <!---->
  1
  <!--M_*1 #text/4-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
      "#scopeOffset/3": 3,
      x: 1
    }, _.a = {}], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_y/var"
      ](_.c), _.b),
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
INSERT button/#text0
INSERT button/#comment0
INSERT button/#text1
INSERT button/#comment1
INSERT #comment0
INSERT #comment1
INSERT div0
INSERT div0/#text0
INSERT div0/#comment0
INSERT div0/#text1
INSERT div0/#comment1
INSERT #comment2
INSERT div1
INSERT div1/#text0
INSERT div1/#comment0
INSERT div1/#text1
INSERT div1/#comment1
INSERT script
INSERT script/#text
```