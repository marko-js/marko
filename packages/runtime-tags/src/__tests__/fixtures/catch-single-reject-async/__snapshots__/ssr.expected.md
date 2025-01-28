# Write
```html
  a<!--M_!^b-->b
```

# Write
```html
  <!--M_!b-->def<style M_>t{display:none}</style><t M_=b>ERROR!</t><script>WALKER_RUNTIME("M")("_");REORDER_RUNTIME(M._);M._.w()</script>
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
    aERROR!def
    <script>
      WALKER_RUNTIME("M")("_");REORDER_RUNTIME(M._);M._.w()
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
INSERT html/body/#text2
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/#text1
INSERT html/body/script
INSERT html/body/script/#text
REMOVE html/head/style after html/body/#text2
INSERT html/head/style
REMOVE #text after #comment
REMOVE #comment after #comment
REMOVE html/body/#text1 in t
REMOVE #comment after html/body/#text0
INSERT html/body/#text1
REMOVE t after html/body/#text2
```