# Write
```html
  <button></button><!--M_*1 #button/0--><div id=one>Fail</div><div id=two>Fail</div><!--M_[--><!--M_[--><!--M_!^3-->loading...<!--M_!3--><!--M_]2 #text/0 3--><!--M_]1 #text/1 2--><style M_>t{display:none}</style><t M_=3><!--M_#b--><!--M_#c--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={show:1,"ClosureScopes:show":new Set},_.b={_:_.a},_.c={_:_.b,"#BranchAccessor":"#text/0"}],_.c["#PlaceholderContent"]=_._["__tests__/template.marko_4_content"](_.b),_.d),"__tests__/template.marko_0 1"];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=b><!--M_[-->1<!--M_*5 #text/0--><!--M_]3 #text/0 5--></t><t M_=c></t><script>M._.r.push(_=>(_.e=[1,{"#ClosestBranchId":2,_:_.c,"ClosureSignalIndex:show":0}]),_=>(_.f=[{"#ClosestBranchId":2}]));M._.j.b=_=>{_.push("__tests__/template.marko_3_show 5 __tests__/template.marko_3 5")};M._.j.c=_=>{_.push("__tests__/template.marko_5 6")};M._.w()</script>
```

# Render ASYNC
```html
<html>
  <head>
    <style
      m_=""
    >
      t{display:none}
    </style>
  </head>
  <body>
    <button />
    <!--M_*1 #button/0-->
    <div
      id="one"
    >
      Fail
    </div>
    <div
      id="two"
    >
      Fail
    </div>
    <!--M_[-->
    <!--M_[-->
    <!--M_!^3-->
    loading...
    <!--M_!3-->
    <!--M_]2 #text/0 3-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          show: 1,
          "ClosureScopes:show": new Set
        }, _.b = {
          _: _.a
        }, _.c = {
          _: _.b,
          "#BranchAccessor": "#text/0"
        }], _.c["#PlaceholderContent"] = _._[
          "__tests__/template.marko_4_content"
          ](_.b), _.d),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
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
INSERT html/body/#comment0
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/#text
INSERT html/body/#comment4
INSERT html/body/#comment5
INSERT html/body/#comment6
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT t/#comment0
INSERT t/#comment1
REMOVE html/head/style after html/body/#comment6
INSERT html/head/style
REMOVE t after html/body/#comment6
INSERT html/body/script
```

# Render End
```html
<html>
  <head>
    <style
      m_=""
    >
      t{display:none}
    </style>
  </head>
  <body>
    <button />
    <!--M_*1 #button/0-->
    <div
      id="one"
    >
      Fail
    </div>
    <div
      id="two"
    >
      Fail
    </div>
    <!--M_[-->
    <!--M_[-->
    <!--M_[-->
    1
    <!--M_*5 #text/0-->
    <!--M_]3 #text/0 5-->
    <!--M_]2 #text/0 3-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          show: 1,
          "ClosureScopes:show": new Set
        }, _.b = {
          _: _.a
        }, _.c = {
          _: _.b,
          "#BranchAccessor": "#text/0"
        }], _.c["#PlaceholderContent"] = _._[
          "__tests__/template.marko_4_content"
          ](_.b), _.d),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {
        "#ClosestBranchId": 2,
        _: _.c,
        "ClosureSignalIndex:show": 0
      }]), _ =&gt; (_.f = [
      {
        "#ClosestBranchId": 2
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_3_show 5 __tests__/template.marko_3 5"
          )
      };
      M._.j.c = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_5 6"
          )
      };
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT t
INSERT html/body/#comment3
INSERT html/body/#text
INSERT html/body/#comment4
INSERT html/body/#comment5
INSERT t
REMOVE t after html/body/script0
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment2
REMOVE #comment after html/body/#comment2
INSERT html/body/#comment3, html/body/#text, html/body/#comment4, html/body/#comment5
INSERT html/body/script1
```