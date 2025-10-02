# Write
```html
  <button>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><span></span><!--M_|2 #text/0 3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={"#scopeOffset/3":4,count:1,"#childScope/2":_.b={"ConditionalScope:#text/0":_.c={}}},_.b,_.c],_.b["#TagVariable"]=_._["__tests__/template.marko_0_x/var"](_.a),_.d),"__tests__/template.marko_0_count",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <span />
    <!--M_|2 #text/0 3-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/3": 4,
          count: 1,
          "#childScope/2": _.b = {
            "ConditionalScope:#text/0": _.c = {}
          }
        }, _.b, _.c], _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_x/var"
          ](_.a), _.d),
        "__tests__/template.marko_0_count",
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment0
INSERT html/body/span
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```