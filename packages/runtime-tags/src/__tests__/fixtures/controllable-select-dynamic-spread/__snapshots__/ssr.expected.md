# Write
```html
  <select><option value=a>A</option><!--M_*3 #option/0--><option value=b selected>B</option><!--M_*3 #option/1--><option value=c>C</option><!--M_*3 #option/2--></select><!--M_'1 #text/0 2--><span>b<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"ConditionalRenderer:#text/0":"select",tag:"select"},_.a={"ControlledType:#select/0":3,"#Renderer":"select"}],_.a["ControlledHandler:#select/0"]=_._["__tests__/template.marko_0/valueChange"](_.c),_.b),"__tests__/template.marko_1 3 _dynamicTagScript 2"];M._.w()</script>
```

# Render End
```html
<select>
  <option
    value="a"
  >
    A
  </option>
  <!--M_*3 #option/0-->
  <option
    selected=""
    value="b"
  >
    B
  </option>
  <!--M_*3 #option/1-->
  <option
    value="c"
  >
    C
  </option>
  <!--M_*3 #option/2-->
</select>
<!--M_'1 #text/0 2-->
<span>
  b
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "ConditionalRenderer:#text/0": "select",
      tag: "select"
    }, _.a = {
      "ControlledType:#select/0": 3,
      "#Renderer": "select"
    }], _.a["ControlledHandler:#select/0"] = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.c), _.b),
    "__tests__/template.marko_1 3 _dynamicTagScript 2"
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
INSERT select/#comment0
INSERT select/option1
INSERT select/option1/#text
INSERT select/#comment1
INSERT select/option2
INSERT select/option2/#text
INSERT select/#comment2
INSERT #comment
INSERT span
INSERT span/#text
INSERT span/#comment
INSERT script
INSERT script/#text
```