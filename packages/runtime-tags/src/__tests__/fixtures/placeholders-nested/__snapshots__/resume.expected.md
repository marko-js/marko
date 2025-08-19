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
    <!--M_[2-->
    bcd
    <!--M_[3-->
    efg
    <!--M_]2 #text/1-->
    <!--M_]1 #text/0-->
    h
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.c = {
        "ConditionalScope:#text/0": _.a = {
          "ConditionalScope:#text/1": _.b = {
            "#BranchAccessor": "#text/1"
          },
          "#BranchAccessor": "#text/0"
        }
      }, _.a, _.b], _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_renderer"
        ](_.a), _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_renderer"
        ](_.c), _.d)];
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
INSERT html/body/#text7
```