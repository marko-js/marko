# Write
```html
  <!--M_[3-->Hello<!--M_]2 #text/0--><div>1<!--M_*2 #text/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,{"#childScope/0":_.a={"ConditionalScope:#text/0":_.b={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"}},_.a,_.b])]</script>
```

# Render End
```html
<!--M_[3-->
<html>
  <head />
  <body>
    Hello
    <!--M_]2 #text/0-->
    <div>
      1
      <!--M_*2 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,{"#childScope/0":_.a={"ConditionalScope:#text/0":_.b={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"}},_.a,_.b])]
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
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```