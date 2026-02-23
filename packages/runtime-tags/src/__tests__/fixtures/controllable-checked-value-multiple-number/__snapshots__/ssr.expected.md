# Write
```html
<<<<<<< Updated upstream
  <input value=0 type=radio><!--M_*1 #input/0--><input value=1 checked type=radio><!--M_*1 #input/1--><input value=2 type=radio><!--M_*1 #input/2--><span>1<!--M_*1 #text/3--></span><button>Reset</button><!--M_*1 #button/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.b=[],"ControlledType:#input/1":1,"ControlledValue:#input/1":_.b,"ControlledType:#input/2":1,"ControlledValue:#input/2":_.b,checked:[1]}],_.a["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.a["ControlledHandler:#input/1"]=_._["__tests__/template.marko_0/checkedValueChange2"](_.a),_.a["ControlledHandler:#input/2"]=_._["__tests__/template.marko_0/checkedValueChange3"](_.a),_.c),"__tests__/template.marko_0 1"];M._.w()</script>
=======
  <input value=0 type=checkbox><!--M_*1 #input/0--><input value=1 checked type=checkbox><!--M_*1 #input/1--><input value=2 type=checkbox><!--M_*1 #input/2--><span>1<!--M_*1 #text/3--></span><button>Reset</button><!--M_*1 #button/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.b=[],"ControlledType:#input/1":1,"ControlledValue:#input/1":_.b,"ControlledType:#input/2":1,"ControlledValue:#input/2":_.b}],_.a["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.a["ControlledHandler:#input/1"]=_._["__tests__/template.marko_0/checkedValueChange2"](_.a),_.a["ControlledHandler:#input/2"]=_._["__tests__/template.marko_0/checkedValueChange3"](_.a),_.c),"__tests__/template.marko_0 1"];M._.w()</script>
>>>>>>> Stashed changes
```

# Render End
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
      value="0"
    />
    <!--M_*1 #input/0-->
    <input
      checked=""
      type="checkbox"
      value="1"
    />
    <!--M_*1 #input/1-->
    <input
      type="checkbox"
      value="2"
    />
    <!--M_*1 #input/2-->
    <span>
      1
      <!--M_*1 #text/3-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          "ControlledType:#input/0": 1,
          "ControlledValue:#input/0": _.b = [],
          "ControlledType:#input/1": 1,
          "ControlledValue:#input/1": _.b,
          "ControlledType:#input/2": 1,
          "ControlledValue:#input/2": _.b,
          checked: [1]
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_0/checkedValueChange"
          ](_.a), _.a["ControlledHandler:#input/1"] = _._[
          "__tests__/template.marko_0/checkedValueChange2"
          ](_.a), _.a["ControlledHandler:#input/2"] = _._[
          "__tests__/template.marko_0/checkedValueChange3"
          ](_.a), _.c),
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
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment3
INSERT html/body/script
INSERT html/body/script/#text
```