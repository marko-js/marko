# Render `{"name":"Marko"}`

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
