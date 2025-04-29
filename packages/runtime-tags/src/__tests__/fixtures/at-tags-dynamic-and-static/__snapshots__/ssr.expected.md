# Write
```html
  a<!--M_*4 #text/0-->:<!>1<!--M_*4 #text/1-->b<!--M_*6 #text/0-->:<!>2<!--M_*6 #text/1-->other<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,3,{a:"a",v:1},1,{a:"b",v:2}])]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    a
    <!--M_*4 #text/0-->
    :
    <!---->
    1
    <!--M_*4 #text/1-->
    b
    <!--M_*6 #text/0-->
    :
    <!---->
    2
    <!--M_*6 #text/1-->
    other
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,3,{a:"a",v:1},1,{a:"b",v:2}])]
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
INSERT html/body/#text3
INSERT html/body/#comment3
INSERT html/body/#text4
INSERT html/body/#comment4
INSERT html/body/#text5
INSERT html/body/#comment5
INSERT html/body/#text6
INSERT html/body/script
INSERT html/body/script/#text
```