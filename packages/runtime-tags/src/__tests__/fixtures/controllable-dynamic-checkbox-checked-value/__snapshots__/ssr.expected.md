# Write
```html
  <input value=a checked type=radio><!--M_*1 #input/0--><input value=b type=radio><!--M_*2 #input/0--><!--M_|1 #text/1 2--><input value=c type=radio><!--M_*1 #input/2--><span>a<!--M_*1 #text/3--></span><button>Toggle</button><!--M_*1 #button/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ControlledType:#input/0":1,"ControlledType:#input/2":1,show:!0,checkedValue:"a"},_.b={"ControlledType:#input/0":1,_:_.a}],_.a["ControlledHandler:#input/0"]=_.a["ControlledHandler:#input/2"]=_.a.$checkedValueChange=_.b["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/checkedValueChange2"](_.a),_.c),"__tests__/template.marko_1 2 __tests__/template.marko_0_show 1 __tests__/template.marko_0 1"];M._.w()</script>
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
      "ControlledType:#input/2": 1,
      show: !0,
      checkedValue: "a"
    }, _.b = {
      "ControlledType:#input/0": 1,
      _: _.a
    }], _.a["ControlledHandler:#input/0"] = _.a[
      "ControlledHandler:#input/2"] = _.a.$checkedValueChange = _.b[
      "ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/checkedValueChange2"
      ](_.a), _.c),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1 __tests__/template.marko_0 1"
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
INSERT #comment2
INSERT input2
INSERT #comment3
INSERT span
INSERT span/#text
INSERT span/#comment
INSERT button
INSERT button/#text
INSERT #comment4
INSERT script
INSERT script/#text
```