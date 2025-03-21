# Render `{"value":"Hello"}`

```html
<html>
  <head />
  <body>
    <div>
      <span>
        Hello
        <!--M_*2 #text/0-->
      </span>
      <!--M_|1 #text/0 2-->
      <span />
      <span />
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={value:"Hello","ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.b={}},2:_.b},_.b._=_.a,_.c)]
    </script>
  </body>
</html>
```
