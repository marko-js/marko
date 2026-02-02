# Write
```html
  <div id=outside>0<!--M_*1 #text/0--></div><!--M_[--><!--M_!^2-->loading...<!--M_!2--><!--M_]1 #text/1 2--><style M_>t{display:none}</style><t M_=2><!--M_#b--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ClosureScopes:value":_.d=new Set},_.b={_:_.a,"ClosureSignalIndex:value":0,"#BranchAccessor":"#text/1"}],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_content"](_.a),(_.d).add(_.b),_.c),"__tests__/template.marko_0 1"];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=b><!--M_[--><div id=inside>0<!--M_*4 #text/0--></div><!--M_]2 #text/0 4--></t><script>M._.r.push(_=>(_.e=[1,{value:0}]));M._.j.b=_=>{_.push("__tests__/template.marko_3_value 4 __tests__/template.marko_3 4")};M._.w()</script>
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
    <div
      id="outside"
    >
      0
      <!--M_*1 #text/0-->
    </div>
    <!--M_[-->
    <!--M_!^2-->
    loading...
    <!--M_!2-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ClosureScopes:value": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:value": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
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
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#text
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT t/#comment
REMOVE html/head/style after html/body/#comment3
INSERT html/head/style
REMOVE t after html/body/#comment3
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
    <div
      id="outside"
    >
      0
      <!--M_*1 #text/0-->
    </div>
    <!--M_[-->
    <!--M_[-->
    <div
      id="inside"
    >
      0
      <!--M_*4 #text/0-->
    </div>
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ClosureScopes:value": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:value": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {
        value: 0
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_3_value 4 __tests__/template.marko_3 4"
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
INSERT html/body/#comment1
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/div1/#comment
INSERT html/body/#comment2
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/#comment1, html/body/div1, html/body/#comment2
INSERT html/body/script1
```