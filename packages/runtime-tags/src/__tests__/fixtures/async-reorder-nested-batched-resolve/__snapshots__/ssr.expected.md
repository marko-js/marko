# Write
```html
  <!--M_[2--><!--M_!^b-->LOADING A1<!--M_!b--><!--M_]1 #text/0--><style M_>t{display:none}</style><t M_=b><!--M_#c--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"},promiseA:new Promise((f,r)=>_.c={f,r})},_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_4_renderer"](_.a),_.d)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=c><!--M_[4--><div class=a level=1><!--M_[5--><!--M_[6--><div class=a level=2><!--M_[7--><!--M_!^d-->LOADING B1<!--M_!d--><!--M_]6 #text/1--></div><!--M_]5 #text/0--><!--M_]4 #text/1--></div><!--M_]2 #text/0--></t><t M_=d><!--M_#e--></t><script>M._.r.push(_=>(_.c.f("a"),_.j=[1,_.e={"ConditionalScope:#text/1":_.f={"#BranchAccessor":"#text/1"}},_.f,_.g={"ConditionalScope:#text/1":_.h={"#BranchAccessor":"#text/1"},promiseB:new Promise((f,r)=>_.i={f,r})},_.h],_.f["#PlaceholderContent"]=_._["__tests__/template.marko_5_renderer"](_.e),_.h["#PlaceholderContent"]=_._["__tests__/template.marko_10_renderer"](_.g),(_.b["ConditionalScope:#text/0"]=_.e),(_.f["ConditionalScope:#text/0"]=_.g),_.j));M._.w()</script>
```

# Write
```html
  <t M_=e><!--M_[9--><div class=b level=3><!--M_[10--><!--M_[11--><div class=b level=4></div><!--M_]10 #text/0--><!--M_]9 #text/1--></div><!--M_]7 #text/0--></t><script>M._.r.push(_=>(_.i.f("b"),_.m=[1,_.k={"ConditionalScope:#text/1":_.l={"#BranchAccessor":"#text/1"}},_.l,_.n={}],_.l["#PlaceholderContent"]=_._["__tests__/template.marko_11_renderer"](_.k),(_.h["ConditionalScope:#text/0"]=_.k),(_.l["ConditionalScope:#text/0"]=_.n),_.m));M._.w()</script>
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
    <!--M_[4-->
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
        <!--M_[9-->
        <div
          class="b"
          level="3"
        >
          <!--M_[10-->
          <!--M_[11-->
          <div
            class="b"
            level="4"
          />
          <!--M_]10 #text/0-->
          <!--M_]9 #text/1-->
        </div>
        <!--M_]7 #text/0-->
        <!--M_]6 #text/1-->
      </div>
      <!--M_]5 #text/0-->
      <!--M_]4 #text/1-->
    </div>
    <!--M_]2 #text/0-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"},promiseA:new Promise((f,r)=&gt;_.c={f,r})},_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_4_renderer"](_.a),_.d)];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.c.f("a"),_.j=[1,_.e={"ConditionalScope:#text/1":_.f={"#BranchAccessor":"#text/1"}},_.f,_.g={"ConditionalScope:#text/1":_.h={"#BranchAccessor":"#text/1"},promiseB:new Promise((f,r)=&gt;_.i={f,r})},_.h],_.f["#PlaceholderContent"]=_._["__tests__/template.marko_5_renderer"](_.e),_.h["#PlaceholderContent"]=_._["__tests__/template.marko_10_renderer"](_.g),(_.b["ConditionalScope:#text/0"]=_.e),(_.f["ConditionalScope:#text/0"]=_.g),_.j));M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.i.f("b"),_.m=[1,_.k={"ConditionalScope:#text/1":_.l={"#BranchAccessor":"#text/1"}},_.l,_.n={}],_.l["#PlaceholderContent"]=_._["__tests__/template.marko_11_renderer"](_.k),(_.h["ConditionalScope:#text/0"]=_.k),(_.l["ConditionalScope:#text/0"]=_.n),_.m));M._.w()
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
INSERT html/body/#comment2
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT #comment
INSERT html/body/script0
INSERT html/body/script0/#text
REMOVE html/head/style after html/body/#comment2
INSERT html/head/style
INSERT t
INSERT html/body/#comment0
INSERT html/body/div
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/div/div
INSERT html/body/div/div/#comment0
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/div/div/#comment3
INSERT html/body/div/#comment2
INSERT html/body/div/#comment3
INSERT html/body/#comment1
INSERT t
INSERT #comment
INSERT html/body/script1
INSERT html/body/script1/#text
REMOVE html/body/#comment0 before html/body/div
REMOVE html/body/div before html/body/#comment1
REMOVE html/body/#comment1 in t
REMOVE #comment in t
INSERT html/body/#comment0, html/body/div, html/body/#comment1
REMOVE t after html/body/script0
REMOVE #text before #comment
REMOVE #comment after #comment
REMOVE html/body/#comment0 before html/body/div
REMOVE html/body/div before html/body/#comment1
REMOVE html/body/#comment1 in t
REMOVE #comment before html/body/#comment2
INSERT html/body/#comment0, html/body/div, html/body/#comment1
REMOVE t after html/body/#comment2
INSERT t
INSERT html/body/div/div/#comment1
INSERT html/body/div/div/div
INSERT html/body/div/div/div/#comment0
INSERT html/body/div/div/div/#comment1
INSERT html/body/div/div/div/div
INSERT html/body/div/div/div/#comment2
INSERT html/body/div/div/div/#comment3
INSERT html/body/div/div/#comment2
INSERT html/body/script2
INSERT html/body/script2/#text
REMOVE html/body/div/div/#comment1 before html/body/div/div/div
REMOVE html/body/div/div/div before html/body/div/div/#comment2
REMOVE html/body/div/div/#comment2 in t
REMOVE #comment in t
INSERT html/body/div/div/#comment1, html/body/div/div/div, html/body/div/div/#comment2
REMOVE t after html/body/script1
REMOVE #text after #comment
REMOVE #comment after html/body/div/div/#comment0
REMOVE html/body/div/div/#comment1 before html/body/div/div/div
REMOVE html/body/div/div/div before html/body/div/div/#comment2
REMOVE html/body/div/div/#comment2 in t
REMOVE #comment after html/body/div/div/#comment0
INSERT html/body/div/div/#comment1, html/body/div/div/div, html/body/div/div/#comment2
REMOVE t after html/body/script0
```