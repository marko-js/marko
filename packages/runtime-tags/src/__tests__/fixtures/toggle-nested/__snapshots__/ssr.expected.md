# Write
```html
  <div><!--M_[2--><!--M_]1 #div/0--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={1:{value1:"Hello",value2:"World","ClosureScopes:value1":new Set,"ClosureScopes:value2":new Set}})]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[2-->
      <!--M_]1 #div/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{value1:"Hello",value2:"World","ClosureScopes:value1":new Set,"ClosureScopes:value2":new Set}})]
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
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```