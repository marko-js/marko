# Write
```html
  <!--M_[1--><div>baz</div><!--M_]0 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={0:{"#text/0!":_.a={},"#text/0(":_._["__tests__/tags/baz.marko"]},1:_.a}),0]</script>
```

# Render End
```html
<!--M_[1-->
<html>
  <head />
  <body>
    <div>
      baz
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{"#text/0!":_.a={},"#text/0(":_._["__tests__/tags/baz.marko"]},1:_.a}),0]
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