# Render
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
    <!--M_!^2-->
    _B_
    <!--M_!2-->
    <!--M_]1 #text/0 2-->
    h
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.d = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.d), _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.a), _.c)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text2
```

# Render FLUSH
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
    <!--M_!^2-->
    _B_
    <!--M_!2-->
    <!--M_]1 #text/0 2-->
    h
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.d = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.d), _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.a), _.c)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    ij
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text4
```

# Render FLUSH
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
    <!--M_[-->
    <!--M_!^3-->
    _A_
    <!--M_!3-->
    <!--M_]2 #text/1 3-->
    <!--M_]1 #text/0 2-->
    h
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.d = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.d), _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.a), _.c)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    ij
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
REMOVE t after html/body/#text8
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/#text1, html/body/#text2, html/body/#text3, html/body/#comment1, html/body/#comment2, html/body/#text4, html/body/#comment3, html/body/#text5, html/body/#comment4
INSERT html/body/script1
```

# Render FLUSH
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
    <!--M_[-->
    efg
    <!--M_]2 #text/1 3-->
    <!--M_]1 #text/0 2-->
    h
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.d = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.d), _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.a), _.c)];
      REORDER_RUNTIME(M._);
      M._.w()
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
INSERT t
INSERT html/body/#text5
REMOVE t after html/body/script1
REMOVE #text after #comment
REMOVE #comment after html/body/#comment1
REMOVE #comment after html/body/#comment1
INSERT html/body/#text4, html/body/#text5, html/body/#text6
INSERT html/body/script2
```