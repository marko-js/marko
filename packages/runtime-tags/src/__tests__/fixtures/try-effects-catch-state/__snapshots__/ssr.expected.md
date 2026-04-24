# Write
```html
  <div></div><!--M_*1 #div/0--><!--M_[--><button>inc</button><!--M_*2 #button/0--> -- <!><!--M_*2 #text/1--><!--M_]1 #text/1 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={clickCount:0,"ClosureScopes:clickCount":_.d=new Set},_.b={_:_.a,"#BranchAccessor":"#text/1"}],_.b["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.a),(_.d).add(_.b),_.c),"__tests__/template.marko_1_clickCount 2"];M._.w()</script>
```

# Render End
```html
<div />
<!--M_*1 #div/0-->
<!--M_[-->
<button>
  inc
</button>
<!--M_*2 #button/0-->
--
<!---->
<!--M_*2 #text/1-->
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.a = {
      clickCount: 0,
      "ClosureScopes:clickCount": _.d = new Set
    }, _.b = {
      _: _.a,
      "#BranchAccessor": "#text/1"
    }], _.b["#CatchContent"] = _._[
      "__tests__/template.marko_2_content"
      ](_.a), (_.d).add(_.b), _.c),
    "__tests__/template.marko_1_clickCount 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT #comment0
INSERT #comment1
INSERT button
INSERT button/#text
INSERT #comment2
INSERT #text
INSERT #comment3
INSERT #comment4
INSERT #comment5
INSERT script
INSERT script/#text
```