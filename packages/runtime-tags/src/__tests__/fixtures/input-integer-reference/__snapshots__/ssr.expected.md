# Write
```html
  <!>1,2<!--M_*1 #text/0--> <!>1<!--M_*1 #text/1--><script>WALKER_RUNTIME("M")("_")</script>
```

# Render End
```html
<!---->
<html>
  <head />
  <body>
    1,2
    <!--M_*1 #text/0-->
     
    <!---->
    1
    <!--M_*1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_")
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT html/body/#text1
INSERT html/body/#comment1
INSERT html/body/#text2
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```