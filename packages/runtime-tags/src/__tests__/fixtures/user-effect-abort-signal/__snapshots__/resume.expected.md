# Render `{"value":0}`

```html
<html>
  <head />
  <body>
    <div>
      0
      <!--M_*1 #text/0-->
       
      <!---->
      0
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{input_value:0}}),1,"__tests__/template.marko_0_input_value",0];M._.w()
    </script>
  </body>
</html>
```


# Render ASYNC
```html
<html>
  <head />
  <body>
    <div>
      1
      <!--M_*1 #text/0-->
       
      <!---->
      0
      <!--M_*1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{input_value:0}}),1,"__tests__/template.marko_0_input_value",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text0 "0" => "1"
```