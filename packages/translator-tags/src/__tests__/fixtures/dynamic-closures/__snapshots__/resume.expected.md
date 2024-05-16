# Render {}
```html
<html>
  <head />
  <body>
    <button />
    <!--M*0 #button/0-->
    <div>
      <!--M[2-->
      1 2 
      <!---->
      3
      <!--M*2 #text/2-->
      <!--M]1 #text/0-->
    </div>
    <div>
      1 2 
      <!---->
      3
      <!--M*4 #text/2-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.e={0:_.a={"#scope":0,b:2,c:3,"#childScope/1":_.c={"#scope":1,"#text/0!":_.b={"#scope":2}}},1:_.c,2:_.b,3:_.d={"#scope":3,_:_.a},4:{_:_.d,"#scope":4}},_.b._=_.a,_.e),[2,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_c/subscriber",4,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_3_c/subscriber",0,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button />
    <!--M*0 #button/0-->
    <div>
      <!--M[2-->
      1 2 
      <!---->
      4
      <!--M*2 #text/2-->
      <!--M]1 #text/0-->
    </div>
    <div>
      1 2 
      <!---->
      4
      <!--M*4 #text/2-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.e={0:_.a={"#scope":0,b:2,c:3,"#childScope/1":_.c={"#scope":1,"#text/0!":_.b={"#scope":2}}},1:_.c,2:_.b,3:_.d={"#scope":3,_:_.a},4:{_:_.d,"#scope":4}},_.b._=_.a,_.e),[2,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_c/subscriber",4,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_3_c/subscriber",0,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div2/#text3: "3" => "4"
#document/html0/body1/div3/#text2: "3" => "4"
```