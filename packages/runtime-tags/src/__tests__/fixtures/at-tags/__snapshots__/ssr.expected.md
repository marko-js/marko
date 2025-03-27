# Write
```html
  <!--M_[3-->Foo!<!--M_]2 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,1,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},_.a])]</script>
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,1,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},_.a])]
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