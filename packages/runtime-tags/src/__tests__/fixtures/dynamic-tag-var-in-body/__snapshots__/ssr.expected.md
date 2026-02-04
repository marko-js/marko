# Write
```html
  <!--M_[--><!--M_[--><!--M_]2 #text/0 3--><div></div><!--M_*2 #div/1--><!--M_]1 #text/0 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalRenderer:#text/0":"__tests__/tags/child.marko","#scopeOffset/1":4,setHtml:_.b={"ConditionalRenderer:#text/0":"__tests__/template.marko_1_content"},"ClosureScopes:setHtml":_.d=new Set},_.b,_.e={_:_.a,"ClosureSignalIndex:setHtml":0}],_.a.setHtml=_._["__tests__/tags/child.marko_0/_return"](_.b),_.b["#TagVariable"]=_._["__tests__/template.marko_0_setHtml/var"](_.a),(_.d).add(_.e),_.c),"__tests__/template.marko_1_setHtml 3"];M._.w()</script>
```

# Render End
```html
<!--M_[-->
<!--M_[-->
<!--M_]2 #text/0 3-->
<html>
  <head />
  <body>
    <div />
    <!--M_*2 #div/1-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalRenderer:#text/0": "__tests__/tags/child.marko",
          "#scopeOffset/1": 4,
          setHtml: _.b = {
            "ConditionalRenderer:#text/0": "__tests__/template.marko_1_content"
          },
          "ClosureScopes:setHtml": _.d = new Set
        }, _.b, _.e = {
          _: _.a,
          "ClosureSignalIndex:setHtml": 0
        }], _.a.setHtml = _._[
          "__tests__/tags/child.marko_0/_return"
          ](_.b), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_setHtml/var"
          ](_.a), (_.d).add(_.e), _.c),
        "__tests__/template.marko_1_setHtml 3"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment0
INSERT #comment1
INSERT #comment2
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```