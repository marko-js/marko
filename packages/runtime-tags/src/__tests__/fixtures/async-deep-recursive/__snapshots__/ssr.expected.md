# Write
```html
  <div data-level=4><!--M_[--><div data-level=3><!--M_[--><!--M_!^b-->LOADING...<!--M_!b--><!--M_]7 #text/1 8--></div><!--M_]3 #text/1 4--></div><style M_>t{display:none}</style><t M_=b><!--M_#c--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,1,{input_level:4},_.a={"ConditionalScope:#text/1":_.b={"#BranchAccessor":"#text/1"}},_.b],_.b["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_content"](_.a),_.c),_=>(_.f=[1,{input_level:3},_.d={"ConditionalScope:#text/1":_.e={"#BranchAccessor":"#text/1"}},_.e],_.e["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_content"](_.d),_.f)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=c><div data-level=2><!--M_[--><div data-level=1><!--M_[--><!--M_!^d-->LOADING...<!--M_!d--><!--M_]16 #text/1 17--></div><!--M_]12 #text/1 13--></div></t><t M_=d><!--M_#e--></t><script>M._.r.push(_=>(_.i=[2,{input_level:2},_.g={"ConditionalScope:#text/1":_.h={"#BranchAccessor":"#text/1"}},_.h],_.h["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_content"](_.g),_.i),_=>(_.l=[1,{input_level:1},_.j={"ConditionalScope:#text/1":_.k={"#BranchAccessor":"#text/1"}},_.k],_.k["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_content"](_.j),_.l));M._.w()</script>
```

# Write
```html
  <t M_=e></t><script>M._.r.push(_=>(_.m=[2,{input_level:0}]));M._.w()</script>
```

# Render End
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
    <div
      data-level="4"
    >
      <!--M_[-->
      <div
        data-level="3"
      >
        <!--M_[-->
        <div
          data-level="2"
        >
          <!--M_[-->
          <div
            data-level="1"
          >
            <!--M_[-->
            <!--M_]16 #text/1 17-->
          </div>
          <!--M_]12 #text/1 13-->
        </div>
        <!--M_]7 #text/1 8-->
      </div>
      <!--M_]3 #text/1 4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 1,
      {
        input_level: 4
      }, _.a = {
        "ConditionalScope:#text/1": _.b = {
          "#BranchAccessor": "#text/1"
        }
      }, _.b], _.b["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.a), _.c), _ =&gt; (_.f = [1,
      {
        input_level: 3
      }, _.d = {
        "ConditionalScope:#text/1": _.e = {
          "#BranchAccessor": "#text/1"
        }
      }, _.e], _.e["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.d), _.f)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.i = [2,
      {
        input_level: 2
      }, _.g = {
        "ConditionalScope:#text/1": _.h = {
          "#BranchAccessor": "#text/1"
        }
      }, _.h], _.h["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.g), _.i), _ =&gt; (_.l = [1,
      {
        input_level: 1
      }, _.j = {
        "ConditionalScope:#text/1": _.k = {
          "#BranchAccessor": "#text/1"
        }
      }, _.k], _.k["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.j), _.l));
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.m = [2,
      {
        input_level: 0
      }]));
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
INSERT html/body/div
INSERT html/body/div/#comment0
INSERT html/body/div/div
INSERT html/body/div/div/#comment0
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/div/div/#comment1
INSERT html/body/div/#comment1
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT #comment
INSERT html/body/script0
INSERT html/body/script0/#text
REMOVE html/head/style after html/body/div
INSERT html/head/style
INSERT t
INSERT html/body/div/div/div
INSERT html/body/div/div/div/#comment0
INSERT html/body/div/div/div/div
INSERT html/body/div/div/div/div/#comment0
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/div/div/div/div/#comment1
INSERT html/body/div/div/div/#comment1
INSERT t
INSERT #comment
INSERT html/body/script1
INSERT html/body/script1/#text
REMOVE html/body/div/div/div in t
REMOVE #comment in t
INSERT html/body/div/div/div
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/div/div/#comment0
REMOVE html/body/div/div/div in t
REMOVE #comment after html/body/div/div/#comment0
INSERT html/body/div/div/div
REMOVE t after html/body/div
INSERT t
INSERT html/body/script2
INSERT html/body/script2/#text
REMOVE #comment in t
REMOVE t after html/body/script1
REMOVE #text after #comment
REMOVE #comment after html/body/div/div/div/div/#comment0
REMOVE #comment after html/body/div/div/div/div/#comment0
REMOVE t after html/body/script0
```