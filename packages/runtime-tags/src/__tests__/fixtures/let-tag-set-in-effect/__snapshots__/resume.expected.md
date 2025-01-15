# Render {}
```html
<html>
  <head />
  <body>
    <span>
      1
      <!--M_*0 #text/0-->
    </span>
    <span>
      0
      <!--M_*0 #text/1-->
    </span>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render "ASYNC"
```html
<html>
  <head />
  <body>
    <span>
      2
      <!--M_*0 #text/0-->
    </span>
    <span>
      1
      <!--M_*0 #text/1-->
    </span>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span1/#text0: "0" => "1"
#document/html0/body1/span0/#text0: "1" => "2"
```


# Render "ASYNC"
```html
<html>
  <head />
  <body>
    <span>
      2
      <!--M_*0 #text/0-->
    </span>
    <span>
      2
      <!--M_*0 #text/1-->
    </span>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{x:1}}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span1/#text0: "1" => "2"
```