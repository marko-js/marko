# Write
```html
  <!--M_[-->Body Content<!--M_]1 #text/0 2--><button></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{x:null}]),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<!--M_[-->
Body Content
<!--M_]1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: null
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
INSERT #comment0
INSERT #text
INSERT #comment1
INSERT button
INSERT #comment2
INSERT script
INSERT script/#text
```