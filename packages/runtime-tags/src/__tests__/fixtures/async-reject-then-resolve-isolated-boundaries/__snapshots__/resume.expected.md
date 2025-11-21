# Render
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <!--M_!^b-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.d = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.d), _.b["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.d), _.c)]
    </script>
  </body>
</html>
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
    <!--M_[-->
    <!--M_!^b-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.d = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.d), _.b["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.d), _.c)]
    </script>
    <script>
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT t/#text
REMOVE html/head/style after html/body/script0
INSERT html/head/style
REMOVE t after html/body/script0
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
    <!--M_[-->
    <!--M_!^b-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.d = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.d), _.b["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.d), _.c)]
    </script>
    <script>
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <div>
      Resolved A: A Value
    </div>
    <!--M_!b-->
    <!--M_]1 #text/0 2-->
    <!--M_[-->
    Rejected B
    <!--M_]1 #text/1 3-->
    <script>
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/#comment4
INSERT #comment
INSERT #comment
INSERT html/body/#comment5
REMOVE #comment after html/body/#comment4
REMOVE #comment after html/body/#comment4
INSERT html/body/#text1
INSERT html/body/#text0
INSERT html/body/#text2
INSERT html/body/script2
```