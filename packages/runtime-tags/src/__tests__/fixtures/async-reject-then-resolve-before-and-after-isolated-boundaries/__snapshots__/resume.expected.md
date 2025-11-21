# Render
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <!--M_!^b-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.e = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }, _.c = {
        "#BranchAccessor": "#text/2"
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.e), _.b["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.e), _.c["#CatchContent"] = _._[
        "__tests__/template.marko_8_content"
        ](_.e), _.d)]
    </script>
  </body>
</html>
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
    <!--M_!^b-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.e = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }, _.c = {
        "#BranchAccessor": "#text/2"
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.e), _.b["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.e), _.c["#CatchContent"] = _._[
        "__tests__/template.marko_8_content"
        ](_.e), _.d)]
    </script>
    <script>
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT t/#text
REMOVE html/head/style after html/body/script0
INSERT html/head/style
REMOVE t after html/body/script0
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
    <!--M_[-->
    <!--M_!^b-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.e = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }, _.c = {
        "#BranchAccessor": "#text/2"
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.e), _.b["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.e), _.c["#CatchContent"] = _._[
        "__tests__/template.marko_8_content"
        ](_.e), _.d)]
    </script>
    <script>
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <div>
      Resolved A: A Value
    </div>
    <!--M_!b-->
    <!--M_]1 #text/0 2-->
    <!--M_[-->
    Rejected B
    <!--M_]1 #text/1 3-->
    <!--M_[-->
    <!--M_!^d-->
    <!--M_[-->
    <div>
      Resolved C: C Value
    </div>
    <button>
      Before
    </button>
    <!--M_*7 #button/1-->
    <!--M_]4 #text/0 7-->
    <!--M_!d-->
    <!--M_]1 #text/2 4-->
    <script>
      M._.r.push(_ =&gt; (_.f = [2,
        {}]),
        "__tests__/template.marko_9 7"
        );
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/#comment4
INSERT #comment
INSERT #comment
INSERT html/body/#comment5
INSERT html/body/#comment6
INSERT html/body/#comment7
INSERT html/body/#comment8
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment9
INSERT html/body/#comment10
INSERT html/body/#comment11
INSERT html/body/#comment12
REMOVE #comment after html/body/#comment4
REMOVE #comment after html/body/#comment4
INSERT html/body/#text1
INSERT html/body/#text0
INSERT html/body/#text2
INSERT html/body/#text3
INSERT html/body/#text4
INSERT html/body/script2
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
    <!--M_!^b-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.e = {}
      }, _.b = {
        "#BranchAccessor": "#text/1"
      }, _.c = {
        "#BranchAccessor": "#text/2"
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.e), _.b["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.e), _.c["#CatchContent"] = _._[
        "__tests__/template.marko_8_content"
        ](_.e), _.d)]
    </script>
    <script>
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <div>
      Resolved A: A Value
    </div>
    <!--M_!b-->
    <!--M_]1 #text/0 2-->
    <!--M_[-->
    Rejected B
    <!--M_]1 #text/1 3-->
    <!--M_[-->
    <!--M_!^d-->
    <!--M_[-->
    <div>
      Resolved C: C Value
    </div>
    <button>
      After
    </button>
    <!--M_*7 #button/1-->
    <!--M_]4 #text/0 7-->
    <!--M_!d-->
    <!--M_]1 #text/2 4-->
    <script>
      M._.r.push(_ =&gt; (_.f = [2,
        {}]),
        "__tests__/template.marko_9 7"
        );
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/button
INSERT html/body/button/#text
```