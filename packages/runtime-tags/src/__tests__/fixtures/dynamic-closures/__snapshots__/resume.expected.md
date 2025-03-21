# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <div>
      <!--M_[3-->
      1 2 
      <!---->
      3
      <!--M_*3 #text/2-->
      <!--M_]2 #text/0-->
    </div>
    <div>
      1 2 
      <!---->
      3
      <!--M_*5 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={b:2,c:3,"ClosureScopes:c":_.e=new Set},2:{"ConditionalScope:#text/0":_.b={_:_.a,"ClosureSignalIndex:c":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},3:_.b,4:_.c={_:_.a},5:_.f={_:_.c,"ClosureSignalIndex:c":1}},(_.e).add(_.b),(_.e).add(_.f),_.d),1,"__tests__/template.marko_0"];M._.w()
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
      <!--M_[3-->
      1 2 
      <!---->
      4
      <!--M_*3 #text/2-->
      <!--M_]2 #text/0-->
    </div>
    <div>
      1 2 
      <!---->
      4
      <!--M_*5 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={b:2,c:3,"ClosureScopes:c":_.e=new Set},2:{"ConditionalScope:#text/0":_.b={_:_.a,"ClosureSignalIndex:c":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},3:_.b,4:_.c={_:_.a},5:_.f={_:_.c,"ClosureSignalIndex:c":1}},(_.e).add(_.b),(_.e).add(_.f),_.d),1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div0/#text1 "3" => "4"
UPDATE html/body/div1/#text1 "3" => "4"
```