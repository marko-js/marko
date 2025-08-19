# Write
```html
  a<!--M_[2--><!--M_!^b-->_A_<!--M_!b--><!--M_]1 #text/0-->e<style M_>t{display:none}</style><t M_=b>b<!--M_#c-->d</t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"}},_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c)];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  fg
```

# Write
```html
  <t M_=c>c</t><script>M._.w()</script>
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
    a
    <!--M_[2-->
    bcd
    <!--M_]1 #text/0-->
    e
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
        "ConditionalScope:#text/0": _.b = {
          "#BranchAccessor": "#text/0"
        }
      }, _.b], _.b["#PlaceholderContent"] = _._[
        "__tests__/template.marko_2_renderer"
        ](_.a), _.c)];
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
    fg
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
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/body/#comment1
INSERT html/body/#text4
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/#text1
INSERT #comment
INSERT html/body/#text3
INSERT html/body/script0
INSERT html/body/script0/#text
REMOVE html/head/style after html/body/#text4
INSERT html/head/style
INSERT html/body/#text5
INSERT t
INSERT html/body/#text2
INSERT html/body/script1
INSERT html/body/script1/#text
REMOVE html/body/#text2 in t
REMOVE #comment after html/body/#text1
INSERT html/body/#text2
REMOVE t after html/body/#text5
REMOVE #text after #comment
REMOVE #comment after html/body/#comment0
REMOVE html/body/#text1 before html/body/#text2
REMOVE html/body/#text2 before html/body/#text3
REMOVE html/body/#text3 in t
REMOVE #comment after html/body/#comment0
INSERT html/body/#text1, html/body/#text2, html/body/#text3
REMOVE t after html/body/#text4
```