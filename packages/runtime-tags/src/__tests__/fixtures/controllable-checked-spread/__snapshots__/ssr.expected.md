# Write
```html
  <input type=checkbox><!--M_*2 #input/0--><span>false<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.d={"#childScope/0":_.a={"ControlledType:#input/0":0,input:_.b={checked:!1}}},_.a],_.a["ControlledHandler:#input/0"]=_.b.checkedChange=_._["__tests__/template.marko_0/checkedChange"](_.d),_.c),"__tests__/tags/checkbox.marko_0_input 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
    />
    <!--M_*2 #input/0-->
    <span>
      false
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
            "#childScope/0": _.a = {
              "ControlledType:#input/0": 0,
              input: _.b = {
                checked: !1
              }
            }
          }, _.a], _.a["ControlledHandler:#input/0"] = _.b.checkedChange = _
          ._[
            "__tests__/template.marko_0/checkedChange"
            ](_.d), _.c),
        "__tests__/tags/checkbox.marko_0_input 2"
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
INSERT html/body/input
INSERT html/body/#comment
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/script
INSERT html/body/script/#text
```