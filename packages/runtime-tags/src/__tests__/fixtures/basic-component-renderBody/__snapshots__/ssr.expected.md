# Write
```html
  <button>0<!--M_*3 #text/0--></button><!--M_*2 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.b={clickCount:0,"ClosureScopes:clickCount":_.d=new Set,"#childScope/0":_.a={}},_.a,_.e={_:_.b}],_.a.onClick=_._["__tests__/template.marko_0/onClick"](_.b),(_.d).add(_.e),_.c),"__tests__/tags/my-button.marko_0_onClick 2"];M._.w()</script>
```

# Render End
```html
<button>
  0
  <!--M_*3 #text/0-->
</button>
<!--M_*2 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.b = {
      clickCount: 0,
      "ClosureScopes:clickCount": _.d = new Set,
      "#childScope/0": _.a = {}
    }, _.a, _.e = {
      _: _.b
    }], _.a.onClick = _._[
      "__tests__/template.marko_0/onClick"
      ](_.b), (_.d).add(_.e), _.c),
    "__tests__/tags/my-button.marko_0_onClick 2"
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
INSERT button/#comment
INSERT #comment
INSERT script
INSERT script/#text
```