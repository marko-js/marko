# Write
```html
  <p class=A>paragraph</p><!--M_*1 #p/0--><button></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{className:"A"}]),"__tests__/template.marko_0_className 1"];M._.w()</script>
```

# Render End
```html
<p
  class="A"
>
  paragraph
</p>
<!--M_*1 #p/0-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      className: "A"
    }]),
    "__tests__/template.marko_0_className 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT p
INSERT p/#text
INSERT #comment0
INSERT button
INSERT #comment1
INSERT script
INSERT script/#text
```