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
      <!--M_]5 #text/0 6-->
      <!--M_]4 #text/1 5-->
    </div>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
        "ConditionalScope:#text/0": _.b = {
          "#BranchAccessor": "#text/0"
        },
        promiseA: new Promise((f, r) =&gt; _.c = {
          f,
          r
        })
      }, _.b], _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_4_content"
        ](_.a), _.d)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.g = [1, _.e = {
        "ConditionalScope:#text/1": _.f = {
          "#BranchAccessor": "#text/1"
        }
      }, _.f], _.f["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.e), _.g), _ =&gt; (_.c.f("a"), _.h = []), _ =&gt; (_.l = [_.i = {
        "ConditionalScope:#text/1": _.j = {
          "#BranchAccessor": "#text/1"
        },
        promiseB: new Promise((f, r) =&gt; _.k = {
          f,
          r
        })
      }, _.j], _.j["#PlaceholderContent"] = _._[
        "__tests__/template.marko_10_content"
        ](_.i), (_.f["ConditionalScope:#text/0"] = _.i), _.l));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.o = [1, _.m = {
        "ConditionalScope:#text/1": _.n = {
          "#BranchAccessor": "#text/1"
        }
      }, _.n], _.n["#PlaceholderContent"] = _._[
        "__tests__/template.marko_11_content"
        ](_.m), _.o), _ =&gt; (_.k.f("b"), _.p = []));
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
INSERT html/body/div/#text0
INSERT html/body/div/#text1
INSERT html/body/div/div/div/#text
```