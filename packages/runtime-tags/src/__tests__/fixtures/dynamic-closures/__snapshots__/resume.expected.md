# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*0 #button/0-->
    <div>
      <!--M_[2-->
      1 2 
      <!---->
      3
      <!--M_*2 #text/2-->
      <!--M_]1 #text/0-->
    </div>
    <div>
      1 2 
      <!---->
      3
      <!--M_*4 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={b:2,c:3,"#childScope/1":_.c={"#text/0!":_.b={}}},1:_.c,2:_.b,3:_.d={_:_.a},4:{_:_.d}},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.e),2,"__tests__/template.marko_1_c/subscriber",4,"__tests__/template.marko_3_c/subscriber",0,"__tests__/template.marko_0",0];M._.w()
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
    <!--M_*0 #button/0-->
    <div>
      <!--M_[2-->
      1 2 
      <!---->
      4
      <!--M_*2 #text/2-->
      <!--M_]1 #text/0-->
    </div>
    <div>
      1 2 
      <!---->
      4
      <!--M_*4 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={b:2,c:3,"#childScope/1":_.c={"#text/0!":_.b={}}},1:_.c,2:_.b,3:_.d={_:_.a},4:{_:_.d}},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.e),2,"__tests__/template.marko_1_c/subscriber",4,"__tests__/template.marko_3_c/subscriber",0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div1/#text1 "3" => "4"
UPDATE html/body/div0/#text1 "3" => "4"
```