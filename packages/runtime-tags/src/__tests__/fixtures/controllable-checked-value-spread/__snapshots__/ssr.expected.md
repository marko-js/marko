# Write
```html
  <input value=a checked type=radio><!--M_*2 #input/0--><input value=b type=radio><!--M_*3 #input/0--><input value=c type=radio><!--M_*4 #input/0--><span>a<!--M_*1 #text/3--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.h=[0,_.a={"#childScope/0":_.b={"ControlledType:#input/0":1,input:_.c={checkedValue:"a",value:"a"}},"#childScope/1":_.d={"ControlledType:#input/0":1,input:_.e={checkedValue:"a",value:"b"}},"#childScope/2":_.f={"ControlledType:#input/0":1,input:_.g={checkedValue:"a",value:"c"}}},_.b,_.d,_.f],_.a.$checkedValueChange=_.b["ControlledHandler:#input/0"]=_.c.checkedValueChange=_.d["ControlledHandler:#input/0"]=_.e.checkedValueChange=_.f["ControlledHandler:#input/0"]=_.g.checkedValueChange=_._["__tests__/template.marko_0/checkedValueChange2"](_.a),_.h),"__tests__/tags/radio.marko_0_input 2 3 4"];M._.w()</script>
```

# Render End
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<!--M_*2 #input/0-->
<input
  type="radio"
  value="b"
/>
<!--M_*3 #input/0-->
<input
  type="radio"
  value="c"
/>
<!--M_*4 #input/0-->
<span>
  a
  <!--M_*1 #text/3-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.h = [0, _.a = {
      "#childScope/0": _.b = {
        "ControlledType:#input/0": 1,
        input: _.c = {
          checkedValue: "a",
          value: "a"
        }
      },
      "#childScope/1": _.d = {
        "ControlledType:#input/0": 1,
        input: _.e = {
          checkedValue: "a",
          value: "b"
        }
      },
      "#childScope/2": _.f = {
        "ControlledType:#input/0": 1,
        input: _.g = {
          checkedValue: "a",
          value: "c"
        }
      }
    }, _.b, _.d, _.f], _.a.$checkedValueChange = _.b[
      "ControlledHandler:#input/0"] = _.c.checkedValueChange = _.d[
      "ControlledHandler:#input/0"] = _.e.checkedValueChange = _.f[
      "ControlledHandler:#input/0"] = _.g.checkedValueChange = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.h),
    "__tests__/tags/radio.marko_0_input 2 3 4"
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