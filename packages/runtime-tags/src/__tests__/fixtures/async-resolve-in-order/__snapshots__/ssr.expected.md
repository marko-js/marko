# Write
```html
  a
```

# Write
```html
  <!--M_[2-->b<!--M_]1 #text/0-->c<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={2:_.c={}},(_.b={}["#text/0!"]=_.c),_.a)]</script>
```

# Write
```html
  <!--M_[3-->d<!--M_]1 #text/1-->e<script>M._.r.push(_=>(_.d={3:_.e={}},(_.b["#text/1!"]=_.e),_.d))</script>
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={2:_.c={}},(_.b={}["#text/0!"]=_.c),_.a)]
    </script>
    <!--M_[3-->
    d
    <!--M_]1 #text/1-->
    e
    <script>
      M._.r.push(_=&gt;(_.d={3:_.e={}},(_.b["#text/1!"]=_.e),_.d))
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