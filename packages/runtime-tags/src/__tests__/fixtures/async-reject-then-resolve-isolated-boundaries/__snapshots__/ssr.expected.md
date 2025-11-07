# Write
```html
  <!--M_[--><!--M_!^b--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,1,_.a={"#BranchAccessor":"#text/0","#CatchContent":_.d={}},_.b={"#BranchAccessor":"#text/1"}],_.a["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.d),_.b["#CatchContent"]=_._["__tests__/template.marko_5_content"](_.d),_.c)]</script>
```

# Write
```html
  <style M_>t{display:none}</style><t M_=c>Rejected B</t><script>REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <div>Resolved A: A Value</div><!--M_!b--><!--M_]1 #text/0 2--><!--M_[--><!--M_!^c--><!--M_!c--><!--M_]1 #text/1 3--><script>M._.w()</script>
```

# Render End
```html
<!--M_[-->
<!--M_!^b-->
<html>
  <head>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.d = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.d), _.b["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.d), _.c)]
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
    <script>
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
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT #comment
INSERT #comment
INSERT html/body/#comment3
INSERT html/body/script1
INSERT html/body/script1/#text
REMOVE #comment after html/body/#comment2
REMOVE #comment after html/body/#comment2
INSERT html/body/#text
```