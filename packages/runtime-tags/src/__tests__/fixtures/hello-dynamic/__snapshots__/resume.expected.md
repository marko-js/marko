# Render `{"name":"Marko"}`

```html
<html>
  <head />
  <body>
    Hello 
    <!---->
    Marko
    <!--M_*1 #text/0-->
    ! Hello 
    <!---->
    Marko
    <!--M_*1 #text/1-->
    ! Hello 
    <!---->
    <!--M_*1 #text/2-->
    !
    <script>
      WALKER_RUNTIME("M")("_")
    </script>
  </body>
</html>
```
