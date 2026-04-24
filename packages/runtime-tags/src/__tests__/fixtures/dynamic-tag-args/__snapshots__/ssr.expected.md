# Write
```html
  <button>Count: <!>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><!--M_[--><div>1<!--M_*2 #text/0--></div><!--M_]1 #text/2 2--><div>false</div><div>true</div><div>"spread1"</div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko",x:1}]),"__tests__/template.marko_0_x 1"];M._.w()</script>
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
  1
  <!--M_*2 #text/0-->
</div>
<!--M_]1 #text/2 2-->
<div>
  false
</div>
<div>
  true
</div>
<div>
  "spread1"
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/2": "__tests__/tags/custom-tag.marko",
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
INSERT button/#text0
INSERT button/#comment0
INSERT button/#text1
INSERT button/#comment1
INSERT #comment0
INSERT #comment1
INSERT div0
INSERT div0/#text
INSERT div0/#comment
INSERT #comment2
INSERT div1
INSERT div1/#text
INSERT div2
INSERT div2/#text
INSERT div3
INSERT div3/#text
INSERT script
INSERT script/#text
```