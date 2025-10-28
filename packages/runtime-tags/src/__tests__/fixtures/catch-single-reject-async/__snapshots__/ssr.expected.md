# Write
```html
  a<!--M_[--><!--M_!^b-->b<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"ConditionalScope:#text/0":_.a={"#BranchAccessor":"#text/0"}},_.a],_.a["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.c),_.b)]</script>
```

# Write
```html
  <!--M_!b--><!--M_]1 #text/0 2-->def<style M_>t{display:none}</style><t M_=b>ERROR!</t><script>REORDER_RUNTIME(M._);M._.w()</script>
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
INSERT html/body/#comment1
INSERT html/body/#text2
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/#text1
INSERT html/body/script
INSERT html/body/script/#text
REMOVE html/head/style after html/body/#text2
INSERT html/head/style
REMOVE t after html/body/#text2
REMOVE script after #text
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/#text1
```