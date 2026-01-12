# Render `{"class":"success","data-rest":1}`

```html
<html>
  <head />
  <body>
    <span
      class="success"
      data-foo="1"
      data-rest="1"
    />
    <!--M_*2 #span/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          _class: "success",
          rest:
          {
            "data-foo": 1,
            "data-rest": 1
          }
        }]),
        "__tests__/tags/child.marko_0__class_rest 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```
