# Write
```html
  <div></div><div></div><div></div>b<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d={0:{"#childScope/0":_.a={},"#childScope/1":_.b={},"#childScope/2":_.c={}},1:_.a,2:_.b,3:_.c}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <div />
    <div />
    b
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:{"#childScope/0":_.a={},"#childScope/1":_.b={},"#childScope/2":_.c={}},1:_.a,2:_.b,3:_.c}),0]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div0
INSERT html/body/div1
INSERT html/body/div2
INSERT html/body/#text
INSERT html/body/script
INSERT html/body/script/#text
```