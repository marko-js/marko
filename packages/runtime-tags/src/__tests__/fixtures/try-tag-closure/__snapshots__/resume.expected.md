# Render
```html
<html>
  <head />
  <body>
    <!--M_[-->
    Hello
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 1,
      {
        "#BranchAccessor": "#text/0"
      }])]
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text1
```