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
      id="outside"
    >
      Pass
    </div>
    <!--M_[-->
    <!--M_[-->
    <!--M_!^3-->
    loading...
    <!--M_!3-->
    <!--M_]2 #text/0 3-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.c = {}, _.a = {
          "#BranchAccessor": "#text/0"
        }], _.a["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.c), _.b),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text1
INSERT html/body/#text2
```

# Render ASYNC
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
      id="outside"
    >
      Pass
    </div>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.c = {}, _.a = {
          "#BranchAccessor": "#text/0"
        }], _.a["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.c), _.b),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment after #text
INSERT html/body/#comment
REMOVE #comment after html/body/#comment
REMOVE #comment after html/body/#comment
REMOVE #comment after html/body/#comment
REMOVE #text after html/body/#comment
REMOVE #comment after html/body/#comment
REMOVE #text after html/body/#comment
REMOVE #comment after html/body/#comment
REMOVE #text after html/body/#comment
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
      id="outside"
    >
      Pass
    </div>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.c = {}, _.a = {
          "#BranchAccessor": "#text/0"
        }], _.a["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.c), _.b),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.d = [1,
      {
        "#ClosestBranchId": 2
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_4 5"
          )
      };
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT t
REMOVE t after html/body/script0
INSERT html/body/script1
```