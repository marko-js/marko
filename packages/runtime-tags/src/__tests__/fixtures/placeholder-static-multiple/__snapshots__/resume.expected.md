# Render
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[-->
      <!--M_)1 #div/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {}]),
        "__tests__/template.marko_0",
        1
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
      <!--M_[-->
      <!--M_)1 #div/0-->
      ABCD
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {}]),
        "__tests__/template.marko_0",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text0, html/body/div/#text1, html/body/div/#text2
UPDATE html/body/div/#text1 "" => "C"
```