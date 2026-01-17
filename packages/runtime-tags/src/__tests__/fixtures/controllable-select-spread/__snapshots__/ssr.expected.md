# Write
```html
  <select><option value=a>A</option><option value=b selected>B</option><option value=c>C</option></select><!--M_*2 #select/0--><span>b<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.d={"#childScope/0":_.a={"ControlledType:#select/0":3,"ControlledValue:#select/0":"b","BranchScopes:#select/0":{},"ConditionalRenderer:#select/0":"__tests__/template.marko_1_content",input:_.b={value:"b"}}},_.a],_.a["ControlledHandler:#select/0"]=_.b.valueChange=_._["__tests__/template.marko_0/valueChange"](_.d),_.b.content=_._["__tests__/template.marko_1_content"](_.d),_.c),"__tests__/tags/my-select.marko_0_input 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
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
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          "#childScope/0": _.a = {
            "ControlledType:#select/0": 3,
            "ControlledValue:#select/0": "b",
            "BranchScopes:#select/0":
            {},
            "ConditionalRenderer:#select/0": "__tests__/template.marko_1_content",
            input: _.b = {
              value: "b"
            }
          }
        }, _.a], _.a["ControlledHandler:#select/0"] = _.b.valueChange = _._[
          "__tests__/template.marko_0/valueChange"
          ](_.d), _.b.content = _._[
          "__tests__/template.marko_1_content"
          ](_.d), _.c),
        "__tests__/tags/my-select.marko_0_input 2"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/select
INSERT html/body/select/option0
INSERT html/body/select/option0/#text
INSERT html/body/select/option1
INSERT html/body/select/option1/#text
INSERT html/body/select/option2
INSERT html/body/select/option2/#text
INSERT html/body/#comment
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/script
INSERT html/body/script/#text
```