# Write
```html
  <!>3<!--M_*2 #text/0--> <!>y<!--M_*3 #text/0--> <script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={1:{"#childScope/1":_.a={}},3:_.a})]</script>
```

# Render End
```html
<!---->
<html>
  <head />
  <body>
    3
    <!--M_*2 #text/0-->
     
    <!---->
    y
    <!--M_*3 #text/0-->
     
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{"#childScope/1":_.a={}},3:_.a})]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT html/body/#text1
INSERT html/body/#comment1
INSERT html/body/#text2
INSERT html/body/#comment2
INSERT html/body/#text3
INSERT html/body/script
INSERT html/body/script/#text
```