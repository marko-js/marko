# Write
```html
  <textarea>before</textarea><!--M_*1 #textarea/0--><button>update</button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<textarea>
  before
</textarea>
<!--M_*1 #textarea/0-->
<button>
  update
</button>
<!--M_*1 #button/1-->
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
INSERT textarea
INSERT textarea/#text
INSERT #comment0
INSERT button
INSERT button/#text
INSERT #comment1
INSERT script
INSERT script/#text
```