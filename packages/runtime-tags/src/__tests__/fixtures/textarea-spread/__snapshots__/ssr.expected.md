# Write
```html
  <textarea>foo</textarea><!--M_*1 #textarea/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{input:{value:"foo"}}]),"__tests__/template.marko_0_input 1"];M._.w()</script>
```

# Render End
```html
<textarea>
  foo
</textarea>
<!--M_*1 #textarea/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      input:
      {
        value: "foo"
      }
    }]),
    "__tests__/template.marko_0_input 1"
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
INSERT #comment
INSERT script
INSERT script/#text
```