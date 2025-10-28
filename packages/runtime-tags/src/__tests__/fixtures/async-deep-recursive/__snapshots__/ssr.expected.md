# Write
```html
  <div data-level=4><!--M_[--><div data-level=3><!--M_[--><!--M_!^b-->LOADING...<!--M_!b--><!--M_]7 #text/1 8--></div><!--M_]3 #text/1 4--></div><style M_>t{display:none}</style><t M_=b><!--M_#c--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,2,_.c={"ConditionalScope:#text/1":_.a={"#BranchAccessor":"#text/1"}},_.a],_.a["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_content"](_.c),_.b),_=>(_.e=[2,_.f={"ConditionalScope:#text/1":_.d={"#BranchAccessor":"#text/1"}},_.d],_.d["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_content"](_.f),_.e)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=c><div data-level=2><!--M_[--><div data-level=1><!--M_[--><!--M_!^d-->LOADING...<!--M_!d--><!--M_]16 #text/1 17--></div><!--M_]12 #text/1 13--></div></t><t M_=d><!--M_#e--></t><script>M._.r.push(_=>(_.h=[3,_.i={"ConditionalScope:#text/1":_.g={"#BranchAccessor":"#text/1"}},_.g],_.g["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_content"](_.i),_.h),_=>(_.k=[2,_.l={"ConditionalScope:#text/1":_.j={"#BranchAccessor":"#text/1"}},_.j],_.j["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_content"](_.l),_.k));M._.w()</script>
```

# Write
```html
  <t M_=e></t><script>M._.w()</script>
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
      M._.r = [_ =&gt; (_.b = [0, 2, _.c = {
        "ConditionalScope:#text/1": _.a = {
          "#BranchAccessor": "#text/1"
        }
      }, _.a], _.a["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.c), _.b), _ =&gt; (_.e = [2, _.f = {
        "ConditionalScope:#text/1": _.d = {
          "#BranchAccessor": "#text/1"
        }
      }, _.d], _.d["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.f), _.e)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    <script>
      M._.r.push(_ =&gt; (_.h = [3, _.i = {
        "ConditionalScope:#text/1": _.g = {
          "#BranchAccessor": "#text/1"
        }
      }, _.g], _.g["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.i), _.h), _ =&gt; (_.k = [2, _.l = {
        "ConditionalScope:#text/1": _.j = {
          "#BranchAccessor": "#text/1"
        }
      }, _.j], _.j["#PlaceholderContent"] = _._[
        "__tests__/tags/recurse.marko_4_content"
        ](_.l), _.k));
      M._.w()
    </script>
    <script>
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
REMOVE t after html/body/div
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
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after html/body/div/div/#comment0
REMOVE #comment after html/body/div/div/#comment0
INSERT html/body/div/div/div
REMOVE t after html/body/script0
INSERT t
INSERT html/body/script2
INSERT html/body/script2/#text
REMOVE t after html/body/script1
REMOVE #text after #comment
REMOVE #comment after html/body/div/div/div/div/#comment0
REMOVE #comment after html/body/div/div/div/div/#comment0
```