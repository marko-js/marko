# Write
  a<!--M_!^a-->b


# Write
  <!--M_!a-->efg<style M_>t{display:none}</style><t c M_=a>ERROR!</t><script>WALKER_RUNTIME("M")("_");REORDER_RUNTIME(M._);M._.d=1;M._.w()</script>


# Render "End"
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
    aERROR!efg
    <script>
      WALKER_RUNTIME("M")("_");REORDER_RUNTIME(M._);M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/#text0
inserted #comment
inserted #text
inserted #comment
inserted #document/html0/body1/#text2
inserted #document/html0/head0/style0
inserted #document/html0/head0/style0/#text0
inserted t
inserted #document/html0/body1/#text1
inserted #document/html0/body1/script3
inserted #document/html0/body1/script3/#text0
removed #document/html0/head0/style0 after #document/html0/body1/#text2
inserted #document/html0/head0/style0
removed #text after #comment
removed #comment after #comment
removed #document/html0/body1/#text1 in t
removed #comment after #document/html0/body1/#text0
inserted #document/html0/body1/#text1
removed t after #document/html0/body1/#text2
```