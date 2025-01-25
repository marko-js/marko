# Write
```html
  a<!--M_!^a-->_B_<!--M_!a-->h<style M_>t{display:none}</style><t M_=a>b<!--M_#b-->d<!--M_!^c-->_A_<!--M_!c--></t><t M_=c>e<!--M_#d-->g</t><script>WALKER_RUNTIME("M")("_");REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  ij
```

# Write
```html
  <t M_=b>c</t><script>M._.w()</script>
```

# Write
```html
  <t M_=d>f</t><script>M._.w()</script>
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
    abcdefgh
    <script>
      WALKER_RUNTIME("M")("_");REORDER_RUNTIME(M._);M._.w()
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
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/#text7
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/#text1
INSERT #comment
INSERT html/body/#text3
INSERT #comment
INSERT #text
INSERT #comment
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
REMOVE #comment after #comment
REMOVE html/body/#text1 before html/body/#text2
REMOVE html/body/#text2 before html/body/#text3
REMOVE html/body/#text3 before #comment
REMOVE #comment before #text
REMOVE #text before #comment
REMOVE #comment in t
REMOVE #comment after html/body/#text0
INSERT html/body/#text1, html/body/#text2, html/body/#text3, #comment, #text, #comment
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
REMOVE #comment after #comment
REMOVE html/body/#text4 before html/body/#text5
REMOVE html/body/#text5 before html/body/#text6
REMOVE html/body/#text6 in t
REMOVE #comment after html/body/#text3
INSERT html/body/#text4, html/body/#text5, html/body/#text6
REMOVE t after html/body/#text7
```