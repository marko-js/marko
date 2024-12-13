# Write
  <div class=c foo=acb bar="a d b" nested="a c nested d b"></div><!--M_*0 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={0:{input_foo:"c",input_bar:"d"}}),0]</script>


# Render "End"
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
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/div0
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/script2
inserted #document/html0/body1/script2/#text0
```