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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.a={"#text/1(":0,"#text/1!":_.b={}},2:_.b,3:_.c={"#scopeOffset/1":5,input:{foo:"bar",output:_._["__tests__/template.marko_0/#div"](_.a)},x:"bar","#childScope/0":_.d={}},4:_.d},_.b._=_.a,_.d["/"]=_._["__tests__/tags/child.marko_0_x/var"](_.c),_.e),3,"__tests__/tags/child.marko_0_input_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
```