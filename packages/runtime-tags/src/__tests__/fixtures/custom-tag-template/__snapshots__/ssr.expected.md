# Write
```html
  Hello <!>Frank<!--M_*1 #text/0-->!<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={0:{"#childScope/0":_.a={}},1:_.a}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    Hello 
    <!---->
    Frank
    <!--M_*1 #text/0-->
    !
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{"#childScope/0":_.a={}},1:_.a}),0]
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
INSERT html/body/script
INSERT html/body/script/#text
```