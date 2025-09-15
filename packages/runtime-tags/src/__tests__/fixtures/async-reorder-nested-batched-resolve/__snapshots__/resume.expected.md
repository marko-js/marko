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
      M._.r = [_ =&gt; (_.c = [0, _.a = {
        "ConditionalScope:#text/0": _.b = {
          "#BranchAccessor": "#text/0"
        }
      }, _.b], _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_4_content"
        ](_.a), _.c)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.f = [1, _.d = {
        "ConditionalScope:#text/1": _.e = {
          "#BranchAccessor": "#text/1"
        }
      }, _.e], _.e["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.d), _.f), _ =&gt; (_.i = [_.g = {
        "ConditionalScope:#text/1": _.h = {
          "#BranchAccessor": "#text/1"
        }
      }, _.h], _.h["#PlaceholderContent"] = _._[
        "__tests__/template.marko_10_content"
        ](_.g), _.i));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.l = [1, _.j = {
        "ConditionalScope:#text/1": _.k = {
          "#BranchAccessor": "#text/1"
        }
      }, _.k], _.k["#PlaceholderContent"] = _._[
        "__tests__/template.marko_11_content"
        ](_.j), _.l));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text
INSERT html/body/div/div/#text
INSERT html/body/div/#text
INSERT html/body/div/div/div/#text
```