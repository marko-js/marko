# Write
```html
  <!--M_[2--><!--M_!^b-->LOADING A1<!--M_!b--><!--M_]1 #text/0--><style M_>t{display:none}</style><t M_=b><!--M_#c--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"},promiseA:new Promise((f,r)=>_.c={f,r})},_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_4_content"](_.a),_.d)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=c><div class=a level=1><!--M_[5--><!--M_[6--><div class=a level=2><!--M_[7--><!--M_!^d-->LOADING B1<!--M_!d--><!--M_]6 #text/1--></div><!--M_]5 #text/0--><!--M_]4 #text/1--></div></t><t M_=d><!--M_#e--></t><script>M._.r.push(_=>(_.g=[1,_.e={"ConditionalScope:#text/1":_.f={"#BranchAccessor":"#text/1"}},_.f],_.f["#PlaceholderContent"]=_._["__tests__/template.marko_5_content"](_.e),_.g),_=>(_.c.f("a"),_.h=[]),_=>(_.l=[_.i={"ConditionalScope:#text/1":_.j={"#BranchAccessor":"#text/1"},promiseB:new Promise((f,r)=>_.k={f,r})},_.j],_.j["#PlaceholderContent"]=_._["__tests__/template.marko_10_content"](_.i),(_.f["ConditionalScope:#text/0"]=_.i),_.l));M._.w()</script>
```

# Write
```html
  <t M_=e><div class=b level=3><!--M_[10--><div class=b level=4></div><!--M_]9 #text/1--></div></t><script>M._.r.push(_=>(_.o=[1,_.m={"ConditionalScope:#text/1":_.n={"#BranchAccessor":"#text/1"}},_.n],_.n["#PlaceholderContent"]=_._["__tests__/template.marko_11_content"](_.m),_.o),_=>(_.k.f("b"),_.p=[]));M._.w()</script>
```

# Render End
```html
<!--M_[2-->
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
      class="a"
      level="1"
    >
      <!--M_[5-->
      <!--M_[6-->
      <div
        class="a"
        level="2"
      >
        <!--M_[7-->
        <div
          class="b"
          level="3"
        >
          <!--M_[10-->
          <div
            class="b"
            level="4"
          />
          <!--M_]9 #text/1-->
        </div>
        <!--M_]6 #text/1-->
      </div>
      <!--M_]5 #text/0-->
      <!--M_]4 #text/1-->
    </div>
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
        "ConditionalScope:#text/0": _.b = {
          "#BranchAccessor": "#text/0"
        },
        promiseA: new Promise((f, r) =&gt; _.c = {
          f,
          r
        })
      }, _.b], _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_4_content"
        ](_.a), _.d)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.g = [1, _.e = {
        "ConditionalScope:#text/1": _.f = {
          "#BranchAccessor": "#text/1"
        }
      }, _.f], _.f["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.e), _.g), _ =&gt; (_.c.f("a"), _.h = []), _ =&gt; (_.l = [_.i = {
        "ConditionalScope:#text/1": _.j = {
          "#BranchAccessor": "#text/1"
        },
        promiseB: new Promise((f, r) =&gt; _.k = {
          f,
          r
        })
      }, _.j], _.j["#PlaceholderContent"] = _._[
        "__tests__/template.marko_10_content"
        ](_.i), (_.f["ConditionalScope:#text/0"] = _.i), _.l));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.o = [1, _.m = {
        "ConditionalScope:#text/1": _.n = {
          "#BranchAccessor": "#text/1"
        }
      }, _.n], _.n["#PlaceholderContent"] = _._[
        "__tests__/template.marko_11_content"
        ](_.m), _.o), _ =&gt; (_.k.f("b"), _.p = []));
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT #text
INSERT #comment
INSERT html/body/#comment
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT #comment
INSERT html/body/script0
INSERT html/body/script0/#text
REMOVE html/head/style after html/body/#comment
INSERT html/head/style
INSERT t
INSERT html/body/div
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/div/div
INSERT html/body/div/div/#comment0
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/div/div/#comment1
INSERT html/body/div/#comment2
INSERT html/body/div/#comment3
INSERT t
INSERT #comment
INSERT html/body/script1
INSERT html/body/script1/#text
REMOVE html/body/div in t
REMOVE #comment in t
INSERT html/body/div
REMOVE t after html/body/script0
REMOVE #text before #comment
REMOVE #comment after #comment
REMOVE html/body/div in t
REMOVE #comment before html/body/#comment
INSERT html/body/div
REMOVE t after html/body/#comment
INSERT t
INSERT html/body/div/div/div
INSERT html/body/div/div/div/#comment0
INSERT html/body/div/div/div/div
INSERT html/body/div/div/div/#comment1
INSERT html/body/script2
INSERT html/body/script2/#text
REMOVE html/body/div/div/div in t
REMOVE #comment in t
INSERT html/body/div/div/div
REMOVE t after html/body/script1
REMOVE #text after #comment
REMOVE #comment after html/body/div/div/#comment0
REMOVE html/body/div/div/div in t
REMOVE #comment after html/body/div/div/#comment0
INSERT html/body/div/div/div
REMOVE t after html/body/script0
```