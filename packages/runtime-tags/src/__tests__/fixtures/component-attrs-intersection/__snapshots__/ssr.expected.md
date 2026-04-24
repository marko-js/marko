# Write
```html
  <div>0<!--M_*2 #text/0--></div><button></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{count:0,"#childScope/0":_.a={dummy:{}}},_.a]),"__tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<div>
  0
  <!--M_*2 #text/0-->
</div>
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      count: 0,
      "#childScope/0": _.a = {
        dummy:
        {}
      }
    }, _.a]),
    "__tests__/template.marko_0_count 1"
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
INSERT div/#text
INSERT div/#comment
INSERT button
INSERT #comment
INSERT script
INSERT script/#text
```