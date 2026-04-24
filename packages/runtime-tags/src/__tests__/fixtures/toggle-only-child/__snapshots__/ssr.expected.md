# Write
```html
  <div><span>Hello<!--M_*2 #text/0--></span><!--M_}1 #div/0 2--></div><input value=Hello><!--M_*1 #input/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#input/1":2,value:"Hello"},{_:_.a}],_.a["ControlledHandler:#input/1"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<div>
  <span>
    Hello
    <!--M_*2 #text/0-->
  </span>
  <!--M_}1 #div/0 2-->
</div>
<input
  value="Hello"
/>
<!--M_*1 #input/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#input/1": 2,
      value: "Hello"
    },
    {
      _: _.a
    }], _.a["ControlledHandler:#input/1"] = _._[
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
INSERT div
INSERT div/span
INSERT div/span/#text
INSERT div/span/#comment
INSERT div/#comment
INSERT input
INSERT #comment
INSERT script
INSERT script/#text
```