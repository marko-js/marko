# Write
```html
  a<!--M_[2-->b<!--M_]1 #text/0-->c<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"}},_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c)]</script>
```

# Write
```html
  <!--M_[3-->d<!--M_]1 #text/1-->e<script>M._.r.push(_=>(_.d=[_.e={}],(_.a["ConditionalScope:#text/1"]=_.e),_.d))</script>
```

# Render End
```html
<html>
  <head />
  <body>
    a
    <!--M_[2-->
    b
    <!--M_]1 #text/0-->
    c
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"}},_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_2_renderer"](_.a),_.c)]
    </script>
    <!--M_[3-->
    d
    <!--M_]1 #text/1-->
    e
    <script>
      M._.r.push(_=&gt;(_.d=[_.e={}],(_.a["ConditionalScope:#text/1"]=_.e),_.d))
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
INSERT html/body/#text1
INSERT html/body/#comment1
INSERT html/body/#text2
INSERT html/body/script0
INSERT html/body/script0/#text
INSERT html/body/#comment2
INSERT html/body/#text3
INSERT html/body/#comment3
INSERT html/body/#text4
INSERT html/body/script1
INSERT html/body/script1/#text
```