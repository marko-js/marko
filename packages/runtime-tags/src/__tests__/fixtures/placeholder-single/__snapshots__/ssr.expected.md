# Write
```html
  a<!--M_[--><!--M_!^b-->_A_<!--M_!b--><!--M_]1 #text/0 2-->e<style M_>t{display:none}</style><t M_=b>b<!--M_#c-->d</t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,1,_.a={"#BranchAccessor":"#text/0","#PlaceholderContent":_.c={}}],_.a["#PlaceholderContent"]=_._["__tests__/template.marko_2_content"](_.c),_.b)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  fg
```

# Write
```html
  <t M_=c>c</t><script>M._.w()</script>
```

# Render ASYNC
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
    <!--M_!^b-->
    _A_
    <!--M_!b-->
    <!--M_]1 #text/0 2-->
    e
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.c), _.b)];
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
INSERT html/body/#comment1
INSERT html/body/#text1
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/#text2
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT t/#text0
INSERT t/#comment
INSERT t/#text1
REMOVE html/head/style after html/body/#text2
INSERT html/head/style
REMOVE t after html/body/#text2
INSERT html/body/script
```

# Render ASYNC
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
    <!--M_!^b-->
    _A_
    <!--M_!b-->
    <!--M_]1 #text/0 2-->
    e
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    fg
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text3
```

# Render ASYNC
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
    bcd
    <!--M_]1 #text/0 2-->
    e
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
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
INSERT t
INSERT html/body/#text2
REMOVE t after html/body/#text5
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/#text1, html/body/#text2, html/body/#text3
INSERT html/body/script1
```