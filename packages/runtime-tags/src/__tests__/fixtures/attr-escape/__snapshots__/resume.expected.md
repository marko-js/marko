# Render `{"foo":"c","bar":"d"}`

```html
<html>
  <head />
  <body>
    <div
      bar="a d b"
      class="c"
      foo="acb"
      nested="a c nested d b"
    />
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{input_foo:"c",input_bar:"d"}}),0]
    </script>
  </body>
</html>
```
