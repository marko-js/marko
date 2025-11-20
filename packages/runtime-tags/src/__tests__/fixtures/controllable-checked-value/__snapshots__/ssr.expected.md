# Write
```html
  <input value=a checked type=radio><!--M_*1 #input/0--><input value=b type=radio><!--M_*1 #input/1--><input value=c type=radio><!--M_*1 #input/2--><span>a<!--M_*1 #text/3--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#input/0":1,"ControlledValue:#input/0":"a","ControlledType:#input/1":1,"ControlledValue:#input/1":"a","ControlledType:#input/2":1,"ControlledValue:#input/2":"a",checkedValue:"a"}],_.a["ControlledHandler:#input/0"]=_.a["ControlledHandler:#input/1"]=_.a["ControlledHandler:#input/2"]=_.a.$checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange2"](_.a),_.b),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="radio"
      value="a"
    />
    <!--M_*1 #input/0-->
    <input
      type="radio"
      value="b"
    />
    <!--M_*1 #input/1-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*1 #input/2-->
    <span>
      a
      <!--M_*1 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
            "ControlledType:#input/0": 1,
            "ControlledValue:#input/0": "a",
            "ControlledType:#input/1": 1,
            "ControlledValue:#input/1": "a",
            "ControlledType:#input/2": 1,
            "ControlledValue:#input/2": "a",
            checkedValue: "a"
          }], _.a["ControlledHandler:#input/0"] = _.a[
            "ControlledHandler:#input/1"] = _.a[
          "ControlledHandler:#input/2"] = _.a.$checkedValueChange = _._[
            "__tests__/template.marko_0/checkedValueChange2"
            ](_.a), _.b),
        "__tests__/template.marko_0 1"
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
INSERT html/body/input0
INSERT html/body/#comment0
INSERT html/body/input1
INSERT html/body/#comment1
INSERT html/body/input2
INSERT html/body/#comment2
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/script
INSERT html/body/script/#text
```