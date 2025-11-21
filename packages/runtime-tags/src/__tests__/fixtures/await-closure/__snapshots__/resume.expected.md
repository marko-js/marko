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
    <button>
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_!^2-->
    loading...
    <!--M_!2-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          value: 1,
          "ClosureScopes:value": new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/2"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.c),
        "__tests__/template.marko_0_value 1"
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

# Render
```js
container.querySelector("button").click();
```
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
    <button>
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_!^2-->
    loading...
    <!--M_!2-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          value: 1,
          "ClosureScopes:value": new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/2"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.c),
        "__tests__/template.marko_0_value 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
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
    <button>
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_!^2-->
    loading...
    <!--M_!2-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          value: 1,
          "ClosureScopes:value": new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/2"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.c),
        "__tests__/template.marko_0_value 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
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
    <button>
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_[-->
    <span>
      3
      <!--M_*4 #text/0-->
    </span>
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          value: 1,
          "ClosureScopes:value": new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/2"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.c),
        "__tests__/template.marko_0_value 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.d = [1,
      {
        _: _.b,
        "ClosureSignalIndex:value": 0
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_2_value 4"
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
INSERT html/body/#comment2
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/#comment3
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment1
REMOVE #comment after html/body/#comment1
INSERT html/body/#comment2, html/body/span, html/body/#comment3
INSERT html/body/#text0
UPDATE html/body/span/#text "1" => "3"
INSERT html/body/script1
```

# Render
```js
container.querySelector("button").click();
```
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
    <button>
      4
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_[-->
    <span>
      4
      <!--M_*4 #text/0-->
    </span>
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          value: 1,
          "ClosureScopes:value": new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/2"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.c),
        "__tests__/template.marko_0_value 1"
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.d = [1,
      {
        _: _.b,
        "ClosureSignalIndex:value": 0
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_2_value 4"
          )
      };
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "3" => "4"
UPDATE html/body/span/#text "3" => "4"
```