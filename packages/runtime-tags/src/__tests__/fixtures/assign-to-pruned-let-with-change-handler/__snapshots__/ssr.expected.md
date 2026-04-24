# Write
```html
  <button>Before</button><!--M_*1 #button/0--><div>0<!--M_*1 #text/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={}],_.a["TagVariableChange:count"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<button>
  Before
</button>
<!--M_*1 #button/0-->
<div>
  0
  <!--M_*1 #text/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {}], _.a["TagVariableChange:count"] = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1"
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
INSERT div
INSERT div/#text
INSERT div/#comment
INSERT script
INSERT script/#text
```