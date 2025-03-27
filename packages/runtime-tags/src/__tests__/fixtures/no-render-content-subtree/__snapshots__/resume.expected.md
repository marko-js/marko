# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <div>
      bar
    </div>
    <!--M_*1 #div/0-->
    <!--M_|1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e=[0,_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={}},_.b,_.c={"#scopeOffset/1":5,input:{foo:"bar",output:_._["__tests__/template.marko_0/#div"](_.a)},x:"bar","#childScope/0":_.d={}},_.d],_.b._=_.a,_.d["#TagVariable"]=_._["__tests__/tags/child.marko_0_x/var"](_.c),_.e),3,"__tests__/tags/child.marko_0_input_x"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
```