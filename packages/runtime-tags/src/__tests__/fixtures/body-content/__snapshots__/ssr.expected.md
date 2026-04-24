# Write
```html
  <button>0<!--M_*3 #text/0--></button><!--M_*2 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e=[0,_.d={clickCount:0,"ClosureScopes:clickCount":_.f=new Set,"#childScope/0":_.c={"EventAttributes:#button/0":_.a={},attrs:_.b={}}},_.c,_.g={_:_.d}],_.a.click=_.b.onClick=_._["__tests__/template.marko_0/onClick"](_.d),(_.f).add(_.g),_.e),"__tests__/tags/FancyButton.marko_0_attrs 2"];M._.w()</script>
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
  M._.r = [_ =&gt; (_.e = [0, _.d = {
      clickCount: 0,
      "ClosureScopes:clickCount": _.f = new Set,
      "#childScope/0": _.c = {
        "EventAttributes:#button/0": _.a = {},
        attrs: _.b = {}
      }
    }, _.c, _.g = {
      _: _.d
    }], _.a.click = _.b.onClick = _._[
      "__tests__/template.marko_0/onClick"
      ](_.d), (_.f).add(_.g), _.e),
    "__tests__/tags/FancyButton.marko_0_attrs 2"
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