# Write
```html
  <div><!--Body Text--><!--M_*2 #comment/0-->&zwj;<!--M_*1 #text/2--></div><span><!--Body Text--><!--M_*4 #comment/0-->&zwj;<!--M_*1 #text/5--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={"#scopeOffset/1":3,"#scopeOffset/4":5,"#childScope/0":_.b={},"#childScope/3":_.c={}},_.b,1,_.c],_.b["#TagVariable"]=_._["__tests__/template.marko_0_divName/var"](_.a),_.c["#TagVariable"]=_._["__tests__/template.marko_0_spanName/var"](_.a),_.d),"__tests__/tags/parent-el.marko_0",2,4];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--Body Text-->
      <!--M_*2 #comment/0-->
      ‍
      <!--M_*1 #text/2-->
    </div>
    <span>
      <!--Body Text-->
      <!--M_*4 #comment/0-->
      ‍
      <!--M_*1 #text/5-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.a = {
          "#scopeOffset/1": 3,
          "#scopeOffset/4": 5,
          "#childScope/0": _.b = {},
          "#childScope/3": _.c = {}
        }, _.b, 1, _.c], _.b["#TagVariable"] = _._[
          "__tests__/template.marko_0_divName/var"
          ](_.a), _.c["#TagVariable"] = _._[
          "__tests__/template.marko_0_spanName/var"
          ](_.a), _.d),
        "__tests__/tags/parent-el.marko_0",
        2, 4
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
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/div/#text
INSERT html/body/div/#comment2
INSERT html/body/span
INSERT html/body/span/#comment0
INSERT html/body/span/#comment1
INSERT html/body/span/#text
INSERT html/body/span/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```