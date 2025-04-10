# Write
```html
  <div><span>Hello</span><span></span><span></span></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{_:{}}])]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <span>
        Hello
      </span>
      <span />
      <span />
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,1,{_:{}}])]
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
INSERT html/body/div/span0
INSERT html/body/div/span0/#text
INSERT html/body/div/span1
INSERT html/body/div/span2
INSERT html/body/script
INSERT html/body/script/#text
```