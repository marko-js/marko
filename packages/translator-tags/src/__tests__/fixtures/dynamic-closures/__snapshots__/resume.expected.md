# Render {}
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={b:2,c:3,"#childScope/1":_.c={"#text/0!":_.b={}}},1:_.c,2:_.b,3:_.d={_:_.a},4:{_:_.d}},_.b._=_.a,_.c["#text/0("]=_._["packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_renderer"](_.a),_.e),2,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_c/subscriber",4,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_3_c/subscriber",0,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_0",0];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={b:2,c:3,"#childScope/1":_.c={"#text/0!":_.b={}}},1:_.c,2:_.b,3:_.d={_:_.a},4:{_:_.d}},_.b._=_.a,_.c["#text/0("]=_._["packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_renderer"](_.a),_.e),2,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_1_c/subscriber",4,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_3_c/subscriber",0,"packages/translator-tags/src/__tests__/fixtures/dynamic-closures/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div2/#text3: "3" => "4"
#document/html0/body1/div3/#text2: "3" => "4"
```