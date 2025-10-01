# Write
```html
  <div><!--M_}1 #div/0--></div><button>0<!--M_*1 #text/2--></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={input_message:"hello",x:0}],_.a.getMessage=_._["__tests__/template.marko_0/getMessage"](_.a),_.b),"__tests__/template.marko_0_x",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--M_}1 #div/0-->
    </div>
    <button>
      0
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          input_message: "hello",
          x: 0
        }], _.a.getMessage = _._[
          "__tests__/template.marko_0/getMessage"
          ](_.a), _.b),
        "__tests__/template.marko_0_x",
        1
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
INSERT html/body/div/#comment
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```