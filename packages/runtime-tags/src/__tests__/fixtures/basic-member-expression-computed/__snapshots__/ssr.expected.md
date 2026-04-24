# Write
```html
  <div>a<!--M_*1 #text/0--></div><div>a<!--M_*1 #text/1--></div><button>Update</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{items:["a","b","c"],index:0}]),"__tests__/template.marko_0_items_index 1"];M._.w()</script>
```

# Render End
```html
<div>
  a
  <!--M_*1 #text/0-->
</div>
<div>
  a
  <!--M_*1 #text/1-->
</div>
<button>
  Update
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      items: ["a", "b", "c"],
      index: 0
    }]),
    "__tests__/template.marko_0_items_index 1"
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
INSERT div0/#comment
INSERT div1
INSERT div1/#text
INSERT div1/#comment
INSERT button
INSERT button/#text
INSERT #comment
INSERT script
INSERT script/#text
```