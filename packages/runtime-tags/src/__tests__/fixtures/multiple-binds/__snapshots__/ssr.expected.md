# Write
```html
  <button><input value=0><!--M_*1 #input/1--><input value=0><!--M_*1 #input/2--></button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#input/1":2,"ControlledType:#input/2":2,count:0}],_.a["ControlledHandler:#input/1"]=_.a["ControlledHandler:#input/2"]=_.a.$valueChange=_._["__tests__/template.marko_0/valueChange2"](_.a),_.b),"__tests__/template.marko_0",1,"__tests__/template.marko_0_count",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      <input
        value="0"
      />
      <!--M_*1 #input/1-->
      <input
        value="0"
      />
      <!--M_*1 #input/2-->
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#input/1": 2,
          "ControlledType:#input/2": 2,
          count: 0
        }], _.a["ControlledHandler:#input/1"] = _.a[
          "ControlledHandler:#input/2"] = _.a.$valueChange = _._[
          "__tests__/template.marko_0/valueChange2"
          ](_.a), _.b),
        "__tests__/template.marko_0",
        1,
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
INSERT html/body/button/input0
INSERT html/body/button/#comment0
INSERT html/body/button/input1
INSERT html/body/button/#comment1
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```