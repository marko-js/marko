# Write
```html
  <div></div><span></span><div></div><!--M_|1 #text/1 3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={1:{"#text/1!":_.a={},"#text/1(":"div"},3:_.a})]</script>
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{"#text/1!":_.a={},"#text/1(":"div"},3:_.a})]
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