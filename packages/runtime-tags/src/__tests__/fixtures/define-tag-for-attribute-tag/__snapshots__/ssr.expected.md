# Write
```html
  <div><!--M_[--><span>The thing</span><!--M_]2 #text/1 3--></div><!--M_*2 #div/0--><button>Toggle</button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{selected:!1,"#childScope/0":_.a={"ConditionalRenderer:#text/1":"__tests__/template.marko_1_content"}},_.a]),"__tests__/template.marko_0_selected 1"];M._.w()</script>
```

# Render End
```html
<div>
  <!--M_[-->
  <span>
    The thing
  </span>
  <!--M_]2 #text/1 3-->
</div>
<!--M_*2 #div/0-->
<button>
  Toggle
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0,
    {
      selected: !1,
      "#childScope/0": _.a = {
        "ConditionalRenderer:#text/1": "__tests__/template.marko_1_content"
      }
    }, _.a]),
    "__tests__/template.marko_0_selected 1"
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
INSERT div/#comment0
INSERT div/span
INSERT div/span/#text
INSERT div/#comment1
INSERT #comment0
INSERT button
INSERT button/#text
INSERT #comment1
INSERT script
INSERT script/#text
```