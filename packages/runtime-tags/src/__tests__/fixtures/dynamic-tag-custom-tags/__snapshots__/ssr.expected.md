# Write
```html
  <!--M_[--><div>Child 1 has <!>3<!--M_*2 #text/0--></div><!--M_]1 #text/0 2--><button></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{"ConditionalRenderer:#text/0":"__tests__/tags/child1.marko",tagName:_._["__tests__/tags/child1.marko"],val:3}]),"__tests__/template.marko_0_tagName 1"];M._.w()</script>
```

# Render End
```html
<!--M_[-->
<div>
  Child 1 has 
  <!---->
  3
  <!--M_*2 #text/0-->
</div>
<!--M_]1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/0": "__tests__/tags/child1.marko",
      tagName: _._[
        "__tests__/tags/child1.marko"
        ],
      val: 3
    }]),
    "__tests__/template.marko_0_tagName 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #comment0
INSERT div
INSERT div/#text0
INSERT div/#comment0
INSERT div/#text1
INSERT div/#comment1
INSERT #comment1
INSERT button
INSERT #comment2
INSERT script
INSERT script/#text
```