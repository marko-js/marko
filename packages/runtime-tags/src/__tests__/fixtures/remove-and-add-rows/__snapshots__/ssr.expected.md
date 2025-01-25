# Write
```html
  <div>a<!--M_*1 #text/0-->b<!--M_*2 #text/0-->c<!--M_*3 #text/0--><!--M_|0 #div/0 3 2 1--></div><!--M_*0 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e={0:{"#div/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      a
      <!--M_*1 #text/0-->
      b
      <!--M_*2 #text/0-->
      c
      <!--M_*3 #text/0-->
      <!--M_|0 #div/0 3 2 1-->
    </div>
    <!--M_*0 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:{"#div/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d}),0]
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
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/div/#text2
INSERT html/body/div/#comment2
INSERT html/body/div/#comment3
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```