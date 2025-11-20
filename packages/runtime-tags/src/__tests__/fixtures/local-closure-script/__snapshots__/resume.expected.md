# Render
```html
<html>
  <head />
  <body>
    <div>
      1
    </div>
    <!--M_*4 #div/0-->
    <div>
      2
    </div>
    <!--M_*6 #div/0-->
    <div>
      3
    </div>
    <!--M_*8 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {}, 2,
        {
          item: 1
        }, 1,
        {
          item: 2
        }, 1,
        {
          item: 3
        }]),
        "__tests__/template.marko_1_item 4 6 8"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div0/#text
INSERT html/body/div1/#text
INSERT html/body/div2/#text
```