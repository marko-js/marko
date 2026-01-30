# Render
```html
<html>
  <head />
  <body>
    <div>
      content
    </div>
    <!--M_*3 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 2,
        {
          input_option: _.a = {
            content: _.c = {},
            *[Symbol.iterator]()
            {
              yield this
            }
          }
        }], _.a.content = _._[
          "__tests__/template.marko_1_content"
          ](_.c), _.b),
        "__tests__/tags/child.marko_0_input_option 3"
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