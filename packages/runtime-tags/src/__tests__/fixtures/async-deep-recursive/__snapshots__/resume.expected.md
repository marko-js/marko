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
      M._.r = [_ =&gt; (_.b = [0, 2, _.c = {
        "ConditionalScope:#text/1": _.a = {
          "#BranchAccessor": "#text/1"
        }
      }, _.a], _.a["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.c), _.b), _ =&gt; (_.e = [2, _.f = {
        "ConditionalScope:#text/1": _.d = {
          "#BranchAccessor": "#text/1"
        }
      }, _.d], _.d["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.f), _.e)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.h = [3, _.i = {
        "ConditionalScope:#text/1": _.g = {
          "#BranchAccessor": "#text/1"
        }
      }, _.g], _.g["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.i), _.h), _ =&gt; (_.k = [2, _.l = {
        "ConditionalScope:#text/1": _.j = {
          "#BranchAccessor": "#text/1"
        }
      }, _.j], _.j["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.l), _.k));
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