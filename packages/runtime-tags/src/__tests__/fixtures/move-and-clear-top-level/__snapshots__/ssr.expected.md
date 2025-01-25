# Write
```html
  a<!--M_*1 #text/0-->b<!--M_*2 #text/0-->c<!--M_*3 #text/0--><!--M_|0 #text/0 3 2 1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e={0:{"#text/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    a
    <!--M_*1 #text/0-->
    b
    <!--M_*2 #text/0-->
    c
    <!--M_*3 #text/0-->
    <!--M_|0 #text/0 3 2 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:{"#text/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d}),0]
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
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/script
INSERT html/body/script/#text
```