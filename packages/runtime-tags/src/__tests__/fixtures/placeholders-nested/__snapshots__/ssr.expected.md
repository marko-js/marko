# Write
```html
  a<!--M_[2--><!--M_!^b-->_B_<!--M_!b--><!--M_]1 #text/0-->h<style M_>t{display:none}</style><t M_=b>b<!--M_#c-->d<!--M_[3--><!--M_!^d-->_A_<!--M_!d--><!--M_]2 #text/1--></t><t M_=d>e<!--M_#e-->g</t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.c={"ConditionalScope:#text/0":_.a={"ConditionalScope:#text/1":_.b={"#BranchAccessor":"#text/1"},"#BranchAccessor":"#text/0"}},_.a,_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_5_renderer"](_.a),_.a["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.c),_.d)];REORDER_RUNTIME(M._);M._.w()</script>
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
    <!--M_[2-->
    bcd
    <!--M_[3-->
    efg
    <!--M_]2 #text/1-->
    <!--M_]1 #text/0-->
    h
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalScope:#text/0":_.a={"ConditionalScope:#text/1":_.b={"#BranchAccessor":"#text/1"},"#BranchAccessor":"#text/0"}},_.a,_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_5_renderer"](_.a),_.a["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.c),_.d)];REORDER_RUNTIME(M._);M._.w()
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
INSERT html/body/#text8
INSERT t
INSERT html/body/#text2
INSERT html/body/script1
INSERT html/body/script1/#text
REMOVE html/body/#text2 in t
REMOVE #comment after html/body/#text1
INSERT html/body/#text2
REMOVE t after html/body/#text8
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE html/body/#text1 before html/body/#text2
REMOVE html/body/#text2 before html/body/#text3
REMOVE html/body/#text3 before html/body/#comment1
REMOVE html/body/#comment1 before #comment
REMOVE #comment before #text
REMOVE #text before #comment
REMOVE #comment before html/body/#comment2
REMOVE html/body/#comment2 in t
REMOVE #comment after html/body/#comment0
INSERT html/body/#text1, html/body/#text2, html/body/#text3, html/body/#comment1, #comment, #text, #comment, html/body/#comment2
REMOVE t after html/body/#text7
INSERT t
INSERT html/body/#text5
INSERT html/body/script2
INSERT html/body/script2/#text
REMOVE html/body/#text5 in t
REMOVE #comment after html/body/#text4
INSERT html/body/#text5
REMOVE t after html/body/script1
REMOVE #text after #comment
REMOVE #comment after html/body/#comment1
REMOVE html/body/#text4 before html/body/#text5
REMOVE html/body/#text5 before html/body/#text6
REMOVE html/body/#text6 in t
REMOVE #comment after html/body/#comment1
INSERT html/body/#text4, html/body/#text5, html/body/#text6
REMOVE t after html/body/#text7
```