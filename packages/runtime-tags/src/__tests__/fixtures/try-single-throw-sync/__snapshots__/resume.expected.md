# Render
```html
<html>
  <head />
  <body>
    Before
    <!--M_[-->
    ERROR!
    <!--M_]1 #text/0 2-->
    After
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
