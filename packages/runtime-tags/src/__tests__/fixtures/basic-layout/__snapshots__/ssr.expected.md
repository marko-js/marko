# Write
```html
  <body><h1>Hello World</h1><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{name:"World"}])]</script></body>
```

# Render End
```html
<html>
  <head />
  <body>
    <h1>
      Hello World
    </h1>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{name:"World"}])]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/h1
INSERT html/body/h1/#text
INSERT html/body/script
INSERT html/body/script/#text
```