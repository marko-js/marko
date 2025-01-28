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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.a={b:2,c:3,"#childScope/1":_.c={"#text/0!":_.b={}}},2:_.c,3:_.b,4:_.d={_:_.a},5:{_:_.d}},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.e),3,"__tests__/template.marko_1_c/subscriber",5,"__tests__/template.marko_3_c/subscriber",1,"__tests__/template.marko_0",0];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.a={b:2,c:3,"#childScope/1":_.c={"#text/0!":_.b={}}},2:_.c,3:_.b,4:_.d={_:_.a},5:{_:_.d}},_.b._=_.a,_.c["#text/0("]=_._["__tests__/template.marko_1_renderer"](_.a),_.e),3,"__tests__/template.marko_1_c/subscriber",5,"__tests__/template.marko_3_c/subscriber",1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div1/#text1 "3" => "4"
UPDATE html/body/div0/#text1 "3" => "4"
```