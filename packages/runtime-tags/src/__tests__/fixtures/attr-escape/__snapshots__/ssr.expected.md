# Write
```html
  <div class=c foo=acb bar="a d b" nested="a c nested d b"></div><!--M_*0 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={0:{input_foo:"c",input_bar:"d"}}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      bar="a d b"
      class="c"
      foo="acb"
      nested="a c nested d b"
    />
    <!--M_*0 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{input_foo:"c",input_bar:"d"}}),0]
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
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```