# Write
```html
  <!--M_[2--><div>baz</div><!--M_]1 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={1:{"#text/0!":_.a={},"#text/0(":"__tests__/tags/baz.marko"},2:_.a})]</script>
```

# Render End
```html
<!--M_[2-->
<html>
  <head />
  <body>
    <div>
      baz
    </div>
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{"#text/0!":_.a={},"#text/0(":"__tests__/tags/baz.marko"},2:_.a})]
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
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```