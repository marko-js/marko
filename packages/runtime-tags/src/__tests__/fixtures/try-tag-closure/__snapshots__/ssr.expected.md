# Write
```html
  <!--M_[-->Hello<!--M_]1 #text/0 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{"#BranchAccessor":"#text/0"}])]</script>
```

# Render End
```html
<!--M_[-->
<html>
  <head />
  <body>
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
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```