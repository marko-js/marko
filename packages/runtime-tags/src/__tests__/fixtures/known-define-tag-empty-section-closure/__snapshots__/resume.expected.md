# Render
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[-->
      <!--M_]1 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
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
      <!---->
      <!---->
      <!---->
      <div>
        123
      </div>
      <!---->
      <!---->
      <!---->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#comment1, html/body/div/#comment2, html/body/div/#comment3, #text, html/body/div/#comment4, html/body/div/#comment5, html/body/div/#comment6
REMOVE #comment after html/body/div/#comment6
INSERT html/body/div/div
REMOVE #text after html/body/div/div
UPDATE html/body/div/div/#text " " => "123"
```