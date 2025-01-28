# Write
```html
  Static <!>Dynamic 1<!--M_*1 #text/0--><script>WALKER_RUNTIME("M")("_")</script>
```

# Render End
```html
<html>
  <head />
  <body>
    Static 
    <!---->
    Dynamic 1
    <!--M_*1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_")
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
INSERT html/body/script
INSERT html/body/script/#text
```