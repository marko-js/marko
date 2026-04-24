# Write
```html
  <button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={clickCount:0}],_.a.increment=_._["__tests__/template.marko_0/increment"](_.a),_.b),"__tests__/template.marko_0_increment 1"];M._.w()</script>
```

# Render End
```html
<button>
  0
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      clickCount: 0
    }], _.a.increment = _._[
      "__tests__/template.marko_0/increment"
      ](_.a), _.b),
    "__tests__/template.marko_0_increment 1"
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