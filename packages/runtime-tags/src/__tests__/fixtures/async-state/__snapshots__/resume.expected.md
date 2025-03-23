# Render
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
    <!--M_[2-->
    <!--M_[4-->
    0
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},2:_.b},_.b._=_.a,_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),(_.d).add(_.b),_.c),1,"__tests__/template.marko_0_clickCount"];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.e={4:_.f={}},(_.b["ConditionalScope:#text/0"]=_.f),_.e));M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text1
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <!--M_[4-->
    0
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},2:_.b},_.b._=_.a,_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),(_.d).add(_.b),_.c),1,"__tests__/template.marko_0_clickCount"];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.e={4:_.f={}},(_.b["ConditionalScope:#text/0"]=_.f),_.e));M._.w()
    </script>
  </body>
</html>
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    LOADING...
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},2:_.b},_.b._=_.a,_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),(_.d).add(_.b),_.c),1,"__tests__/template.marko_0_clickCount"];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.e={4:_.f={}},(_.b["ConditionalScope:#text/0"]=_.f),_.e));M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0
REMOVE #document-fragment/#comment0 after html/body/#text0
REMOVE #document-fragment/#comment1 after html/body/#text0
REMOVE #document-fragment/#text after html/body/#text0
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <!--M_[4-->
    1
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},2:_.b},_.b._=_.a,_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),(_.d).add(_.b),_.c),1,"__tests__/template.marko_0_clickCount"];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.e={4:_.f={}},(_.b["ConditionalScope:#text/0"]=_.f),_.e));M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment1, html/body/#comment2, html/body/#text0
REMOVE #text after html/body/#text0
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <!--M_[4-->
    1
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},2:_.b},_.b._=_.a,_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),(_.d).add(_.b),_.c),1,"__tests__/template.marko_0_clickCount"];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.e={4:_.f={}},(_.b["ConditionalScope:#text/0"]=_.f),_.e));M._.w()
    </script>
  </body>
</html>
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    LOADING...
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},2:_.b},_.b._=_.a,_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),(_.d).add(_.b),_.c),1,"__tests__/template.marko_0_clickCount"];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.e={4:_.f={}},(_.b["ConditionalScope:#text/0"]=_.f),_.e));M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0
REMOVE #document-fragment/#comment0 after html/body/#text0
REMOVE #document-fragment/#comment1 after html/body/#text0
REMOVE #document-fragment/#text after html/body/#text0
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
    <button>
      inc
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <!--M_[4-->
    2
    <!--M_*4 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},2:_.b},_.b._=_.a,_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),(_.d).add(_.b),_.c),1,"__tests__/template.marko_0_clickCount"];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.e={4:_.f={}},(_.b["ConditionalScope:#text/0"]=_.f),_.e));M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment1, html/body/#comment2, html/body/#text0
REMOVE #text after html/body/#text0
```