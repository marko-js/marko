# Write
```html
  <button></button><!--M_*2 #button/0--><!--M_|1 #text/0 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.b={}},2:_.b},_.b._=_.a,_.c),2,"__tests__/template.marko_1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*2 #button/0-->
    <!--M_|1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.b={}},2:_.b},_.b._=_.a,_.c),2,"__tests__/template.marko_1"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```