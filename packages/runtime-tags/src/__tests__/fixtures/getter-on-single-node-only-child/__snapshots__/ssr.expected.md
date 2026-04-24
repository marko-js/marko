# Write
```html
  <button></button><!--M_*1 #button/0--><ul><li>0<!--M_*2 #text/0--></li><li>1<!--M_*3 #text/0--></li><!--M_}1 #ul/1 3 2--></ul><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{items:[0,1]}]),"__tests__/template.marko_0 1 __tests__/template.marko_0_items 1"];M._.w()</script>
```

# Render End
```html
<button />
<!--M_*1 #button/0-->
<ul>
  <li>
    0
    <!--M_*2 #text/0-->
  </li>
  <li>
    1
    <!--M_*3 #text/0-->
  </li>
  <!--M_}1 #ul/1 3 2-->
</ul>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      items: [0, 1]
    }]),
    "__tests__/template.marko_0 1 __tests__/template.marko_0_items 1"
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
INSERT #comment
INSERT ul
INSERT ul/li0
INSERT ul/li0/#text
INSERT ul/li0/#comment
INSERT ul/li1
INSERT ul/li1/#text
INSERT ul/li1/#comment
INSERT ul/#comment
INSERT script
INSERT script/#text
```