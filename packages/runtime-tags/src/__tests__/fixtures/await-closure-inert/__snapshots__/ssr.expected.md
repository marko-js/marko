# Write
```html
  <!--M_[--><!--M_!^2-->loading...<!--M_!2--><!--M_]1 #text/0 2--><style M_>t{display:none}</style><t M_=2><!--M_#b--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,1,_.a={"#BranchAccessor":"#text/0","#PlaceholderContent":_.c={}}],_.a["#PlaceholderContent"]=_._["__tests__/template.marko_3_content"](_.c),_.b)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=b><span>1</span></t><script>M._.w()</script>
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
    <!--M_[-->
    <!--M_!^2-->
    loading...
    <!--M_!2-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_3_content"
        ](_.c), _.b)];
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
    <!--M_[-->
    <span>
      1
    </span>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_3_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT t
INSERT html/body/span
INSERT html/body/span/#text
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/span
INSERT html/body/script1
```