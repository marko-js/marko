# Render
```html
<html>
  <head />
  <body>
    <div>
      0: 1
    </div>
    <div>
      1: 2
    </div>
    <div>
      2: 3
    </div>
    <div>
      0: 
      <!---->
      1
      <!--M_*5 #text/1-->
    </div>
    <div>
      1: 
      <!---->
      2
      <!--M_*6 #text/1-->
    </div>
    <div>
      2: 
      <!---->
      3
      <!--M_*7 #text/1-->
    </div>
    <!--M_|1 #text/1 7 6 5-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {}, 3,
        {},
        {},
        {}]),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
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
      0: 1
    </div>
    <div>
      1: 2
    </div>
    <div>
      2: 3
    </div>
    <div>
      0: 
      <!---->
      1
      <!--M_*5 #text/1-->
    </div>
    <div>
      1: 
      <!---->
      2
      <!--M_*6 #text/1-->
    </div>
    <!--M_|1 #text/1 7 6 5-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {}, 3,
        {},
        {},
        {}]),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE div after html/body/div4
```