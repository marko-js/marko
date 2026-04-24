# Write
```html
  <input value=a checked type=checkbox><!--M_*2 #input/0--><input value=b checked type=checkbox><!--M_*3 #input/0--><input value=c type=checkbox><!--M_*4 #input/0--><span>a,b<!--M_*1 #text/3--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.j=[0,_.a={"#childScope/0":_.b={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.d=[],input:_.c={checkedValue:_.f=["a","b"],value:"a"}},"#childScope/1":_.e={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.d,input:_.g={checkedValue:_.f,value:"b"}},"#childScope/2":_.h={"ControlledType:#input/0":1,"ControlledValue:#input/0":_.d,input:_.i={checkedValue:_.f,value:"c"}}},_.b,_.e,_.h],_.a.$checkedValueChange=_.b["ControlledHandler:#input/0"]=_.c.checkedValueChange=_.e["ControlledHandler:#input/0"]=_.g.checkedValueChange=_.h["ControlledHandler:#input/0"]=_.i.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange2"](_.a),_.j),"__tests__/tags/checkbox.marko_0_input 2 3 4"];M._.w()</script>
```

# Render End
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<!--M_*2 #input/0-->
<input
  checked=""
  type="checkbox"
  value="b"
/>
<!--M_*3 #input/0-->
<input
  type="checkbox"
  value="c"
/>
<!--M_*4 #input/0-->
<span>
  a,b
  <!--M_*1 #text/3-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.j = [0, _.a = {
      "#childScope/0": _.b = {
        "ControlledType:#input/0": 1,
        "ControlledValue:#input/0": _.d = [],
        input: _.c = {
          checkedValue: _.f = ["a", "b"],
          value: "a"
        }
      },
      "#childScope/1": _.e = {
        "ControlledType:#input/0": 1,
        "ControlledValue:#input/0": _.d,
        input: _.g = {
          checkedValue: _.f,
          value: "b"
        }
      },
      "#childScope/2": _.h = {
        "ControlledType:#input/0": 1,
        "ControlledValue:#input/0": _.d,
        input: _.i = {
          checkedValue: _.f,
          value: "c"
        }
      }
    }, _.b, _.e, _.h], _.a.$checkedValueChange = _.b[
      "ControlledHandler:#input/0"] = _.c.checkedValueChange = _.e[
      "ControlledHandler:#input/0"] = _.g.checkedValueChange = _.h[
      "ControlledHandler:#input/0"] = _.i.checkedValueChange = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.j),
    "__tests__/tags/checkbox.marko_0_input 2 3 4"
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