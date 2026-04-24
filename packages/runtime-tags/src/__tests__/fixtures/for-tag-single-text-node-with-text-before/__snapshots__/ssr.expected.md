# Write
```html
  <div data-children=1>Before <!--M_[-->Child<!--M_]1 #text/1 2--></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{children:[1]}]),"__tests__/template.marko_0_children 1"];M._.w()</script>
```

# Render End
```html
<div
  data-children="1"
>
  Before 
  <!--M_[-->
  Child
  <!--M_]1 #text/1 2-->
</div>
<!--M_*1 #div/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      children: [1]
    }]),
    "__tests__/template.marko_0_children 1"
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
INSERT #comment
INSERT script
INSERT script/#text
```