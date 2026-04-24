# Write
```html
  <select><option value=a>A</option><option value=b selected>B</option><option value=c>C</option></select><!--M_*2 #select/0--><span>b<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.e={"#childScope/0":_.a={"ControlledType:#select/0":3,"BranchScopes:#select/0":_.c={},"ConditionalRenderer:#select/0":"__tests__/template.marko_1_content",input:_.b={value:"b"}}},_.a,_.c],_.a["ControlledHandler:#select/0"]=_.b.valueChange=_._["__tests__/template.marko_0/valueChange"](_.e),_.b.content=_._["__tests__/template.marko_1_content"](_.e),_.d),"__tests__/tags/my-select.marko_0_input 2"];M._.w()</script>
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
<!--M_*2 #select/0-->
<span>
  b
  <!--M_*1 #text/1-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, _.e = {
        "#childScope/0": _.a = {
          "ControlledType:#select/0": 3,
          "BranchScopes:#select/0": _.c = {},
          "ConditionalRenderer:#select/0": "__tests__/template.marko_1_content",
          input: _.b = {
            value: "b"
          }
        }
      }, _.a, _.c], _.a["ControlledHandler:#select/0"] = _.b.valueChange = _
      ._[
        "__tests__/template.marko_0/valueChange"
        ](_.e), _.b.content = _._[
        "__tests__/template.marko_1_content"
        ](_.e), _.d),
    "__tests__/tags/my-select.marko_0_input 2"
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