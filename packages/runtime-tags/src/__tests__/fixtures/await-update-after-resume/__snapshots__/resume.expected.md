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
      0
      <!--M_*1 #text/0-->
    </div>
    <!--M_[-->
    <!--M_!^2-->
    loading...
    <!--M_!2-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ClosureScopes:value": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:value": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
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
      0
      <!--M_*1 #text/0-->
    </div>
    <!--M_[-->
    <!--M_[-->
    <div
      id="inside"
    >
      0
      <!--M_*4 #text/0-->
    </div>
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ClosureScopes:value": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:value": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {
        value: 0
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_3_value 4 __tests__/template.marko_3 4"
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
INSERT html/body/#comment1
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/div1/#comment
INSERT html/body/#comment2
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/#comment1, html/body/div1, html/body/#comment2
INSERT html/body/#text0
INSERT html/body/script1
```
# Console
```
LOG "effect ran value=0"
LOG "setup effect ran"
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
      1
      <!--M_*1 #text/0-->
    </div>
    <!--M_[-->
    <!--M_[-->
    <div
      id="inside"
    >
      0
      <!--M_*4 #text/0-->
    </div>
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ClosureScopes:value": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:value": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {
        value: 0
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_3_value 4 __tests__/template.marko_3 4"
          )
      };
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text "0" => "1"
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
      1
      <!--M_*1 #text/0-->
    </div>
    loading...
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ClosureScopes:value": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:value": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {
        value: 0
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_3_value 4 __tests__/template.marko_3 4"
          )
      };
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE #document-fragment/#comment0 after html/body/#text
REMOVE #document-fragment/#comment1 after html/body/#text
REMOVE #document-fragment/div after html/body/#text
REMOVE #document-fragment/#text0 after html/body/#text
REMOVE #document-fragment/#comment2 after html/body/#text
REMOVE #document-fragment/#text1 after html/body/#text
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
      1
      <!--M_*1 #text/0-->
    </div>
    <!--M_[-->
    <!--M_[-->
    <div
      id="inside"
    >
      1
      <!--M_*4 #text/0-->
    </div>
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ClosureScopes:value": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:value": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {
        value: 0
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_3_value 4 __tests__/template.marko_3 4"
          )
      };
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment0, html/body/#comment1, html/body/div1, html/body/#text0, html/body/#comment2, html/body/#text1
REMOVE #text after html/body/#text1
```
# Console
```
LOG "effect ran value=1"
```