# Write
```html
  <input value=a checked type=radio><!--M_*1 #input/0--><input value=b type=radio><!--M_*1 #input/1--><input value=c type=radio><!--M_*1 #input/2--><span>a<!--M_*1 #text/3--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#input/0":1,"ControlledType:#input/1":1,"ControlledType:#input/2":1}],_.a["ControlledHandler:#input/0"]=_.a["ControlledHandler:#input/1"]=_.a["ControlledHandler:#input/2"]=_.a.$checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange2"](_.a),_.b),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
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
        "ControlledType:#input/1": 1,
        "ControlledType:#input/2": 1
      }], _.a["ControlledHandler:#input/0"] = _.a[
        "ControlledHandler:#input/1"] = _.a["ControlledHandler:#input/2"] = _
      .a.$checkedValueChange = _._[
        "__tests__/template.marko_0/checkedValueChange2"
        ](_.a), _.b),
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
INSERT script
INSERT script/#text
```