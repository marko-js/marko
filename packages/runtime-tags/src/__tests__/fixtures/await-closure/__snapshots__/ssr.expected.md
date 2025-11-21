# Write
```html
  <button>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><!--M_[--><!--M_!^2-->loading...<!--M_!2--><!--M_]1 #text/2 2--><style M_>t{display:none}</style><t M_=2><!--M_#b--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={value:1,"ClosureScopes:value":new Set},_.b={_:_.a,"#BranchAccessor":"#text/2"}],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_3_content"](_.a),_.c),"__tests__/template.marko_0_value 1"];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=b><!--M_[--><span>1<!--M_*4 #text/0--></span><!--M_]2 #text/0 4--></t><script>M._.r.push(_=>(_.d=[1,{_:_.b,"ClosureSignalIndex:value":0}]));M._.j.b=_=>{_.push("__tests__/template.marko_2_value 4")};M._.w()</script>
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
    <button>
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_!^2-->
    loading...
    <!--M_!2-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          value: 1,
          "ClosureScopes:value": new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/2"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.c),
        "__tests__/template.marko_0_value 1"
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
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT html/body/#text
INSERT html/body/#comment3
INSERT html/body/#comment4
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT t/#comment
REMOVE html/head/style after html/body/#comment4
INSERT html/head/style
REMOVE t after html/body/#comment4
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
    <button>
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_[-->
    <span>
      1
      <!--M_*4 #text/0-->
    </span>
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          value: 1,
          "ClosureScopes:value": new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/2"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.c),
        "__tests__/template.marko_0_value 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.d = [1,
      {
        _: _.b,
        "ClosureSignalIndex:value": 0
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_2_value 4"
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
INSERT html/body/#comment2
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/#comment3
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment1
REMOVE #comment after html/body/#comment1
INSERT html/body/#comment2, html/body/span, html/body/#comment3
INSERT html/body/script1
```