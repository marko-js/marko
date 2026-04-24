# Write
```html
  <input value=0 type=number><!--M_*1 #input/0--><span>0<!--M_*1 #text/1--> <!>number<!--M_*1 #text/2--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#input/0":2}],_.a["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<input
  type="number"
  value="0"
/>
<!--M_*1 #input/0-->
<span>
  0
  <!--M_*1 #text/1-->
   
  <!---->
  number
  <!--M_*1 #text/2-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/0": 2
    }], _.a["ControlledHandler:#input/0"] = _._[
      "__tests__/template.marko_0/valueChange"
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
INSERT input
INSERT #comment
INSERT span
INSERT span/#text0
INSERT span/#comment0
INSERT span/#text1
INSERT span/#comment1
INSERT span/#text2
INSERT span/#comment2
INSERT script
INSERT script/#text
```