# Write
```html
  <select><option value=a>A</option><option value=b selected>B</option><option value=c>C</option></select><!--M_*1 #select/0--><span>b<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#select/0":3}],_.a["ControlledHandler:#select/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<select>
  <option
    value="a"
  >
    A
  </option>
  <option
    selected=""
    value="b"
  >
    B
  </option>
  <option
    value="c"
  >
    C
  </option>
</select>
<!--M_*1 #select/0-->
<span>
  b
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#select/0": 3
    }], _.a["ControlledHandler:#select/0"] = _._[
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
INSERT select
INSERT select/option0
INSERT select/option0/#text
INSERT select/option1
INSERT select/option1/#text
INSERT select/option2
INSERT select/option2/#text
INSERT #comment
INSERT span
INSERT span/#text
INSERT span/#comment
INSERT script
INSERT script/#text
```