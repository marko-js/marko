# Write
```html
  <div><!--M_[-->Got: a <!>0<!--M_*2 #text/1--><!--M_]1 #text/0 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{count:0,"ClosureScopes:count":new Set}]),_=>(_.c=[_.e={_:_.b=_.a[1],"ClosureSignalIndex:count":0}],(_.d=_.b["ClosureScopes:count"]).add(_.e),(_.b["ConditionalScope:#text/0"]=_.e),_.c)];M._.w()</script>
```

# Write
```html
  <script>M._.r.push(_=>(_.f=[_.g={_:_.b,"ClosureSignalIndex:count":2}],(_.d).add(_.g),(_.b["ConditionalScope:#text/2"]=_.g),_.f));M._.w()</script>
```

# Write
```html
  <!--M_[-->Got: b <!>0<!--M_*4 #text/1--><!--M_]1 #text/1 4--><!--M_[-->Got: c <!>0<!--M_*3 #text/1--><!--M_]1 #text/2 3--><button>Inc</button><!--M_*1 #button/3--></div><script>M._.r.push(_=>(_.h=[_.i={_:_.b,"ClosureSignalIndex:count":1}],(_.d).add(_.i),(_.b["ConditionalScope:#text/1"]=_.i),_.h),"__tests__/template.marko_0_count",1);M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[-->
      Got: a 
      <!---->
      0
      <!--M_*2 #text/1-->
      <!--M_]1 #text/0 2-->
      <script>
        WALKER_RUNTIME("M")("_");
        M._.r = [_ =&gt; (_.a = [0,
        {
          count: 0,
          "ClosureScopes:count": new Set
        }]), _ =&gt; (_.c = [_.e = {
          _: _.b = _.a[1],
          "ClosureSignalIndex:count": 0
        }], (_.d = _.b["ClosureScopes:count"]).add(_.e), (_.b[
          "ConditionalScope:#text/0"] = _.e), _.c)];
        M._.w()
      </script>
      <script>
        M._.r.push(_ =&gt; (_.f = [_.g = {
          _: _.b,
          "ClosureSignalIndex:count": 2
        }], (_.d).add(_.g), (_.b["ConditionalScope:#text/2"] = _.g), _.f));
        M._.w()
      </script>
      <!--M_[-->
      Got: b 
      <!---->
      0
      <!--M_*4 #text/1-->
      <!--M_]1 #text/1 4-->
      <!--M_[-->
      Got: c 
      <!---->
      0
      <!--M_*3 #text/1-->
      <!--M_]1 #text/2 3-->
      <button>
        Inc
      </button>
      <!--M_*1 #button/3-->
    </div>
    <script>
      M._.r.push(_ =&gt; (_.h = [_.i = {
          _: _.b,
          "ClosureSignalIndex:count": 1
        }], (_.d).add(_.i), (_.b["ConditionalScope:#text/1"] = _.i), _.h),
        "__tests__/template.marko_0_count",
        1);
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
INSERT html/body/div
INSERT html/body/div/#comment0
INSERT html/body/div/#text0
INSERT html/body/div/#comment1
INSERT html/body/div/#text1
INSERT html/body/div/#comment2
INSERT html/body/div/#comment3
INSERT html/body/div/script0
INSERT html/body/div/script0/#text
INSERT html/body/div/script1
INSERT html/body/div/script1/#text
INSERT html/body/div/#comment4
INSERT html/body/div/#text2
INSERT html/body/div/#comment5
INSERT html/body/div/#text3
INSERT html/body/div/#comment6
INSERT html/body/div/#comment7
INSERT html/body/div/#comment8
INSERT html/body/div/#text4
INSERT html/body/div/#comment9
INSERT html/body/div/#text5
INSERT html/body/div/#comment10
INSERT html/body/div/#comment11
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/#comment12
INSERT html/body/script
INSERT html/body/script/#text
```