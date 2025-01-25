# Write
```html
  <div a=0 b=1></div><!--M_*0 #div/0--><script>WALKER_RUNTIME("M")("_")</script>
```

# Render End
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
INSERT html/body/div
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```