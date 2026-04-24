# Write
```html
  <button>1:<!>0<!--M_*1 #text/2--></button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={bar:0}],_.a.$fooChange=_._["__tests__/template.marko_0/foo"](_.a),_.b),"__tests__/template.marko_0_bar_$fooChange 1"];M._.w()</script>
```

# Render End
```html
<button>
  1:
  <!---->
  0
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      bar: 0
    }], _.a.$fooChange = _._[
      "__tests__/template.marko_0/foo"
      ](_.a), _.b),
    "__tests__/template.marko_0_bar_$fooChange 1"
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
INSERT button/#text0
INSERT button/#comment0
INSERT button/#text1
INSERT button/#comment1
INSERT #comment
INSERT script
INSERT script/#text
```