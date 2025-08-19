# Write
```html
  <input type=checkbox><!--M_*1 #input/0--><span>false<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#input/0":0,checked:!1}],_.a["ControlledHandler:#input/0"]=_._["__tests__/template.marko_0/checkedChange"](_.a),_.b),"__tests__/template.marko_0",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
    />
    <!--M_*1 #input/0-->
    <span>
      false
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ControlledType:#input/0": 0,
          checked: !1
        }], _.a["ControlledHandler:#input/0"] = _._[
          "__tests__/template.marko_0/checkedChange"
          ](_.a), _.b),
        "__tests__/template.marko_0",
        1
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