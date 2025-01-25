# Write
```html
  <div><!--M_[1--><!--M_]0 #text/0--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a={0:{value1:"Hello",value2:"World"}}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[1-->
      <!--M_]0 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{value1:"Hello",value2:"World"}}),0]
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