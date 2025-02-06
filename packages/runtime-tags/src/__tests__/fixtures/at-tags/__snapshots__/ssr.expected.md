# Write
```html
  <!--M_[3-->Foo!<!--M_]2 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={2:{"#text/0!":_.b={},"#text/0(":_._["__tests__/template.marko_1_renderer"](_.a={})},3:_.b}),0]</script>
```

# Render End
```html
<!--M_[3-->
<html>
  <head />
  <body>
    Foo!
    <!--M_]2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={2:{"#text/0!":_.b={},"#text/0(":_._["__tests__/template.marko_1_renderer"](_.a={})},3:_.b}),0]
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