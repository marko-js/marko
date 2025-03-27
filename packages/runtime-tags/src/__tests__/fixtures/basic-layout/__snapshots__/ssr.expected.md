# Write
```html
  <body><!--M_[3--><h1>Hello <!>World<!--M_*3 #text/0--></h1><!--M_]2 #text/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={name:"World","ClosureScopes:name":_.d=new Set},{"ConditionalScope:#text/0":_.b={_:_.a,"ClosureSignalIndex:name":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},_.b],(_.d).add(_.b),_.c)]</script></body>
```

# Render End
```html
<html>
  <head />
  <body>
    <!--M_[3-->
    <h1>
      Hello 
      <!---->
      World
      <!--M_*3 #text/0-->
    </h1>
    <!--M_]2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={name:"World","ClosureScopes:name":_.d=new Set},{"ConditionalScope:#text/0":_.b={_:_.a,"ClosureSignalIndex:name":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},_.b],(_.d).add(_.b),_.c)]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#comment0
INSERT html/body/h1
INSERT html/body/h1/#text0
INSERT html/body/h1/#comment0
INSERT html/body/h1/#text1
INSERT html/body/h1/#comment1
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```