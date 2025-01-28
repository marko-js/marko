# Render `{"value":1}`

```html
<html>
  <head />
  <body>
    <div
      a="0"
      b="1"
    />
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_")
    </script>
  </body>
</html>
```
