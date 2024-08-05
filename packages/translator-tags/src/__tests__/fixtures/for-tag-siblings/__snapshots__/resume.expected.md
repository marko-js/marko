# Render undefined
```html
<html>
  <head />
  <body>
    <div>
      <div>
        1
        <!--M_*1 #text/0-->
      </div>
      <div>
        2
        <!--M_*2 #text/0-->
      </div>
      <div>
        3
        <!--M_*3 #text/0-->
      </div>
    </div>
    <div>
      <div>
        1
        <!--M_*4 #text/0-->
      </div>
      <div>
        2
        <!--M_*5 #text/0-->
      </div>
      <div>
        3
        <!--M_*6 #text/0-->
      </div>
      <div />
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.d=1
    </script>
  </body>
</html>
```

# Mutations
```

```