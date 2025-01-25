# Write
```html
  BeforeERROR!<!--M_*2 #text/0-->After<script>WALKER_RUNTIME("M")("_")</script>
```

# Render End
```html
<html>
  <head />
  <body>
    BeforeERROR!
    <!--M_*2 #text/0-->
    After
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
INSERT html/body/#comment
INSERT html/body/#text1
INSERT html/body/script
INSERT html/body/script/#text
```