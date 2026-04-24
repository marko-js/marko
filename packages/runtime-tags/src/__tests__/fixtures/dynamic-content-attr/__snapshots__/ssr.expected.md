# Write
```html
  <button>0<!--M_*2 #text/0--> 3</button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={"BranchScopes:#button/0":_.b={},"ConditionalRenderer:#button/0":"__tests__/template.marko_1_content",count:0,MyThing:_.c={},"ClosureScopes:count":_.e=new Set},_.b],_.b._=_.a,_.c.content=_._["__tests__/template.marko_1_content"](_.a),(_.e).add(_.b),_.d),"__tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<button>
  0
  <!--M_*2 #text/0-->
   3
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, _.a = {
      "BranchScopes:#button/0": _.b = {},
      "ConditionalRenderer:#button/0": "__tests__/template.marko_1_content",
      count: 0,
      MyThing: _.c = {},
      "ClosureScopes:count": _.e = new Set
    }, _.b], _.b._ = _.a, _.c.content = _._[
      "__tests__/template.marko_1_content"
      ](_.a), (_.e).add(_.b), _.d),
    "__tests__/template.marko_0_count 1"
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
INSERT button/#comment
INSERT button/#text1
INSERT #comment
INSERT script
INSERT script/#text
```