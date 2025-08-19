# Write
```html
  <div>6<!--M_*1 #text/0--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{}])]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      6
      <!--M_*1 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
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
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```