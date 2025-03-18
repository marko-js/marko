# Write
```html
  a<!--M_!^b-->b<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"#text/0!":_.b={"#text/0*":"#text/0"}},2:_.b},_.b["#text/0^"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c)]</script>
```

# Write
```html
  <!--M_!b-->def<style M_>t{display:none}</style><t M_=b>ERROR!<!--M_*4 #text/0--></t><script>REORDER_RUNTIME(M._);M._.w()</script>
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
    aERROR!
    <!--M_*4 #text/0-->
    def
    <script>
      REORDER_RUNTIME(M._);M._.w()
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
INSERT #comment
INSERT #text
INSERT script
INSERT script/#text
INSERT #comment
INSERT html/body/#text2
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/#text1
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
REMOVE html/head/style after html/body/#text2
INSERT html/head/style
REMOVE #text after #comment
REMOVE script after #comment
REMOVE #comment after #comment
REMOVE html/body/#text1 before html/body/#comment
REMOVE html/body/#comment in t
REMOVE #comment after html/body/#text0
INSERT html/body/#text1, html/body/#comment
REMOVE t after html/body/#text2
```