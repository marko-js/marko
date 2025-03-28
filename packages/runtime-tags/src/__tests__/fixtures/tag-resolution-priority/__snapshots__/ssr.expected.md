# Write
```html
  <div></div><span></span><div></div><!--M_|1 #text/1 3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,2,{}])]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <span />
    <div />
    <!--M_|1 #text/1 3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,2,{}])]
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
INSERT html/body/span
INSERT html/body/div1
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```