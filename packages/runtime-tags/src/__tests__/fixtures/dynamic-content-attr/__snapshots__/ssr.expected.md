# Write
```html
  <button>0<!--M_*2 #text/0--> 3</button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={"BranchScopes:#button/0":_.b={"ClosureSignalIndex:count":0},"ConditionalRenderer:#button/0":"__tests__/template.marko_1_content",count:0,MyThing:_.c={},"ClosureScopes:count":_.e=new Set},_.b],_.b._=_.a,_.c.content=_._["__tests__/template.marko_1_content"](_.a),(_.e).add(_.b),_.d),"__tests__/template.marko_0_count",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*2 #text/0-->
       3
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "BranchScopes:#button/0": _.b = {
            "ClosureSignalIndex:count": 0
          },
          "ConditionalRenderer:#button/0": "__tests__/template.marko_1_content",
          count: 0,
          MyThing: _.c = {},
          "ClosureScopes:count": _.e = new Set
        }, _.b], _.b._ = _.a, _.c.content = _._[
          "__tests__/template.marko_1_content"
          ](_.a), (_.e).add(_.b), _.d),
        "__tests__/template.marko_0_count",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button
INSERT html/body/button/#text0
INSERT html/body/button/#comment
INSERT html/body/button/#text1
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```