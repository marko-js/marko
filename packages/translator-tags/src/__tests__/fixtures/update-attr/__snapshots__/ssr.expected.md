# Write
  <div a=0 b=1></div><!--M_*0 #div/0--><script>WALKER_RUNTIME("M")("_");M._.d=1</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div
      a="0"
      b="1"
    />
    <!--M_*0 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.d=1
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