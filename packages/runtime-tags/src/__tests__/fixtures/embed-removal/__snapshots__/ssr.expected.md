# Write
```html
  <button>Cleanup</button><!--Membedded*1 #button/0--><script>WALKER_RUNTIME("M")("embedded");(M.embedded.b={})["__tests__/template.marko"]=1;M.embedded.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M.embedded.w()</script>
```

# Render End
```html
<button>
  Cleanup
</button>
<!--Membedded*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M.embedded.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button
INSERT button/#text
INSERT #comment
INSERT script
INSERT script/#text
```