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
    <div>
      0
    </div>
    <!--M_*1 #div/1-->
    <!--M_[2-->
    <!--M_!^b-->
    <!--M_[4-->
    Async: 
    <!---->
    0
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_!b-->
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {
            "ClosureSignalIndex:clickCount": 0,
            "#BranchAccessor": "#text/2"
          },
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b], _.b._ = _.a, _.b["#CatchContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.j.c = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_1_clickCount",
          2)
      };
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.f = {}], (_.b["ConditionalScope:#text/0"] = _
        .f), _.e));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
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
    <div>
      0
    </div>
    <!--M_*1 #div/1-->
    <!--M_[2-->
    <!--M_!^b-->
    <!--M_[4-->
    Async: 
    <!---->
    0
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_!b-->
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {
            "ClosureSignalIndex:clickCount": 0,
            "#BranchAccessor": "#text/2"
          },
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b], _.b._ = _.a, _.b["#CatchContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.j.c = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_1_clickCount",
          2)
      };
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.f = {}], (_.b["ConditionalScope:#text/0"] = _
        .f), _.e));
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
    <div>
      0
    </div>
    <!--M_*1 #div/1-->
    LOADING...
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {
            "ClosureSignalIndex:clickCount": 0,
            "#BranchAccessor": "#text/2"
          },
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b], _.b._ = _.a, _.b["#CatchContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.j.c = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_1_clickCount",
          2)
      };
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.f = {}], (_.b["ConditionalScope:#text/0"] = _
        .f), _.e));
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
REMOVE #document-fragment/#comment2 after html/body/#text
REMOVE #document-fragment/#text0 after html/body/#text
REMOVE #document-fragment/#comment3 after html/body/#text
REMOVE #document-fragment/#text1 after html/body/#text
REMOVE #document-fragment/#comment4 after html/body/#text
REMOVE #document-fragment/#comment5 after html/body/#text
REMOVE #document-fragment/#comment6 after html/body/#text
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
    <div>
      1
    </div>
    <!--M_*1 #div/1-->
    <!--M_[2-->
    <!--M_!^b-->
    <!--M_[4-->
    Async: 
    <!---->
    1
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_!b-->
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {
            "ClosureSignalIndex:clickCount": 0,
            "#BranchAccessor": "#text/2"
          },
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b], _.b._ = _.a, _.b["#CatchContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.j.c = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_1_clickCount",
          2)
      };
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.f = {}], (_.b["ConditionalScope:#text/0"] = _
        .f), _.e));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment2, html/body/#comment3, html/body/#comment4, html/body/#text0, html/body/#comment5, html/body/#text1, html/body/#comment6, html/body/#comment7, html/body/#comment8
REMOVE #text after html/body/#comment8
REMOVE #text in html/body/div
INSERT html/body/div/#text
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
    <div>
      1
    </div>
    <!--M_*1 #div/1-->
    <!--M_[2-->
    <!--M_!^b-->
    <!--M_[4-->
    Async: 
    <!---->
    1
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_!b-->
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {
            "ClosureSignalIndex:clickCount": 0,
            "#BranchAccessor": "#text/2"
          },
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b], _.b._ = _.a, _.b["#CatchContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.j.c = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_1_clickCount",
          2)
      };
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.f = {}], (_.b["ConditionalScope:#text/0"] = _
        .f), _.e));
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
    <div>
      1
    </div>
    <!--M_*1 #div/1-->
    LOADING...
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {
            "ClosureSignalIndex:clickCount": 0,
            "#BranchAccessor": "#text/2"
          },
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b], _.b._ = _.a, _.b["#CatchContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.j.c = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_1_clickCount",
          2)
      };
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.f = {}], (_.b["ConditionalScope:#text/0"] = _
        .f), _.e));
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
REMOVE #document-fragment/#comment2 after html/body/#text
REMOVE #document-fragment/#text0 after html/body/#text
REMOVE #document-fragment/#comment3 after html/body/#text
REMOVE #document-fragment/#text1 after html/body/#text
REMOVE #document-fragment/#comment4 after html/body/#text
REMOVE #document-fragment/#comment5 after html/body/#text
REMOVE #document-fragment/#comment6 after html/body/#text
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
    <div>
      1
    </div>
    <!--M_*1 #div/1-->
    Error: ERROR!
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/2": _.b = {
            "ClosureSignalIndex:clickCount": 0,
            "#BranchAccessor": "#text/2"
          },
          clickCount: 0,
          "ClosureScopes:clickCount": _.d = new Set
        }, _.b], _.b._ = _.a, _.b["#CatchContent"] = _._[
          "__tests__/template.marko_3_content"
          ](_.a), _.b["#PlaceholderContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), (_.d).add(_.b), _.c),
        "__tests__/template.marko_0_clickCount",
        1
      ];
      REORDER_RUNTIME(M._);
      M._.j.c = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_1_clickCount",
          2)
      };
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.f = {}], (_.b["ConditionalScope:#text/0"] = _
        .f), _.e));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE #text after html/body/#text
UPDATE html/body/#text " " => "Error: ERROR!"
```