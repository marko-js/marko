# Render
```html
<!--M_!^b-->
<html>
  <head>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.e = {
        "ConditionalScope:#text/0": _.a = {
          "#BranchAccessor": "#text/0"
        },
        "ConditionalScope:#text/1": _.b = {
          "#BranchAccessor": "#text/1"
        },
        "ConditionalScope:#text/2": _.c = {
          "#BranchAccessor": "#text/2"
        }
      }, _.a, _.b, _.c], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.e), _.b["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.e), _.c["#CatchContent"] = _._[
        "__tests__/template.marko_8_content"
        ](_.e), _.d)]
    </script>
    <style
      m_=""
    >
      t{display:none}
    </style>
  </head>
  <body>
    <!--M_[-->
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
      M._.r.push(_ =&gt; (_.f = [2, _.g = {}], _.c["ConditionalScope:#text/0"] = _
          .g, _.f),
        "__tests__/template.marko_9",
        7);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before #comment
INSERT html/body/#comment0
INSERT html/body/#text0
INSERT html/body/#text2
INSERT html/body/#text3
INSERT html/body/#text4
```

# Render
```js
container.querySelector("button").click();
```
```html
<!--M_!^b-->
<html>
  <head>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.e = {
        "ConditionalScope:#text/0": _.a = {
          "#BranchAccessor": "#text/0"
        },
        "ConditionalScope:#text/1": _.b = {
          "#BranchAccessor": "#text/1"
        },
        "ConditionalScope:#text/2": _.c = {
          "#BranchAccessor": "#text/2"
        }
      }, _.a, _.b, _.c], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.e), _.b["#CatchContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.e), _.c["#CatchContent"] = _._[
        "__tests__/template.marko_8_content"
        ](_.e), _.d)]
    </script>
    <style
      m_=""
    >
      t{display:none}
    </style>
  </head>
  <body>
    <!--M_[-->
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
      M._.r.push(_ =&gt; (_.f = [2, _.g = {}], _.c["ConditionalScope:#text/0"] = _
          .g, _.f),
        "__tests__/template.marko_9",
        7);
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