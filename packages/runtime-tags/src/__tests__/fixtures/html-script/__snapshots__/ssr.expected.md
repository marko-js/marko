# Write
```html
  <script type=importmap>
    {
      "imports": {
        "0": "https://markojs.com",
      }
    }
  </script><!--M_*1 #script/0--><div>0<!--M_*1 #text/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{count:0}]),"__tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<script
  type="importmap"
>
  {
    "imports":
    {
      "0": "https://markojs.com",
    }
  }
</script>
<!--M_*1 #script/0-->
<div>
  0
  <!--M_*1 #text/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0
    }]),
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
INSERT script0
INSERT script0/#text
INSERT #comment
INSERT div
INSERT div/#text
INSERT div/#comment
INSERT script1
INSERT script1/#text
```