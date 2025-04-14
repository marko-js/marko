# Render
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalScope:#div/2":_.a={"ConditionalScope:#text/0":_.b={"ClosureSignalIndex:c":1}},b:2,c:3,"ClosureScopes:c":_.e=new Set},1,_.f={_:_.c,"ClosureSignalIndex:c":0},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.f),(_.e).add(_.b),_.d),"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <div>
      1 2 
      <!---->
      4
      <!--M_*3 #text/2-->
    </div>
    <div>
      1 2 
      <!---->
      4
      <!--M_*5 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalScope:#div/2":_.a={"ConditionalScope:#text/0":_.b={"ClosureSignalIndex:c":1}},b:2,c:3,"ClosureScopes:c":_.e=new Set},1,_.f={_:_.c,"ClosureSignalIndex:c":0},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.f),(_.e).add(_.b),_.d),"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text1 "3" => "4"
UPDATE html/body/div1/#text1 "3" => "4"
```