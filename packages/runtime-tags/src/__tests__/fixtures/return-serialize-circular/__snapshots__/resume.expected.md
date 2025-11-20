# Render
```html
<html>
  <head />
  <body>
    <div>
      0
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "#scopeOffset/1": 3,
          setCount: _.b = {},
          "#childScope/0": _.b
        }, _.b], _.b.input_valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.a.setCount = _.b.setter = _._[
          "__tests__/tags/setter.marko_0/setter"
          ](_.b), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_setCount/var"
          ](_.a), _.c),
        "__tests__/template.marko_0_setCount 1"
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
      1
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "#scopeOffset/1": 3,
          setCount: _.b = {},
          "#childScope/0": _.b
        }, _.b], _.b.input_valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.a), _.a.setCount = _.b.setter = _._[
          "__tests__/tags/setter.marko_0/setter"
          ](_.b), _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_setCount/var"
          ](_.a), _.c),
        "__tests__/template.marko_0_setCount 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text "0" => "1"
```