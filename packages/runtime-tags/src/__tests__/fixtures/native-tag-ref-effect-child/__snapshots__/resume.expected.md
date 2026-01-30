# Render
```html
<html>
  <head />
  <body>
    <div>
      hello
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {}, _.a = {}], _.a.el = _._[
          "__tests__/template.marko_0_#div"
          ](_.c), _.b),
        "__tests__/tags/hello-setter.marko_0_el 2"
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