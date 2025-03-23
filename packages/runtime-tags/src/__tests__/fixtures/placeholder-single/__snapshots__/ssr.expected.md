# Write
```html
  a<!--M_[2--><!--M_!^b-->_A_<!--M_!b--><!--M_]1 #text/0-->e<style M_>t{display:none}</style><t M_=b>b<!--M_#c-->d</t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"}},2:_.b},_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <!--M_[4-->f<!--M_]1 #text/1-->g<script>M._.r.push(_=>(_.d={4:_.e={}},(_.a["ConditionalScope:#text/1"]=_.e),_.d))</script>
```

# Write
```html
  <t M_=c><!--M_[5-->c<!--M_]2 #text/0--></t><script>M._.r.push(_=>(_.f={5:_.g={}},(_.b["ConditionalScope:#text/0"]=_.g),_.f));M._.w()</script>
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
    b
    <!--M_[5-->
    c
    <!--M_]2 #text/0-->
    d
    <!--M_]1 #text/0-->
    e
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"}},2:_.b},_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c)];REORDER_RUNTIME(M._);M._.w()
    </script>
    <!--M_[4-->
    f
    <!--M_]1 #text/1-->
    g
    <script>
      M._.r.push(_=&gt;(_.d={4:_.e={}},(_.a["ConditionalScope:#text/1"]=_.e),_.d))
    </script>
    <script>
      M._.r.push(_=&gt;(_.f={5:_.g={}},(_.b["ConditionalScope:#text/0"]=_.g),_.f));M._.w()
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
INSERT html/body/#text4
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/#text1
INSERT #comment
INSERT html/body/#text3
INSERT html/body/script0
INSERT html/body/script0/#text
REMOVE html/head/style after html/body/#text4
INSERT html/head/style
INSERT html/body/#comment4
INSERT html/body/#text5
INSERT html/body/#comment5
INSERT html/body/#text6
INSERT html/body/script1
INSERT html/body/script1/#text
INSERT t
INSERT html/body/#comment1
INSERT html/body/#text2
INSERT html/body/#comment2
INSERT html/body/script2
INSERT html/body/script2/#text
REMOVE html/body/#comment1 before html/body/#text2
REMOVE html/body/#text2 before html/body/#comment2
REMOVE html/body/#comment2 in t
REMOVE #comment after html/body/#text1
INSERT html/body/#comment1, html/body/#text2, html/body/#comment2
REMOVE t after html/body/script1
REMOVE #text after #comment
REMOVE #comment after #comment
REMOVE html/body/#text1 before html/body/#comment1
REMOVE html/body/#comment1 before html/body/#text2
REMOVE html/body/#text2 before html/body/#comment2
REMOVE html/body/#comment2 before html/body/#text3
REMOVE html/body/#text3 in t
REMOVE #comment after html/body/#comment0
INSERT html/body/#text1, html/body/#comment1, html/body/#text2, html/body/#comment2, html/body/#text3
REMOVE t after html/body/#text4
```