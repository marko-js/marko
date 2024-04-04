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
      (M$h=[]).push((b,s,h,j,k,m,o)=&gt;(o={0:h={b:2,c:3,"#childScope/1":k={"#text/0!":j={}}},1:k,2:j,3:m={_:h},4:{_:m}},j._=h,o),[2,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_c/subscriber",4,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_3_c/subscriber",0,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_0",])
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
      (M$h=[]).push((b,s,h,j,k,m,o)=&gt;(o={0:h={b:2,c:3,"#childScope/1":k={"#text/0!":j={}}},1:k,2:j,3:m={_:h},4:{_:m}},j._=h,o),[2,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_c/subscriber",4,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_3_c/subscriber",0,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div2/#text3: "3" => "4"
#document/html0/body1/div3/#text2: "3" => "4"
```