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
    bcd
    <!--M_[-->
    efg
    <!--M_]2 #text/1 3-->
    <!--M_]1 #text/0 2-->
    h
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
        "ConditionalScope:#text/0": _.b = {
          "ConditionalScope:#text/1": _.a = {
            "#BranchAccessor": "#text/1"
          },
          "#BranchAccessor": "#text/0"
        }
      }, _.b, _.a], _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.d), _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.b), _.c)];
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
INSERT html/body/#text8
INSERT html/body/#text7
```