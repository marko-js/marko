# Write
```html
  a
```

# Write
```html
  <script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,_.c={}],(_.b={}["ConditionalScope:#text/1"]=_.c),_.a)];M._.w()</script>
```

# Write
```html
  <!--M_[3-->b<!--M_]1 #text/0-->c<!--M_[2-->d<!--M_]1 #text/1-->e<script>M._.r.push(_=>(_.d=[_.e={}],(_.b["ConditionalScope:#text/0"]=_.e),_.d));M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    a
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,1,_.c={}],(_.b={}["ConditionalScope:#text/1"]=_.c),_.a)];M._.w()
    </script>
    <!--M_[3-->
    b
    <!--M_]1 #text/0-->
    c
    <!--M_[2-->
    d
    <!--M_]1 #text/1-->
    e
    <script>
      M._.r.push(_=&gt;(_.d=[_.e={}],(_.b["ConditionalScope:#text/0"]=_.e),_.d));M._.w()
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
INSERT html/body/script0
INSERT html/body/script0/#text
INSERT html/body/#comment0
INSERT html/body/#text1
INSERT html/body/#comment1
INSERT html/body/#text2
INSERT html/body/#comment2
INSERT html/body/#text3
INSERT html/body/#comment3
INSERT html/body/#text4
INSERT html/body/script1
INSERT html/body/script1/#text
```