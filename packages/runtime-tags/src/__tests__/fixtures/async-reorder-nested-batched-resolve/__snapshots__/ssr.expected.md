# Write
```html
  <!--M_[--><!--M_!^2-->LOADING A1<!--M_!2--><!--M_]1 #text/0 2--><style M_>t{display:none}</style><t M_=2><!--M_#b--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,1,_.a={"#BranchAccessor":"#text/0","#PlaceholderContent":_.c={}}],_.a["#PlaceholderContent"]=_._["__tests__/template.marko_4_content"](_.c),_.b)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=b><div class=a level=1><!--M_[--><div class=a level=2><!--M_[--><!--M_!^7-->LOADING B1<!--M_!7--><!--M_]6 #text/1 7--></div><!--M_]4 #text/1 5--></div></t><t M_=7><!--M_#c--></t><script>M._.r.push(_=>(_.e=[2,_.d={"#BranchAccessor":"#text/1","#PlaceholderContent":_.f={}}],_.d["#PlaceholderContent"]=_._["__tests__/template.marko_5_content"](_.f),_.e),_=>(_.h=[1,_.g={"#BranchAccessor":"#text/1","#PlaceholderContent":_.i={}}],_.g["#PlaceholderContent"]=_._["__tests__/template.marko_10_content"](_.i),_.h));M._.w()</script>
```

# Write
```html
  <t M_=c><div class=b level=3><!--M_[--><div class=b level=4></div><!--M_]9 #text/1 10--></div></t><script>M._.r.push(_=>(_.k=[2,_.j={"#BranchAccessor":"#text/1","#PlaceholderContent":_.l={}}],_.j["#PlaceholderContent"]=_._["__tests__/template.marko_11_content"](_.l),_.k));M._.w()</script>
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
    <!--M_[-->
    <!--M_!^2-->
    LOADING A1
    <!--M_!2-->
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_4_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#text
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT t/#comment
REMOVE html/head/style after html/body/#comment3
INSERT html/head/style
REMOVE t after html/body/#comment3
INSERT html/body/script
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
    <!--M_[-->
    <div
      class="a"
      level="1"
    >
      <!--M_[-->
      <div
        class="a"
        level="2"
      >
        <!--M_[-->
        <!--M_!^7-->
        LOADING B1
        <!--M_!7-->
        <!--M_]6 #text/1 7-->
      </div>
      <!--M_]4 #text/1 5-->
    </div>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_4_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [2, _.d = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.f = {}
      }], _.d["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.f), _.e), _ =&gt; (_.h = [1, _.g = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.i = {}
      }], _.g["#PlaceholderContent"] = _._[
        "__tests__/template.marko_10_content"
        ](_.i), _.h));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT t
INSERT html/body/div
INSERT html/body/div/#comment0
INSERT html/body/div/div
INSERT html/body/div/div/#comment0
INSERT html/body/div/div/#comment1
INSERT html/body/div/div/#text
INSERT html/body/div/div/#comment2
INSERT html/body/div/div/#comment3
INSERT html/body/div/#comment1
INSERT t
INSERT t/#comment
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#comment0
INSERT html/body/div
REMOVE t after html/body/script0
INSERT html/body/script1
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
    <!--M_[-->
    <div
      class="a"
      level="1"
    >
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
      <!--M_]4 #text/1 5-->
    </div>
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#PlaceholderContent": _.c = {}
      }], _.a["#PlaceholderContent"] = _._[
        "__tests__/template.marko_4_content"
        ](_.c), _.b)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.e = [2, _.d = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.f = {}
      }], _.d["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.f), _.e), _ =&gt; (_.h = [1, _.g = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.i = {}
      }], _.g["#PlaceholderContent"] = _._[
        "__tests__/template.marko_10_content"
        ](_.i), _.h));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.k = [2, _.j = {
        "#BranchAccessor": "#text/1",
        "#PlaceholderContent": _.l = {}
      }], _.j["#PlaceholderContent"] = _._[
        "__tests__/template.marko_11_content"
        ](_.l), _.k));
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
INSERT html/body/div/div/div/div
INSERT html/body/div/div/div/#comment1
REMOVE t after html/body/script1
REMOVE #text after #comment
REMOVE #comment after html/body/div/div/#comment0
REMOVE #comment after html/body/div/div/#comment0
INSERT html/body/div/div/div
INSERT html/body/script2
```