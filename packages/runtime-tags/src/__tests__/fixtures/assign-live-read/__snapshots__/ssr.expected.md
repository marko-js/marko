# Write
```html
  <button>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--><button></button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={count:0}],_.a.resetCount=_._["__tests__/template.marko_0/resetCount"](_.a),_.b),"__tests__/template.marko_0_resetCount 1 __tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<button>
  0
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<button />
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      count: 0
    }], _.a.resetCount = _._[
      "__tests__/template.marko_0/resetCount"
      ](_.a), _.b),
    "__tests__/template.marko_0_resetCount 1 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button0
INSERT button0/#text
INSERT button0/#comment
INSERT #comment0
INSERT button1
INSERT #comment1
INSERT script
INSERT script/#text
```