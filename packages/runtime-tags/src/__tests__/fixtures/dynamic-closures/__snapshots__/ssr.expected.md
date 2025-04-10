# Write
```html
  <button></button><!--M_*1 #button/0--><div>1 2 <!>3<!--M_*3 #text/2--></div><div>1 2 <!>3<!--M_*5 #text/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={b:2,c:3,"ClosureScopes:c":_.e=new Set},1,_.f={_:_.a,"ClosureSignalIndex:c":0},_.b={"ConditionalScope:#text/0":_.c={"ClosureSignalIndex:c":1},_:_.a},_.c],_.c._=_.b,(_.e).add(_.f),(_.e).add(_.c),_.d),1,"__tests__/template.marko_0"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <div>
      1 2 
      <!---->
      3
      <!--M_*3 #text/2-->
    </div>
    <div>
      1 2 
      <!---->
      3
      <!--M_*5 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.a={b:2,c:3,"ClosureScopes:c":_.e=new Set},1,_.f={_:_.a,"ClosureSignalIndex:c":0},_.b={"ConditionalScope:#text/0":_.c={"ClosureSignalIndex:c":1},_:_.a},_.c],_.c._=_.b,(_.e).add(_.f),(_.e).add(_.c),_.d),1,"__tests__/template.marko_0"];M._.w()
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
INSERT html/body/#comment
INSERT html/body/div0
INSERT html/body/div0/#text0
INSERT html/body/div0/#comment0
INSERT html/body/div0/#text1
INSERT html/body/div0/#comment1
INSERT html/body/div1
INSERT html/body/div1/#text0
INSERT html/body/div1/#comment0
INSERT html/body/div1/#text1
INSERT html/body/div1/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```