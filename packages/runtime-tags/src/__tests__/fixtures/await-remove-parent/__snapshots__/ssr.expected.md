# Write
```html
  <div id=outside>Pass</div><!--M_[--><!--M_[--><!--M_!^3-->loading...<!--M_!3--><!--M_]2 #text/0 3--><!--M_]1 #text/0 2--><style M_>t{display:none}</style><t M_=3><!--M_#b--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{},_.c={},_.a={"#BranchAccessor":"#text/0"}],_.a["#PlaceholderContent"]=_._["__tests__/template.marko_3_content"](_.c),_.b),"__tests__/template.marko_0 1"];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=b></t><script>M._.r.push(_=>(_.d=[1,{"#ClosestBranchId":2}]));M._.j.b=_=>{_.push("__tests__/template.marko_4 5")};M._.w()</script>
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
      Pass
    </div>
    <!--M_[-->
    <!--M_[-->
    <!--M_!^3-->
    loading...
    <!--M_!3-->
    <!--M_]2 #text/0 3-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {}, _.c = {}, _.a = {
          "#BranchAccessor": "#text/0"
        }], _.a["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.c), _.b),
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
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT html/body/#text
INSERT html/body/#comment3
INSERT html/body/#comment4
INSERT html/body/#comment5
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT t/#comment
REMOVE html/head/style after html/body/#comment5
INSERT html/head/style
REMOVE t after html/body/#comment5
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
      Pass
    </div>
    <!--M_[-->
    <!--M_[-->
    <!--M_]2 #text/0 3-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {}, _.c = {}, _.a = {
          "#BranchAccessor": "#text/0"
        }], _.a["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.c), _.b),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.d = [1,
      {
        "#ClosestBranchId": 2
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_4 5"
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
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment1
REMOVE #comment after html/body/#comment1
INSERT html/body/script1
```