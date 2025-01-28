# Write
```html
  <div>sM_1<!--M_*1 #text/0--></div>sM_2<!--M_*1 #text/1--><script>WALKER_RUNTIME("M")("_")</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      sM_1
      <!--M_*1 #text/0-->
    </div>
    sM_2
    <!--M_*1 #text/1-->
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
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```