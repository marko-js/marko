# Write
```html
  <button></button><!--M_*1 #button/0--><!--M_[--><div>Id is <!>dynamic<!--M_*2 #text/0--></div><!--M_]1 #text/1 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{"ConditionalRenderer:#text/1":"__tests__/tags/child.marko",tagName:_._["__tests__/tags/child.marko"]}]),"__tests__/template.marko_0_tagName 1"];M._.w()</script>
```

# Render End
```html
<button />
<!--M_*1 #button/0-->
<!--M_[-->
<div>
  Id is 
  <!---->
  dynamic
  <!--M_*2 #text/0-->
</div>
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/1": "__tests__/tags/child.marko",
      tagName: _._[
        "__tests__/tags/child.marko"
        ]
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
INSERT button
INSERT #comment0
INSERT #comment1
INSERT div
INSERT div/#text0
INSERT div/#comment0
INSERT div/#text1
INSERT div/#comment1
INSERT #comment2
INSERT script
INSERT script/#text
```