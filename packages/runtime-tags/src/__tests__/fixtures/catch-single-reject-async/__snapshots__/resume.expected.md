# Render
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
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.c = {}
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.c), _.b)]
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
    a
    <!--M_[-->
    ERROR!
    <!--M_]1 #text/0 2-->
    def
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
INSERT html/body/#text3
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/#text1
REMOVE html/head/style after html/body/#text3
INSERT html/head/style
REMOVE t after html/body/#text3
REMOVE script after #text
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/#text1
INSERT html/body/#text2
INSERT html/body/script
```