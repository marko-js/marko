# Render
```html
<html>
  <head />
  <body>
    <div>
      undefined
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {}], _.a.setText = _._[
          "__tests__/template.marko_0/setText"
          ](_.a), _.b),
        "__tests__/template.marko_0_setText 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
```