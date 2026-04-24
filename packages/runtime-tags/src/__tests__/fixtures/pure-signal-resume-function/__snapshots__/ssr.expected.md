# Write
```html
  <button>Click</button><!--M_*2 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.e={test:"foo"},{"EventAttributes:#button/0":_.a={},"BranchScopes:#button/0":_.c={},"ConditionalRenderer:#button/0":"__tests__/template.marko_1_content",input:_.b={}},_.c],_.a.click=_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.e),_.b.content=_._["__tests__/template.marko_1_content"](_.e),_.d),"__tests__/tags/my-button.marko_0_input 2"];M._.w()</script>
```

# Render End
```html
<button>
  Click
</button>
<!--M_*2 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, _.e = {
      test: "foo"
    },
    {
      "EventAttributes:#button/0": _.a = {},
      "BranchScopes:#button/0": _.c = {},
      "ConditionalRenderer:#button/0": "__tests__/template.marko_1_content",
      input: _.b = {}
    }, _.c], _.a.click = _.b.onClick = _._[
      "__tests__/template.marko_0/onClick"
      ](_.e), _.b.content = _._[
      "__tests__/template.marko_1_content"
      ](_.e), _.d),
    "__tests__/tags/my-button.marko_0_input 2"
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
INSERT #comment
INSERT script
INSERT script/#text
```