# Write
```html
  <div>3</div><div>4</div><button>before</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<div>
  3
</div>
<div>
  4
</div>
<button>
  before
</button>
<!--M_*1 #button/2-->
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
INSERT button
INSERT button/#text
INSERT #comment
INSERT script
INSERT script/#text
```