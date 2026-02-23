# Write
```html
  <select multiple><option value=0></option><option value=1 selected></option><option value=2></option></select><!--M_*1 #select/0--><span>1<!--M_*1 #text/1--></span><button>Reset</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#select/0":3}],_.a["ControlledHandler:#select/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <select
      multiple=""
    >
      <option
        value="0"
      />
      <option
        selected=""
        value="1"
      />
      <option
        value="2"
      />
    </select>
    <!--M_*1 #select/0-->
    <span>
      1
      <!--M_*1 #text/1-->
    </span>
    <button>
      Reset
    </button>
    <!--M_*1 #button/2-->
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
INSERT html/body/select/option1
INSERT html/body/select/option2
INSERT html/body/#comment0
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```