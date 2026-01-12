# Render `{"class":"success","data-rest":1}`

```html
<html>
  <head />
  <body>
    <div
      id="known"
    >
       
      <span
        class="success"
        data-rest="1"
      />
      <!--M_*2 #span/0-->
    </div>
    <div
      id="dynamic"
    >
       
      <span
        class="success"
        data-rest="1"
      />
      <!--M_*4 #span/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
        {
          _class: "success",
          rest:
          {
            "data-rest": 1
          }
        }, 1,
        {
          _class: "success",
          rest:
          {
            "data-rest": 1
          }
        }]),
        "__tests__/tags/child.marko_0__class_rest 2 4"
      ];
      M._.w()
    </script>
  </body>
</html>
```
