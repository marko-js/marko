# Write
```html
  a<!--M_[--><!--M_!^b-->_B_<!--M_!b--><!--M_]1 #text/0 2-->h<style M_>t{display:none}</style><t M_=b>b<!--M_#c-->d<!--M_[--><!--M_!^d-->_A_<!--M_!d--><!--M_]2 #text/1 3--></t><t M_=d>e<!--M_#e-->g</t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,1,_.a={"#BranchAccessor":"#text/0","#PlaceholderContent":_.d={}},_.b={"#BranchAccessor":"#text/1"}],_.a["#PlaceholderContent"]=_._["__tests__/template.marko_2_content"](_.d),_.b["#PlaceholderContent"]=_._["__tests__/template.marko_5_content"](_.a),_.c)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  ij
```

# Write
```html
  <t M_=c>c</t><script>M._.w()</script>
```

# Write
```html
  <t M_=e>f</t><script>M._.w()</script>
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
    a
    <!--M_[-->
    bcd
    <!--M_[-->
    efg
    <!--M_]2 #text/1 3-->
    <!--M_]1 #text/0 2-->
    h
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.d = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.d), _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.a), _.c)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    ij
    <script>
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
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/#comment3
INSERT html/body/#text7
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/#text1
INSERT #comment
INSERT html/body/#text3
INSERT html/body/#comment1
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/#comment2
INSERT t
INSERT html/body/#text4
INSERT #comment
INSERT html/body/#text6
INSERT html/body/script0
INSERT html/body/script0/#text
REMOVE html/head/style after html/body/#text7
INSERT html/head/style
REMOVE t after html/body/#text7
REMOVE t after html/body/#text7
INSERT html/body/#text8
INSERT t
INSERT html/body/#text2
INSERT html/body/script1
INSERT html/body/script1/#text
REMOVE t after html/body/#text8
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/#text1, html/body/#text2, html/body/#text3, html/body/#comment1, #comment, #text, #comment, html/body/#comment2
INSERT t
INSERT html/body/#text5
INSERT html/body/script2
INSERT html/body/script2/#text
REMOVE t after html/body/script1
REMOVE #text after #comment
REMOVE #comment after html/body/#comment1
REMOVE #comment after html/body/#comment1
INSERT html/body/#text4, html/body/#text5, html/body/#text6
```