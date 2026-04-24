# Write
```html
  <input value=0 type=checkbox><!--M_*1 #input/0--><input value=1 checked type=checkbox><!--M_*1 #input/1--><input value=2 type=checkbox><!--M_*1 #input/2--><span>1<!--M_*1 #text/3--></span><button>Reset</button><!--M_*1 #button/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.b=[],"ControlledType:#input/1":1,"ControlledValue:#input/1":_.b,"ControlledType:#input/2":1,"ControlledValue:#input/2":_.b}],_.a["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/checkedValueChange"](_.a),_.a["ControlledHandler:#input/1"]=_._["__tests__/template.marko_0/checkedValueChange2"](_.a),_.a["ControlledHandler:#input/2"]=_._["__tests__/template.marko_0/checkedValueChange3"](_.a),_.c),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
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
      "ControlledValue:#input/2": _.b
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
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT input0
INSERT #comment0
INSERT input1
INSERT #comment1
INSERT input2
INSERT #comment2
INSERT span
INSERT span/#text
INSERT span/#comment
INSERT button
INSERT button/#text
INSERT #comment3
INSERT script
INSERT script/#text
```