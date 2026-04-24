# Write
```html
  <button>Inc</button><!--M_*1 #button/0--><div><!--M_[--><div><div>1<!--M_*5 #text/0-->.2</div></div><!--M_]2 #text/0 3--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.b={x:1,y:2,"#childScope/1":_.a={"ConditionalRenderer:#text/0":"__tests__/template.marko_1_content"}},_.a,_.c={outer:1,_:_.b,"ClosureScopes:outer":_.e=new Set},1,_.f={_:_.c,"#ClosestBranchId":3}],_.a.content=_._["__tests__/template.marko_1_content"](_.b),(_.e).add(_.f),_.d),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<button>
  Inc
</button>
<!--M_*1 #button/0-->
<div>
  <!--M_[-->
  <div>
    <div>
      1
      <!--M_*5 #text/0-->
      .2
    </div>
  </div>
  <!--M_]2 #text/0 3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, _.b = {
      x: 1,
      y: 2,
      "#childScope/1": _.a = {
        "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
      }
    }, _.a, _.c = {
      outer: 1,
      _: _.b,
      "ClosureScopes:outer": _.e = new Set
    }, 1, _.f = {
      _: _.c,
      "#ClosestBranchId": 3
    }], _.a.content = _._[
      "__tests__/template.marko_1_content"
      ](_.b), (_.e).add(_.f), _.d),
    "__tests__/template.marko_0_x 1"
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
INSERT div/#comment0
INSERT div/div
INSERT div/div/div
INSERT div/div/div/#text0
INSERT div/div/div/#comment
INSERT div/div/div/#text1
INSERT div/#comment1
INSERT script
INSERT script/#text
```