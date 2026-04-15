# Write
```html
  a<!--M_[--><!--M_!^b-->b<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{"#BranchAccessor":"#text/0","#CatchContent":0}])]</script>
```

# Write
```html
  <!--M_!b--><!--M_]1 #text/0 2-->d<style M_>t{display:none}</style><t M_=b></t><script>REORDER_RUNTIME(M._);M._.w()</script>
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    a
    <!--M_[-->
    <!--M_!^b-->
    b
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
      {
        "#BranchAccessor": "#text/0",
        "#CatchContent": 0
      }])]
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
INSERT html/body/#comment1
INSERT html/body/#text1
INSERT html/body/script
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
    <!--M_]1 #text/0 2-->
    d
    <script>
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT html/body/#comment1
INSERT html/body/#text1
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
REMOVE html/head/style after html/body/#text1
INSERT html/head/style
REMOVE t after html/body/#text1
REMOVE script after #text
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/script
```