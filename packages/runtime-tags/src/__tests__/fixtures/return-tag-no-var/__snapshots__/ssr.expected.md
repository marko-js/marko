# Write
```html
  <span>child</span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={1:{"#childScope/0":_.a={}},2:_.a}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <span>
      child
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{"#childScope/0":_.a={}},2:_.a}),0]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/script
INSERT html/body/script/#text
```