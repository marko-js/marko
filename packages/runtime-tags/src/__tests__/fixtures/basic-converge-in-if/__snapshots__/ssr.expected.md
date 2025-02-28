# Write
```html
  0<!--M_*2 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"a/1":0,"b/2":0,"#text/0!":_.b={}},2:_.b},_.b._=_.a,_.c),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    0
    <!--M_*2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"a/1":0,"b/2":0,"#text/0!":_.b={}},2:_.b},_.b._=_.a,_.c),0]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```