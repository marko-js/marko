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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ClosureScopes:c":_.d=new Set},1,_.e={_:_.a,"ClosureSignalIndex:c":0},_.b={_:_.a},_.f={_:_.b,"ClosureSignalIndex:c":1}],(_.d).add(_.e),(_.d).add(_.f),_.c),"__tests__/template.marko_0",1];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ClosureScopes:c":_.d=new Set},1,_.e={_:_.a,"ClosureSignalIndex:c":0},_.b={_:_.a},_.f={_:_.b,"ClosureSignalIndex:c":1}],(_.d).add(_.e),(_.d).add(_.f),_.c),"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text1 "3" => "4"
UPDATE html/body/div1/#text1 "3" => "4"
```