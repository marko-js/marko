# Write
```html
  <!--M_[--><!--M_!^b--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"},"ConditionalScope:#text/1":_.c={"#BranchAccessor":"#text/1"},"ConditionalScope:#text/2":_.d={"#BranchAccessor":"#text/2"}},_.b,_.c,_.d],_.b["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.a),_.c["#CatchContent"]=_._["__tests__/template.marko_5_content"](_.a),_.d["#CatchContent"]=_._["__tests__/template.marko_8_content"](_.a),_.e)]</script>
```

# Write
```html
  <style M_>t{display:none}</style><t M_=c>Rejected B</t><script>REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <div>Resolved A: A Value</div><!--M_!b--><!--M_]1 #text/0 2--><!--M_[--><!--M_!^c--><!--M_!c--><!--M_]1 #text/1 3--><!--M_[--><!--M_!^d--><!--M_[--><div>Resolved C: C Value</div><button>Before</button><!--M_*7 #button/1--><!--M_]4 #text/0 7--><!--M_!d--><!--M_]1 #text/2 4--><script>M._.r.push(_=>(_.f=[2,_.g={}],_.d["ConditionalScope:#text/0"]=_.g,_.f),"__tests__/template.marko_9",7);M._.w()</script>
```

# Render End
```html
<!--M_[-->
<!--M_!^b-->
<html>
  <head>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
        "ConditionalScope:#text/0": _.b = {
          "#BranchAccessor": "#text/0"
        },
        "ConditionalScope:#text/1": _.c = {
          "#BranchAccessor": "#text/1"
        },
        "ConditionalScope:#text/2": _.d = {
          "#BranchAccessor": "#text/2"
        }
      }, _.b, _.c, _.d], _.b["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.a), _.c["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.a), _.d["#CatchContent"] = _._[
        "__tests__/template.marko_8_content"
        ](_.a), _.e)]
    </script>
    <style
      m_=""
    >
      t{display:none}
    </style>
  </head>
  <body>
    <script>
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <div>
      Resolved A: A Value
    </div>
    <!--M_!b-->
    <!--M_]1 #text/0 2-->
    <!--M_[-->
    Rejected B
    <!--M_]1 #text/1 3-->
    <!--M_[-->
    <!--M_!^d-->
    <!--M_[-->
    <div>
      Resolved C: C Value
    </div>
    <button>
      Before
    </button>
    <!--M_*7 #button/1-->
    <!--M_]4 #text/0 7-->
    <!--M_!d-->
    <!--M_]1 #text/2 4-->
    <script>
      M._.r.push(_ =&gt; (_.f = [2, _.g = {}], _.d["ConditionalScope:#text/0"] = _
          .g, _.f),
        "__tests__/template.marko_9",
        7);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment0
INSERT #comment1
INSERT html
INSERT html/head
INSERT html/head/script
INSERT html/head/script/#text
INSERT html/head/style
INSERT html/head/style/#text
INSERT html/body
INSERT t
INSERT html/body/#text
INSERT html/body/script0
INSERT html/body/script0/#text
REMOVE html/head/style after html/head/script
INSERT html/head/style
REMOVE t before html/body/script0
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT #comment
INSERT #comment
INSERT html/body/#comment3
INSERT html/body/#comment4
INSERT html/body/#comment5
INSERT html/body/#comment6
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment7
INSERT html/body/#comment8
INSERT html/body/#comment9
INSERT html/body/#comment10
INSERT html/body/script1
INSERT html/body/script1/#text
REMOVE #comment after html/body/#comment2
REMOVE #comment after html/body/#comment2
INSERT html/body/#text
```