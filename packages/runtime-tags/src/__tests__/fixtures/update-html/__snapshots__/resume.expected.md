# Render `{"value":"Hello <strong>World</strong>"}`

```html
<html>
  <head />
  <body>
    <em>
      Testing
    </em>
     
    <!---->
    Hello 
    <strong>
      World
    </strong>
    <!--M_*1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_")
    </script>
  </body>
</html>
```
