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
    <div
      class="a"
      level="1"
    >
      <!--M_[-->
      <div
        class="a"
        level="2"
      >
        <!--M_[-->
        <div
          class="b"
          level="3"
        >
          <!--M_[-->
          <div
            class="b"
            level="4"
          />
          <!--M_]9 #text/1 10-->
        </div>
        <!--M_]6 #text/1 7-->
      </div>
      <!--M_]4 #text/1 5-->
    </div>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_4_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [2, _.d = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.f = {}
      }], _.d["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.f), _.e), _ =&gt; (_.h = [1, _.g = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.i = {}
      }], _.g["#PlaceholderContent"] = _._[
        "__tests__/template.marko_10_content"
        ](_.i), _.h));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.k = [2, _.j = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.l = {}
      }], _.j["#PlaceholderContent"] = _._[
        "__tests__/template.marko_11_content"
        ](_.l), _.k));
      M._.w()
    </script>
  </body>
</html>
```
