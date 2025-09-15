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
    <div
      data-level="4"
    >
      <!--M_[-->
      <div
        data-level="3"
      >
        <!--M_[-->
        <div
          data-level="2"
        >
          <!--M_[-->
          <div
            data-level="1"
          >
            <!--M_[-->
            <!--M_]16 #text/1 17-->
          </div>
          <!--M_]12 #text/1 13-->
        </div>
        <!--M_]7 #text/1 8-->
      </div>
      <!--M_]3 #text/1 4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 2, _.a = {
        "ConditionalScope:#text/1": _.b = {
          "#BranchAccessor": "#text/1"
        }
      }, _.b], _.b["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.a), _.c), _ =&gt; (_.f = [2, _.d = {
        "ConditionalScope:#text/1": _.e = {
          "#BranchAccessor": "#text/1"
        }
      }, _.e], _.e["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.d), _.f)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.i = [3, _.g = {
        "ConditionalScope:#text/1": _.h = {
          "#BranchAccessor": "#text/1"
        }
      }, _.h], _.h["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.g), _.i), _ =&gt; (_.l = [2, _.j = {
        "ConditionalScope:#text/1": _.k = {
          "#BranchAccessor": "#text/1"
        }
      }, _.k], _.k["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.j), _.l));
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
INSERT html/body/div/div/#text
INSERT html/body/div/#text
INSERT html/body/div/div/div/#text
```