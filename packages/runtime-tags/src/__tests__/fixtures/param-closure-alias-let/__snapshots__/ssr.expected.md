# Write
```html
  foo<!--M_*3 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,2,{}])]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    foo
    <!--M_*3 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0, 2,
      {}])]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```