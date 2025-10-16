# Render
```html
<!--M_!^b-->
<html>
  <head>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
        "ConditionalScope:#text/0": _.b = {
          "#BranchAccessor": "#text/0"
        },
        "ConditionalScope:#text/1": _.c = {
          "#BranchAccessor": "#text/1"
        }
      }, _.b, _.c], _.b["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.a), _.c["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.a), _.d)]
    </script>
    <style
      m_=""
    >
      t{display:none}
    </style>
  </head>
  <body>
    <!--M_[-->
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
REMOVE html/body/#comment0 before #comment
INSERT html/body/#comment0
INSERT html/body/#text0
INSERT html/body/#text2
```