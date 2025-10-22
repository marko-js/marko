# Write
```html
  <div>1</div>function<!--M_*1 #text/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{y:1}])]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      1
    </div>
    function
    <!--M_*1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
      {
        y: 1
      }])]
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
INSERT html/body/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```