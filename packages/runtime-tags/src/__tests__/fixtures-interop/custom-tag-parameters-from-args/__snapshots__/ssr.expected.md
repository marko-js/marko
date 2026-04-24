# Write
```html
  <button class=inc>1<!--Ms*1 #text/1-->,<!>10<!--Ms*1 #text/2--></button><!--Ms*1 #button/0--><!--Ms[--><div>Counts: 1,10</div><!--Ms]1 #text/3 2--><script>WALKER_RUNTIME("M")("s");M.s.r=[_=>(_.a=[0,{"ConditionalRenderer:#text/3":_._.$compat_renderBody,input_content:_._.$compat_renderBody,x:1,y:10}]),"__tests__/components/custom-tag.marko_0_x_y 1"];M.s.w()</script>
```

# Render End
```html
<button
  class="inc"
>
  1
  <!--Ms*1 #text/1-->
  ,
  <!---->
  10
  <!--Ms*1 #text/2-->
</button>
<!--Ms*1 #button/0-->
<!--Ms[-->
<div>
  Counts: 1,10
</div>
<!--Ms]1 #text/3 2-->
<script>
  WALKER_RUNTIME("M")("s");
  M.s.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/3": _._.$compat_renderBody,
      input_content: _._.$compat_renderBody,
      x: 1,
      y: 10
    }]),
    "__tests__/components/custom-tag.marko_0_x_y 1"
  ];
  M.s.w()
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
INSERT button/#text2
INSERT button/#comment2
INSERT #comment0
INSERT #comment1
INSERT div
INSERT div/#text
INSERT #comment2
INSERT script
INSERT script/#text
```