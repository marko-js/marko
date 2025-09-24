# Render
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/0-->
    <!--M_[-->
    ERROR!
    <!--M_]1 #text/1 2-->
    <div>
      This is good
    </div>
    <!--M_*1 #div/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ConditionalScope:#text/1": _.b = {
            "#BranchAccessor": "#text/1"
          }
        }, _.b], _.b["#CatchContent"] = _._[
          "__tests__/template.marko_2_content"
          ](_.a), _.c),
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
INSERT html/body/#text1
INSERT html/body/div1/#text
```