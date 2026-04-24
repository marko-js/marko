# Write
```html
  <div></div><!--M_*1 #div/0--><div></div><!--M_*1 #div/1--><div></div><!--M_*1 #div/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.e={a:_.a={},b:_.b={},c:_.c={}}],_.a.bar=_._["__tests__/template.marko_0/a"](_.e),_.b.baz=_._["__tests__/template.marko_0/b"](_.e),_.c.baz=_._["__tests__/template.marko_0/c"](_.e),_.d),"__tests__/template.marko_0_c 1 __tests__/template.marko_0_b 1 __tests__/template.marko_0_a 1"];M._.w()</script>
```

# Render End
```html
<div />
<!--M_*1 #div/0-->
<div />
<!--M_*1 #div/1-->
<div />
<!--M_*1 #div/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, _.e = {
      a: _.a = {},
      b: _.b = {},
      c: _.c = {}
    }], _.a.bar = _._[
      "__tests__/template.marko_0/a"
      ](_.e), _.b.baz = _._[
      "__tests__/template.marko_0/b"
      ](_.e), _.c.baz = _._[
      "__tests__/template.marko_0/c"
      ](_.e), _.d),
    "__tests__/template.marko_0_c 1 __tests__/template.marko_0_b 1 __tests__/template.marko_0_a 1"
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
INSERT #comment0
INSERT div1
INSERT #comment1
INSERT div2
INSERT #comment2
INSERT script
INSERT script/#text
```