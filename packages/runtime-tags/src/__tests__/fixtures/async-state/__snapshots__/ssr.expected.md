# Write
```html
  <button>inc</button><!--M_*1 #button/0--><!--M_[--><!--M_!^b-->LOADING...<!--M_!b--><!--M_]1 #text/1 2--><style M_>t{display:none}</style><t M_=b><!--M_#c--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},_.b],_.b._=_.a,_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_content"](_.a),(_.d).add(_.b),_.c),"__tests__/template.marko_0_clickCount",1];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=c><!--M_[-->0<!--M_*4 #text/0--><!--M_]2 #text/0 4--></t><script>M._.r.push(_=>(_.e=[1,_.f={}],(_.b["ConditionalScope:#text/0"]=_.f),_.e));M._.w()</script>
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
      inc
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_[-->
    0
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/1": _.b = {
            "ClosureSignalIndex:clickCount": 0,
            "#BranchAccessor": "#text/1"
          },
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b], _.b._ = _.a, _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.f = {}], (_.b["ConditionalScope:#text/0"] = _
        .f), _.e));
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
INSERT html/body/#comment1
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/#comment5
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT #comment
INSERT html/body/script0
INSERT html/body/script0/#text
REMOVE html/head/style after html/body/#comment5
INSERT html/head/style
INSERT t
INSERT html/body/#comment2
INSERT html/body/#text
INSERT html/body/#comment3
INSERT html/body/#comment4
INSERT html/body/script1
INSERT html/body/script1/#text
REMOVE html/body/#comment2 before html/body/#text
REMOVE html/body/#text before html/body/#comment3
REMOVE html/body/#comment3 before html/body/#comment4
REMOVE html/body/#comment4 in t
REMOVE #comment in t
INSERT html/body/#comment2, html/body/#text, html/body/#comment3, html/body/#comment4
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment1
REMOVE html/body/#comment2 before html/body/#text
REMOVE html/body/#text before html/body/#comment3
REMOVE html/body/#comment3 before html/body/#comment4
REMOVE html/body/#comment4 in t
REMOVE #comment after html/body/#comment1
INSERT html/body/#comment2, html/body/#text, html/body/#comment3, html/body/#comment4
REMOVE t after html/body/#comment5
```