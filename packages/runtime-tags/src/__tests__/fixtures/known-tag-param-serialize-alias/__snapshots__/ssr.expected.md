# Write
```html
  <div>a</div><div>b</div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{input_a:"a"}]),"__tests__/template.marko_1_input_a 2 __tests__/template.marko_1_a 2"];M._.w()</script>
```

# Render End
```html
<div>
  a
</div>
<div>
  b
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      input_a: "a"
    }]),
    "__tests__/template.marko_1_input_a 2 __tests__/template.marko_1_a 2"
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
INSERT script
INSERT script/#text
```