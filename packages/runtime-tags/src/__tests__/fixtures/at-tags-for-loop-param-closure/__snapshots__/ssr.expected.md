# Write
```html
  1<!--M_*4 #text/0-->2<!--M_*6 #text/0-->3<!--M_*8 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,3,{item:1},1,{item:2},1,{item:3}])]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    1
    <!--M_*4 #text/0-->
    2
    <!--M_*6 #text/0-->
    3
    <!--M_*8 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 3,
      {
        item: 1
      }, 1,
      {
        item: 2
      }, 1,
      {
        item: 3
      }])]
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
INSERT html/body/script
INSERT html/body/script/#text
```