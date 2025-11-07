# Write
```html
  <input value=a checked type=radio><!--M_*1 #input/0--><input value=b type=radio><!--M_*2 #input/0--><!--M_|1 #text/1 2--><input value=c type=radio><!--M_*1 #input/2--><span>a<!--M_*1 #text/3--></span><button>Toggle</button><!--M_*1 #button/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ControlledType:#input/0":1,"ControlledValue:#input/0":"a","ControlledType:#input/2":1,"ControlledValue:#input/2":"a",show:!0,checkedValue:"a"},_.b={"ControlledType:#input/0":1,"ControlledValue:#input/0":"a",_:_.a}],_.a["ControlledHandler:#input/0"]=_.a["ControlledHandler:#input/2"]=_.a.$checkedValueChange=_.b["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/checkedValueChange2"](_.a),_.c),"__tests__/template.marko_1",2,"__tests__/template.marko_0_show",1,"__tests__/template.marko_0",1];M._.w()</script>
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
    <!--M_*2 #input/0-->
    <!--M_|1 #text/1 2-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*1 #input/2-->
    <span>
      a
      <!--M_*1 #text/3-->
    </span>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": "a",
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": "a",
          show: !0,
          checkedValue: "a"
        }, _.b = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": "a",
          _: _.a
        }], _.a["ControlledHandler:#input/0"] = _.a[
          "ControlledHandler:#input/2"] = _.a.$checkedValueChange = _.b[
          "ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.c),
        "__tests__/template.marko_1",
        2,
        "__tests__/template.marko_0_show",
        1,
        "__tests__/template.marko_0",
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
INSERT html/body/input0
INSERT html/body/#comment0
INSERT html/body/input1
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT html/body/input2
INSERT html/body/#comment3
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment4
INSERT html/body/script
INSERT html/body/script/#text
```