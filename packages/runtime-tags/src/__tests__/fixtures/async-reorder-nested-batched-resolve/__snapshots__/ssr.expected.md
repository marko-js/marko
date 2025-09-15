# Write
```html
  <!--M_[--><!--M_!^b-->LOADING A1<!--M_!b--><!--M_]1 #text/0 2--><style M_>t{display:none}</style><t M_=b><!--M_#c--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"}},_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_4_content"](_.a),_.c)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=c><div class=a level=1><!--M_[--><div class=a level=2><!--M_[--><!--M_!^d-->LOADING B1<!--M_!d--><!--M_]6 #text/1 7--></div><!--M_]4 #text/1 5--></div></t><t M_=d><!--M_#e--></t><script>M._.r.push(_=>(_.f=[1,_.d={"ConditionalScope:#text/1":_.e={"#BranchAccessor":"#text/1"}},_.e],_.e["#PlaceholderContent"]=_._["__tests__/template.marko_5_content"](_.d),_.f),_=>(_.i=[_.g={"ConditionalScope:#text/1":_.h={"#BranchAccessor":"#text/1"}},_.h],_.h["#PlaceholderContent"]=_._["__tests__/template.marko_10_content"](_.g),_.i));M._.w()</script>
```

# Write
```html
  <t M_=e><div class=b level=3><!--M_[--><div class=b level=4></div><!--M_]9 #text/1 10--></div></t><script>M._.r.push(_=>(_.l=[1,_.j={"ConditionalScope:#text/1":_.k={"#BranchAccessor":"#text/1"}},_.k],_.k["#PlaceholderContent"]=_._["__tests__/template.marko_11_content"](_.j),_.l));M._.w()</script>
```

# Render End
```html
<!--M_[-->
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
      M._.r = [_ =&gt; (_.c = [0, _.a = {
        "ConditionalScope:#text/0": _.b = {
          "#BranchAccessor": "#text/0"
        }
      }, _.b], _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_4_content"
        ](_.a), _.c)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.f = [1, _.d = {
        "ConditionalScope:#text/1": _.e = {
          "#BranchAccessor": "#text/1"
        }
      }, _.e], _.e["#PlaceholderContent"] = _._[
        "__tests__/template.marko_5_content"
        ](_.d), _.f), _ =&gt; (_.i = [_.g = {
        "ConditionalScope:#text/1": _.h = {
          "#BranchAccessor": "#text/1"
        }
      }, _.h], _.h["#PlaceholderContent"] = _._[
        "__tests__/template.marko_10_content"
        ](_.g), _.i));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.l = [1, _.j = {
        "ConditionalScope:#text/1": _.k = {
          "#BranchAccessor": "#text/1"
        }
      }, _.k], _.k["#PlaceholderContent"] = _._[
        "__tests__/template.marko_11_content"
        ](_.j), _.l));
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
INSERT html/body/div/div
INSERT html/body/div/div/#comment0
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/div/div/#comment1
INSERT html/body/div/#comment1
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