# Write
```html
  <button class=inc>0<!--M_*2 #text/1--></button><!--M_*2 #button/0--><div>Marko 1<!--M_*1 #text/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"#scopeOffset/1":3,name:"Marko","#childScope/0":_.a={input_extra:1,x:0}},_.a],_.a["#TagVariable"]=_._["__tests__/template.marko_0_data/var"](_.c),_.b),"__tests__/tags/child.marko_0_x",2];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      0
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <div>
      Marko 1
      <!--M_*1 #text/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "#scopeOffset/1": 3,
          name: "Marko",
          "#childScope/0": _.a = {
            input_extra: 1,
            x: 0
          }
        }, _.a], _.a["#TagVariable"] = _._[
          "__tests__/template.marko_0_data/var"
          ](_.c), _.b),
        "__tests__/tags/child.marko_0_x",
        2
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```