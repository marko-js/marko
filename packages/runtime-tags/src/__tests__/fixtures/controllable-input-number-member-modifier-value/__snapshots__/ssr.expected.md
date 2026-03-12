# Write
```html
  <input value=0 type=number><!--M_*2 #input/0--><span>0<!--M_*1 #text/1--> <!>number<!--M_*1 #text/2--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"#childScope/0":_.a={"ControlledType:#input/0":2}},_.a],_.a.input_valueChange=_._["__tests__/template.marko_0/valueChange"](_.c),_.a["ControlledHandler:#input/0"]=_._["__tests__/tags/custom-input.marko_0/valueChange"](_.a),_.b),"__tests__/tags/custom-input.marko_0 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <input
      type="number"
      value="0"
    />
    <!--M_*2 #input/0-->
    <span>
      0
      <!--M_*1 #text/1-->
       
      <!---->
      number
      <!--M_*1 #text/2-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
          "#childScope/0": _.a = {
            "ControlledType:#input/0": 2
          }
        }, _.a], _.a.input_valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.c), _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/tags/custom-input.marko_0/valueChange"
          ](_.a), _.b),
        "__tests__/tags/custom-input.marko_0 2"
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
INSERT html/body/input
INSERT html/body/#comment
INSERT html/body/span
INSERT html/body/span/#text0
INSERT html/body/span/#comment0
INSERT html/body/span/#text1
INSERT html/body/span/#comment1
INSERT html/body/span/#text2
INSERT html/body/span/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```