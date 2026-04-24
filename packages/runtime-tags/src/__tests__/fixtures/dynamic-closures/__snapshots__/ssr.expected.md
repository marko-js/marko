# Write
```html
  <button></button><!--M_*1 #button/0--><div>1 2 <!>3<!--M_*3 #text/2--></div><div>1 2 <!>3<!--M_*5 #text/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ClosureScopes:c":_.d=new Set},1,_.e={_:_.a},_.b={_:_.a},_.f={_:_.b,"ClosureSignalIndex:c":1}],(_.d).add(_.e),_.d.add(_.f),_.c),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<button />
<!--M_*1 #button/0-->
<div>
  1 2 
  <!---->
  3
  <!--M_*3 #text/2-->
</div>
<div>
  1 2 
  <!---->
  3
  <!--M_*5 #text/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      "ClosureScopes:c": _.d = new Set
    }, 1, _.e = {
      _: _.a
    }, _.b = {
      _: _.a
    }, _.f = {
      _: _.b,
      "ClosureSignalIndex:c": 1
    }], (_.d).add(_.e), _.d.add(_.f), _.c),
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
INSERT #comment
INSERT div0
INSERT div0/#text0
INSERT div0/#comment0
INSERT div0/#text1
INSERT div0/#comment1
INSERT div1
INSERT div1/#text0
INSERT div1/#comment0
INSERT div1/#text1
INSERT div1/#comment1
INSERT script
INSERT script/#text
```