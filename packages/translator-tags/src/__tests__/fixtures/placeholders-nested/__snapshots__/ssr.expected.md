# Write
  a<!--M_!^a-->i...<!--M_!a-->j<style M_>t{display:none}</style><t M_=a>b<!--M_#b-->d<!--M_!^c-->h...<!--M_!c--></t><t M_=c>e<!--M_#d-->g</t><script>WALKER_RUNTIME("M")("_");REORDER_RUNTIME(M._);M._.w()</script>


# Write
  kl


# Write
  <t c M_=b>cd<!--M_!^c-->h...<!--M_!c--></t><script>M._.w()</script>


# Write
  <t c M_=d>fg</t><script>M._.d=1;M._.w()</script>


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
    ab
    <!--M_#b-->
    de
    <!--M_#d-->
    g
    <script>
      M._.w()
    </script>
    <t
      c=""
      m_="d"
    >
      fg
    </t>
    <script>
      M._.d=1;M._.w()
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
inserted #text
inserted #document/html0/head0/style0
inserted #document/html0/head0/style0/#text0
inserted t
inserted #document/html0/body1/#text1
inserted #document/html0/body1/#comment2
inserted #document/html0/body1/#text3
inserted #comment
inserted #text
inserted #comment
inserted t
inserted #document/html0/body1/#text4
inserted #document/html0/body1/#comment5
inserted #document/html0/body1/#text6
inserted script
inserted script/#text0
removed #document/html0/head0/style0 after #text
inserted #document/html0/head0/style0
inserted #text
inserted t
inserted t/#text0
inserted t/#comment1
inserted t/#text2
inserted t/#comment3
inserted #document/html0/body1/script7
inserted #document/html0/body1/script7/#text0
removed #text after #comment
removed #comment after #comment
removed #document/html0/body1/#text1 before #document/html0/body1/#comment2
removed #document/html0/body1/#comment2 before #document/html0/body1/#text3
removed #document/html0/body1/#text3 before #comment
removed #comment before #text
removed #text before #comment
removed #comment in t
removed #comment after #document/html0/body1/#text0
inserted #document/html0/body1/#text1, #document/html0/body1/#comment2, #document/html0/body1/#text3, #comment, #text, #comment
removed t after #text
inserted #document/html0/body1/t8
inserted #document/html0/body1/t8/#text0
inserted #document/html0/body1/script9
inserted #document/html0/body1/script9/#text0
removed #text after #comment
removed #comment after #comment
removed #text after #comment
removed t after #comment
removed script after #comment
removed #text after #comment
removed t after #comment
removed #comment after #document/html0/body1/#text3
inserted #document/html0/body1/#text4, #document/html0/body1/#comment5, #document/html0/body1/#text6
```