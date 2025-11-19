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
      inc
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_[-->
    0
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:clickCount": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {}]));
      M._.w()
    </script>
  </body>
</html>
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
      inc
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_[-->
    0
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:clickCount": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {}]));
      M._.w()
    </script>
  </body>
</html>
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    LOADING...
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:clickCount": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {}]));
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
REMOVE #document-fragment/#text0 after html/body/#text
REMOVE #document-fragment/#comment2 after html/body/#text
REMOVE #document-fragment/#text1 after html/body/#text
REMOVE #document-fragment/#comment3 after html/body/#text
REMOVE #document-fragment/#text2 after html/body/#text
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_[-->
    1
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:clickCount": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {}]));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment1, html/body/#comment2, html/body/#text0, html/body/#comment3, html/body/#text1, html/body/#comment4, html/body/#text2
REMOVE #text after html/body/#text2
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
      inc
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_[-->
    1
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:clickCount": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {}]));
      M._.w()
    </script>
  </body>
</html>
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    LOADING...
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:clickCount": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {}]));
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
REMOVE #document-fragment/#text0 after html/body/#text
REMOVE #document-fragment/#comment2 after html/body/#text
REMOVE #document-fragment/#text1 after html/body/#text
REMOVE #document-fragment/#comment3 after html/body/#text
REMOVE #document-fragment/#text2 after html/body/#text
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    <!--M_[-->
    <!--M_[-->
    2
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b = {
          _: _.a,
          "ClosureSignalIndex:clickCount": 0,
          "#BranchAccessor": "#text/1"
        }], _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1,
      {}]));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment1, html/body/#comment2, html/body/#text0, html/body/#comment3, html/body/#text1, html/body/#comment4, html/body/#text2
REMOVE #text after html/body/#text2
```