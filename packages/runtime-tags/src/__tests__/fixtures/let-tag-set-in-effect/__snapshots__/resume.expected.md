# Render
```html
<html>
  <head />
  <body>
    <span>
      1
      <!--M_*1 #text/0-->
    </span>
    <span>
      0
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{x:1}}),1,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```


# Render ASYNC
```html
<html>
  <head />
  <body>
    <span>
      2
      <!--M_*1 #text/0-->
    </span>
    <span>
      1
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{x:1}}),1,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span0/#text "1" => "2"
UPDATE html/body/span1/#text "0" => "1"
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    <span>
      2
      <!--M_*1 #text/0-->
    </span>
    <span>
      2
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{x:1}}),1,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/span1/#text "1" => "2"
```