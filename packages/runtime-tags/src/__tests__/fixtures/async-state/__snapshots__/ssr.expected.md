# Write
```html
  <button>inc</button><!--M_*1 #button/0--><!--M_!^b-->LOADING...<!--M_!b--><style M_>t{display:none}</style><t M_=b><!--M_#c--></t><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"#text/1!":_.b={"#text/1*":"#text/1","clickCount(":0},clickCount:0,"clickCount!":_.d=new Set},2:_.b},_.b["#text/1%"]=_._["__tests__/template.marko_2_renderer"](_.a),_.b._=_.a,(_.d).add(_.b),_.c),1,"__tests__/template.marko_0_clickCount"];REORDER_RUNTIME(M._);M._.w()</script>
```

# Write
```html
  <t M_=c>0<!--M_*4 #text/0--></t><script>M._.w()</script>
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    0
    <!--M_*4 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"#text/1!":_.b={"#text/1*":"#text/1","clickCount(":0},clickCount:0,"clickCount!":_.d=new Set},2:_.b},_.b["#text/1%"]=_._["__tests__/template.marko_2_renderer"](_.a),_.b._=_.a,(_.d).add(_.b),_.c),1,"__tests__/template.marko_0_clickCount"];REORDER_RUNTIME(M._);M._.w()
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment0
INSERT #comment
INSERT #text
INSERT #comment
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT #comment
INSERT html/body/script0
INSERT html/body/script0/#text
REMOVE html/head/style after #comment
INSERT html/head/style
INSERT t
INSERT html/body/#text
INSERT html/body/#comment1
INSERT html/body/script1
INSERT html/body/script1/#text
REMOVE html/body/#text before html/body/#comment1
REMOVE html/body/#comment1 in t
REMOVE #comment in t
INSERT html/body/#text, html/body/#comment1
REMOVE t after html/body/script0
REMOVE #text after #comment
REMOVE #comment after #comment
REMOVE html/body/#text before html/body/#comment1
REMOVE html/body/#comment1 in t
REMOVE #comment after html/body/#comment0
INSERT html/body/#text, html/body/#comment1
REMOVE t after html/body/#comment1
```