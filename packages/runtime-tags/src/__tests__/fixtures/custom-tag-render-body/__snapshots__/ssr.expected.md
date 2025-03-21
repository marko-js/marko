# Write
```html
  <!>World<!--M_*2 #text/0--><!--M_[3-->This is the body content<!--M_]2 #text/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={2:{"ConditionalScope:#text/1":_.a={},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"},3:_.a})]</script>
```

# Render End
```html
<!---->
<html>
  <head />
  <body>
    World
    <!--M_*2 #text/0-->
    <!--M_[3-->
    This is the body content
    <!--M_]2 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={2:{"ConditionalScope:#text/1":_.a={},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"},3:_.a})]
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
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#text1
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```