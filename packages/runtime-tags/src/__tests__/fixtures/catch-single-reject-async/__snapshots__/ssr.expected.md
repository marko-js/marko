# Write
```html
  a<!--M_[--><!--M_!^b-->b<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"}},_.b],_.b["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.a),_.c)]</script>
```

# Write
```html
  <!--M_!b--><!--M_]1 #text/0 2-->def<style M_>t{display:none}</style><t M_=b>ERROR!<!--M_*4 #text/0--></t><script>REORDER_RUNTIME(M._);M._.w()</script>
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
    ERROR!
    <!--M_*4 #text/0-->
    <!--M_]1 #text/0 2-->
    def
    <script>
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
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT #comment
INSERT #text
INSERT script
INSERT script/#text
INSERT #comment
INSERT html/body/#comment2
INSERT html/body/#text2
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/#text1
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
REMOVE html/head/style after html/body/#text2
INSERT html/head/style
REMOVE script after #text
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE html/body/#text1 before html/body/#comment1
REMOVE html/body/#comment1 in t
REMOVE #comment after html/body/#comment0
INSERT html/body/#text1, html/body/#comment1
REMOVE t after html/body/#text2
```