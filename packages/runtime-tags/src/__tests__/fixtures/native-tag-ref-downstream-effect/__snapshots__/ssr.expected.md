# Write
```html
  <div></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/1":_.b={}},_.b],_.b._=_.a,_.c),2,"__tests__/template.marko_1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalScope:#text/1":_.b={}},_.b],_.b._=_.a,_.c),2,"__tests__/template.marko_1"];M._.w()
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
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```