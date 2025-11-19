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
