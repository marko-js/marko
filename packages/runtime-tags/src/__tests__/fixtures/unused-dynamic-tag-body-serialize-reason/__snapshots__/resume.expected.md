# Render
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[-->
      helloworld
      <!--M_]3 #div/0 4-->
    </div>
    <!--M_'2 #text/0 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
        x: 1,
        "#childScope/0": _.a = {
          "ConditionalRenderer:#text/0": "div",
          as: "div"
        }
      }, _.a,
      {
        "EventAttributes:#div/0": _.b = {},
        "ConditionalRenderer:#div/0": "__tests__/template.marko_3_content",
        "#Renderer": "div"
      }], _.b.click = _._[
        "__tests__/template.marko_0/onClick"
        ](_.d), _.a.content = _._[
        "__tests__/template.marko_3_content"
        ](_.d), _.c), "_dynamicTagScript 3"];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text1
```