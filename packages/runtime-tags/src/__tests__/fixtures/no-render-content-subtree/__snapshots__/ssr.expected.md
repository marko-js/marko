# Write
```html
  <div></div><!--M_*1 #div/0--><!--M_|1 #text/1 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.f=[0,_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={}},_.b,_.d={"#scopeOffset/1":5,input:_.c={foo:"bar"},x:"bar","#childScope/0":_.e={}},_.e],_.b._=_.a,_.c.output=_._["__tests__/template.marko_0/#div"](_.a),_.e["#TagVariable"]=_._["__tests__/tags/child.marko_0_x/var"](_.d),_.f),3,"__tests__/tags/child.marko_0_input_x"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/0-->
    <!--M_|1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={}},_.b,_.d={"#scopeOffset/1":5,input:_.c={foo:"bar"},x:"bar","#childScope/0":_.e={}},_.e],_.b._=_.a,_.c.output=_._["__tests__/template.marko_0/#div"](_.a),_.e["#TagVariable"]=_._["__tests__/tags/child.marko_0_x/var"](_.d),_.f),3,"__tests__/tags/child.marko_0_input_x"];M._.w()
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
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```