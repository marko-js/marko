# Write
```html
  <button></button><!--M_*1 #button/0--><!--M_[--><div>0<!--M_*3 #text/0--></div><div>0<!--M_*3 #text/1--></div><!--M_]1 #text/1 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={a:0,b:0,"ClosureScopes:a":_.d=new Set,"ClosureScopes:b":_.f=new Set},_.b={_:_.a,"#BranchAccessor":"#text/1"},_.e={_:_.b}],(_.d).add(_.e),(_.f).add(_.e),_.c),"__tests__/template.marko_0_a_b 1"];M._.w()</script>
```

# Render End
```html
<button />
<!--M_*1 #button/0-->
<!--M_[-->
<div>
  0
  <!--M_*3 #text/0-->
</div>
<div>
  0
  <!--M_*3 #text/1-->
</div>
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      a: 0,
      b: 0,
      "ClosureScopes:a": _.d = new Set,
      "ClosureScopes:b": _.f = new Set
    }, _.b = {
      _: _.a,
      "#BranchAccessor": "#text/1"
    }, _.e = {
      _: _.b
    }], (_.d).add(_.e), (_.f).add(_.e), _.c),
    "__tests__/template.marko_0_a_b 1"
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
INSERT #comment0
INSERT #comment1
INSERT div0
INSERT div0/#text
INSERT div0/#comment
INSERT div1
INSERT div1/#text
INSERT div1/#comment
INSERT #comment2
INSERT script
INSERT script/#text
```