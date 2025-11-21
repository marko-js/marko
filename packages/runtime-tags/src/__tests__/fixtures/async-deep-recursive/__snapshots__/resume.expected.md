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
      <!--M_!^4-->
      LOADING...
      <!--M_!4-->
      <!--M_]3 #text/1 4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 3, _.a = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text1
```

# Render FLUSH
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
        <!--M_!^9-->
        LOADING...
        <!--M_!9-->
        <!--M_]8 #text/1 9-->
      </div>
      <!--M_]3 #text/1 4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 3, _.a = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [4, _.d = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.f = {}
      }], _.d["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.f), _.e));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT t
INSERT html/body/div/div
INSERT html/body/div/div/#comment0
INSERT html/body/div/div/#comment1
INSERT html/body/div/div/#text0
INSERT html/body/div/div/#comment2
INSERT html/body/div/div/#comment3
INSERT t
INSERT t/#comment
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/div/#comment0
REMOVE #comment after html/body/div/#comment0
INSERT html/body/div/div
REMOVE t after html/body/script0
INSERT html/body/div/div/#text1
INSERT html/body/script1
```

# Render FLUSH
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
          <!--M_!^14-->
          LOADING...
          <!--M_!14-->
          <!--M_]13 #text/1 14-->
        </div>
        <!--M_]8 #text/1 9-->
      </div>
      <!--M_]3 #text/1 4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 3, _.a = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [4, _.d = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.f = {}
      }], _.d["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.f), _.e));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.h = [4, _.g = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.i = {}
      }], _.g["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.i), _.h));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT t
INSERT html/body/div/div/div
INSERT html/body/div/div/div/#comment0
INSERT html/body/div/div/div/#comment1
INSERT html/body/div/div/div/#text0
INSERT html/body/div/div/div/#comment2
INSERT html/body/div/div/div/#comment3
INSERT t
INSERT t/#comment
REMOVE t after html/body/script1
REMOVE #text after #comment
REMOVE #comment after html/body/div/div/#comment0
REMOVE #comment after html/body/div/div/#comment0
INSERT html/body/div/div/div
REMOVE t after html/body/script1
INSERT html/body/div/div/div/#text1
INSERT html/body/script2
```

# Render FLUSH
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
            <!--M_!^19-->
            LOADING...
            <!--M_!19-->
            <!--M_]18 #text/1 19-->
          </div>
          <!--M_]13 #text/1 14-->
        </div>
        <!--M_]8 #text/1 9-->
      </div>
      <!--M_]3 #text/1 4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 3, _.a = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [4, _.d = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.f = {}
      }], _.d["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.f), _.e));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.h = [4, _.g = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.i = {}
      }], _.g["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.i), _.h));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.k = [4, _.j = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.l = {}
      }], _.j["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.l), _.k));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT t
INSERT html/body/div/div/div/div
INSERT html/body/div/div/div/div/#comment0
INSERT html/body/div/div/div/div/#comment1
INSERT html/body/div/div/div/div/#text0
INSERT html/body/div/div/div/div/#comment2
INSERT html/body/div/div/div/div/#comment3
INSERT t
INSERT t/#comment
REMOVE t after html/body/script2
REMOVE #text after #comment
REMOVE #comment after html/body/div/div/div/#comment0
REMOVE #comment after html/body/div/div/div/#comment0
INSERT html/body/div/div/div/div
REMOVE t after html/body/script2
INSERT html/body/div/div/div/div/#text1
INSERT html/body/script3
```

# Render FLUSH
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
            <!--M_]18 #text/1 19-->
          </div>
          <!--M_]13 #text/1 14-->
        </div>
        <!--M_]8 #text/1 9-->
      </div>
      <!--M_]3 #text/1 4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 3, _.a = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [4, _.d = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.f = {}
      }], _.d["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.f), _.e));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.h = [4, _.g = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.i = {}
      }], _.g["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.i), _.h));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.k = [4, _.j = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.l = {}
      }], _.j["#PlaceholderContent"] = _._[
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
INSERT t
REMOVE t after html/body/script3
REMOVE #text after #comment
REMOVE #comment after html/body/div/div/div/div/#comment0
REMOVE #comment after html/body/div/div/div/div/#comment0
INSERT html/body/script4
```