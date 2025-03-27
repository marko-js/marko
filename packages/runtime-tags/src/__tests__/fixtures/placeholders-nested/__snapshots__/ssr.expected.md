# Write
```html
  a<!--M_[2--><!--M_!^b-->_B_<!--M_!b--><!--M_]1 #text/0-->h<style M_>t{display:none}</style><t M_=b>b<!--M_#c-->d<!--M_[3--><!--M_!^d-->_A_<!--M_!d--><!--M_]2 #text/1--></t><t M_=d>e<!--M_#e-->g</t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.c={"ConditionalScope:#text/0":_.a={"ConditionalScope:#text/1":_.b={"#BranchAccessor":"#text/1"},"#BranchAccessor":"#text/0"}},_.a,_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_5_renderer"](_.a),_.a["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.c),_.d)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <!--M_[6-->i<!--M_]1 #text/1-->j<script>M._.r.push(_=>(_.e=[2,_.f={}],(_.c["ConditionalScope:#text/1"]=_.f),_.e))</script>
```

# Write
```html
  <t M_=c><!--M_[7-->c<!--M_]2 #text/0--></t><script>M._.r.push(_=>(_.g=[_.h={}],(_.a["ConditionalScope:#text/0"]=_.h),_.g));M._.w()</script>
```

# Write
```html
  <t M_=e><!--M_[8-->f<!--M_]3 #text/0--></t><script>M._.r.push(_=>(_.i=[_.j={}],(_.b["ConditionalScope:#text/0"]=_.j),_.i));M._.w()</script>
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
    <!--M_[7-->
    c
    <!--M_]2 #text/0-->
    d
    <!--M_[3-->
    e
    <!--M_[8-->
    f
    <!--M_]3 #text/0-->
    g
    <!--M_]2 #text/1-->
    <!--M_]1 #text/0-->
    h
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalScope:#text/0":_.a={"ConditionalScope:#text/1":_.b={"#BranchAccessor":"#text/1"},"#BranchAccessor":"#text/0"}},_.a,_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_5_renderer"](_.a),_.a["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.c),_.d)];REORDER_RUNTIME(M._);M._.w()
    </script>
    <!--M_[6-->
    i
    <!--M_]1 #text/1-->
    j
    <script>
      M._.r.push(_=&gt;(_.e=[2,_.f={}],(_.c["ConditionalScope:#text/1"]=_.f),_.e))
    </script>
    <script>
      M._.r.push(_=&gt;(_.g=[_.h={}],(_.a["ConditionalScope:#text/0"]=_.h),_.g));M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.i=[_.j={}],(_.b["ConditionalScope:#text/0"]=_.j),_.i));M._.w()
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
INSERT html/body/#comment7
INSERT html/body/#text7
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/#text1
INSERT #comment
INSERT html/body/#text3
INSERT html/body/#comment3
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/#comment6
INSERT t
INSERT html/body/#text4
INSERT #comment
INSERT html/body/#text6
INSERT html/body/script0
INSERT html/body/script0/#text
REMOVE html/head/style after html/body/#text7
INSERT html/head/style
INSERT html/body/#comment8
INSERT html/body/#text8
INSERT html/body/#comment9
INSERT html/body/#text9
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
REMOVE html/body/#text3 before html/body/#comment3
REMOVE html/body/#comment3 before #comment
REMOVE #comment before #text
REMOVE #text before #comment
REMOVE #comment before html/body/#comment6
REMOVE html/body/#comment6 in t
REMOVE #comment after html/body/#comment0
INSERT html/body/#text1, html/body/#comment1, html/body/#text2, html/body/#comment2, html/body/#text3, html/body/#comment3, #comment, #text, #comment, html/body/#comment6
REMOVE t after html/body/#text7
INSERT t
INSERT html/body/#comment4
INSERT html/body/#text5
INSERT html/body/#comment5
INSERT html/body/script3
INSERT html/body/script3/#text
REMOVE html/body/#comment4 before html/body/#text5
REMOVE html/body/#text5 before html/body/#comment5
REMOVE html/body/#comment5 in t
REMOVE #comment after html/body/#text4
INSERT html/body/#comment4, html/body/#text5, html/body/#comment5
REMOVE t after html/body/script2
REMOVE #text after #comment
REMOVE #comment after #comment
REMOVE html/body/#text4 before html/body/#comment4
REMOVE html/body/#comment4 before html/body/#text5
REMOVE html/body/#text5 before html/body/#comment5
REMOVE html/body/#comment5 before html/body/#text6
REMOVE html/body/#text6 in t
REMOVE #comment after html/body/#comment3
INSERT html/body/#text4, html/body/#comment4, html/body/#text5, html/body/#comment5, html/body/#text6
REMOVE t after html/body/#text7
```