# Write
```html
  <div></div><!--M_*1 #div/0--><button></button><!--M_*2 #button/0--> <script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={},{input_message:"hello",_:_.a}]),"__tests__/template.marko_1_input_message 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/0-->
    <button />
    <!--M_*2 #button/0-->
     
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {},
        {
          input_message: "hello",
          _: _.a
        }]),
        "__tests__/template.marko_1_input_message 2"
      ];
      M._.w()
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
INSERT html/body/button
INSERT html/body/#comment1
INSERT html/body/#text
INSERT html/body/script
INSERT html/body/script/#text
```