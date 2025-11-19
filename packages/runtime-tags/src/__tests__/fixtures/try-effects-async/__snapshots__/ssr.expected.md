# Write
```html
  <button>inc</button><!--M_*1 #button/0--><div></div><!--M_*1 #div/1--><!--M_[--><!--M_!^b--><!--M_!^c-->LOADING...<!--M_!c--><!--M_!b--><!--M_]1 #text/2 2--><style M_>t{display:none}</style><t M_=c><!--M_#d--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={clickCount:0,"ClosureScopes:clickCount":_.d=new Set},_.b={_:_.a,"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/2"}],_.b["#CatchContent"]=_._["__tests__/template.marko_3_content"](_.a),_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_content"](_.a),(_.d).add(_.b),_.c),"__tests__/template.marko_0_clickCount",1];REORDER_RUNTIME(M._);M._.j.c=_=>{_.push("__tests__/template.marko_1_clickCount",2)};M._.w()</script>
```

# Write
```html
  <t M_=d><!--M_[-->Async: <!>0<!--M_*4 #text/0--><!--M_]2 #text/0 4--></t><script>M._.r.push(_=>(_.e=[1,{}]));M._.w()</script>
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
      inc
    </button>
    <!--M_*1 #button/0-->
    <div />
    <!--M_*1 #div/1-->
    <!--M_[-->
    <!--M_!^b-->
    <!--M_!^c-->
    LOADING...
    <!--M_!c-->
    <!--M_!b-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:clickCount": 0,
          "#BranchAccessor": "#text/2"
        }], _.b["#CatchContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.j.c = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_1_clickCount",
          2)
      };
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
INSERT html/body/#comment0
INSERT html/body/div
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/#comment4
INSERT html/body/#text
INSERT html/body/#comment5
INSERT html/body/#comment6
INSERT html/body/#comment7
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT t/#comment
REMOVE html/head/style after html/body/#comment7
INSERT html/head/style
REMOVE t after html/body/#comment7
INSERT html/body/script
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
      inc
    </button>
    <!--M_*1 #button/0-->
    <div />
    <!--M_*1 #div/1-->
    <!--M_[-->
    <!--M_!^b-->
    <!--M_[-->
    Async: 
    <!---->
    0
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0 4-->
    <!--M_!b-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:clickCount": 0,
          "#BranchAccessor": "#text/2"
        }], _.b["#CatchContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.j.c = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_1_clickCount",
          2)
      };
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {}]));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT t
INSERT html/body/#comment4
INSERT html/body/#text0
INSERT html/body/#comment5
INSERT html/body/#text1
INSERT html/body/#comment6
INSERT html/body/#comment7
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment3
REMOVE #comment after html/body/#comment3
INSERT html/body/#comment4, html/body/#text0, html/body/#comment5, html/body/#text1, html/body/#comment6, html/body/#comment7
INSERT html/body/script1
```