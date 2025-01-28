# Write
```html
  <div><span>1<!--M_*1 #text/0--></span></div><script>WALKER_RUNTIME("M")("_")</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <span>
        1
        <!--M_*1 #text/0-->
      </span>
    </div>
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
INSERT html/body/div/span
INSERT html/body/div/span/#text
INSERT html/body/div/span/#comment
INSERT html/body/script
INSERT html/body/script/#text
```