# Write
  a<!--M_!^a-->_A_<!--M_!a-->e<style M_>t{display:none}</style><t M_=a>b<!--M_#b-->d</t><script>WALKER_RUNTIME("M")("_");REORDER_RUNTIME(M._);M._.w()</script>


# Write
  fg


# Write
  <t M_=b>c</t><script>M._.w()</script>


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
    abcde
    <script>
      WALKER_RUNTIME("M")("_");REORDER_RUNTIME(M._);M._.w()
    </script>
    fg
    <script>
      M._.w()
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
inserted #document/html0/body1/#text4
inserted #document/html0/head0/style0
inserted #document/html0/head0/style0/#text0
inserted t
inserted #document/html0/body1/#text1
inserted #comment
inserted #document/html0/body1/#text3
inserted #document/html0/body1/script5
inserted #document/html0/body1/script5/#text0
removed #document/html0/head0/style0 after #document/html0/body1/#text4
inserted #document/html0/head0/style0
inserted #document/html0/body1/#text6
inserted t
inserted #document/html0/body1/#text2
inserted #document/html0/body1/script7
inserted #document/html0/body1/script7/#text0
removed #document/html0/body1/#text2 in t
removed #comment after #document/html0/body1/#text1
inserted #document/html0/body1/#text2
removed t after #document/html0/body1/#text6
removed #text after #comment
removed #comment after #comment
removed #document/html0/body1/#text1 before #document/html0/body1/#text2
removed #document/html0/body1/#text2 before #document/html0/body1/#text3
removed #document/html0/body1/#text3 in t
removed #comment after #document/html0/body1/#text0
inserted #document/html0/body1/#text1, #document/html0/body1/#text2, #document/html0/body1/#text3
removed t after #document/html0/body1/#text4
```