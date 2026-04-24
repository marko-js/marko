# Write
```html
  <select multiple><option value=0></option><option value=1 selected></option><option value=2></option></select><!--M_*1 #select/0--><span>1<!--M_*1 #text/1--></span><button>Reset</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#select/0":3}],_.a["ControlledHandler:#select/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
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
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT select
INSERT select/option0
INSERT select/option1
INSERT select/option2
INSERT #comment0
INSERT span
INSERT span/#text
INSERT span/#comment
INSERT button
INSERT button/#text
INSERT #comment1
INSERT script
INSERT script/#text
```