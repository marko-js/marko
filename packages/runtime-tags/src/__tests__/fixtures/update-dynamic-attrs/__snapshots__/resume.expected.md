# Render `{"value":{"a":1,"b":2}}`

```html
<html>
  <head />
  <body>
    <div
      a="1"
      b="2"
    />
    <!--M_*1 #div/0-->
    <div
      a="1"
      b="2"
    />
    <!--M_*1 #div/1-->
    <div
      a="0"
      b="2"
    />
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{"input_value/5":{a:1,b:2},"a/6":0}}),1,"__tests__/template.marko_0_input_value_a",1,"__tests__/template.marko_0_input_value",0];M._.w()
    </script>
  </body>
</html>
```
