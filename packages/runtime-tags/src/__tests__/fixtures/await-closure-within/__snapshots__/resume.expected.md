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
    <!--M_!^2-->
    loading...
    <!--M_!2-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.c), _.b)];
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
    <!--M_[-->
    <!--M_[-->
    <button>
      1
      <!--M_*4 #text/1-->
    </button>
    <!--M_*4 #button/0-->
    <span>
      1
      <!--M_*5 #text/0-->
    </span>
    <!--M_|4 #text/2 5-->
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.d = {
        value: 1
      },
      {
        _: _.d
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_3_value 4"
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment2
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/#comment3
INSERT html/body/#comment4
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/#comment1, html/body/button, html/body/#comment2, html/body/span, html/body/#comment3, html/body/#comment4
INSERT html/body/#text0
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
    <!--M_[-->
    <!--M_[-->
    <button>
      2
      <!--M_*4 #text/1-->
    </button>
    <!--M_*4 #button/0-->
    <span>
      2
    </span>
    <!--M_|4 #text/2 5-->
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.d = {
        value: 1
      },
      {
        _: _.d
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_3_value 4"
          )
      };
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "1" => "2"
INSERT html/body/span
REMOVE span after html/body/span
UPDATE html/body/span/#text " " => "2"
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
    <!--M_[-->
    <!--M_[-->
    <button>
      3
      <!--M_*4 #text/1-->
    </button>
    <!--M_*4 #button/0-->
    <span>
      3
    </span>
    <!--M_|4 #text/2 5-->
    <!--M_]2 #text/0 4-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [1, _.d = {
        value: 1
      },
      {
        _: _.d
      }]));
      M._.j.b = _ =&gt;
      {
        _.push(
          "__tests__/template.marko_3_value 4"
          )
      };
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
UPDATE html/body/span/#text "2" => "3"
```