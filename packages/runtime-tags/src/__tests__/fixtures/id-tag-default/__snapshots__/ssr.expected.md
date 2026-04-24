# Write
```html
  <button>toggle</button><!--M_*1 #button/0--><div id=foo>foo</div><div id=sM_1>bar</div><!--M_*1 #div/2--><div id=baz>baz</div><!--M_*1 #div/3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{baz:"baz"}]),"__tests__/template.marko_0_bar_baz 1"];M._.w()</script>
```

# Render End
```html
<button>
  toggle
</button>
<!--M_*1 #button/0-->
<div
  id="foo"
>
  foo
</div>
<div
  id="sM_1"
>
  bar
</div>
<!--M_*1 #div/2-->
<div
  id="baz"
>
  baz
</div>
<!--M_*1 #div/3-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      baz: "baz"
    }]),
    "__tests__/template.marko_0_bar_baz 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button
INSERT button/#text
INSERT #comment0
INSERT div0
INSERT div0/#text
INSERT div1
INSERT div1/#text
INSERT #comment1
INSERT div2
INSERT div2/#text
INSERT #comment2
INSERT script
INSERT script/#text
```