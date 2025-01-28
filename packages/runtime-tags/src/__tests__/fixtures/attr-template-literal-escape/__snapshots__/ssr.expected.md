# Write
```html
  <div foo="Hello Marko"></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_")</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      foo="Hello Marko"
    />
    <!--M_*1 #div/0-->
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