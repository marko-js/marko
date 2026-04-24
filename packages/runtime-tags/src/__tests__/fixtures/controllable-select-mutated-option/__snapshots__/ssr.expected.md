# Write
```html
  <form><select><option value=1 selected>1<!--M_*2 #text/1--></option><!--M_*2 #option/0--><option value=2>2<!--M_*3 #text/1--></option><!--M_*3 #option/0--><option value=3>3<!--M_*4 #text/1--></option><!--M_*4 #option/0--><!--M_}1 #select/0 4 3 2--></select><button type=reset>reset</button></form><div>1<!--M_*1 #text/1--></div><button class=remove>Remove option</button><!--M_*1 #button/2--><button class=add>Add option</button><!--M_*1 #button/3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#select/0":3,options:[1,2,3]},{"#LoopKey":1},{"#LoopKey":2},{"#LoopKey":3}],_.a["ControlledHandler:#select/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0_options 1 __tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<form>
  <select>
    <option
      selected=""
      value="1"
    >
      1
      <!--M_*2 #text/1-->
    </option>
    <!--M_*2 #option/0-->
    <option
      value="2"
    >
      2
      <!--M_*3 #text/1-->
    </option>
    <!--M_*3 #option/0-->
    <option
      value="3"
    >
      3
      <!--M_*4 #text/1-->
    </option>
    <!--M_*4 #option/0-->
    <!--M_}1 #select/0 4 3 2-->
  </select>
  <button
    type="reset"
  >
    reset
  </button>
</form>
<div>
  1
  <!--M_*1 #text/1-->
</div>
<button
  class="remove"
>
  Remove option
</button>
<!--M_*1 #button/2-->
<button
  class="add"
>
  Add option
</button>
<!--M_*1 #button/3-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      "ControlledType:#select/0": 3,
      options: [1, 2, 3]
    },
    {
      "#LoopKey": 1
    },
    {
      "#LoopKey": 2
    },
    {
      "#LoopKey": 3
    }], _.a["ControlledHandler:#select/0"] = _._[
      "__tests__/template.marko_0/valueChange"
      ](_.a), _.b),
    "__tests__/template.marko_0_options 1 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT form
INSERT form/select
INSERT form/select/option0
INSERT form/select/option0/#text
INSERT form/select/option0/#comment
INSERT form/select/#comment0
INSERT form/select/option1
INSERT form/select/option1/#text
INSERT form/select/option1/#comment
INSERT form/select/#comment1
INSERT form/select/option2
INSERT form/select/option2/#text
INSERT form/select/option2/#comment
INSERT form/select/#comment2
INSERT form/select/#comment3
INSERT form/button
INSERT form/button/#text
INSERT div
INSERT div/#text
INSERT div/#comment
INSERT button0
INSERT button0/#text
INSERT #comment0
INSERT button1
INSERT button1/#text
INSERT #comment1
INSERT script
INSERT script/#text
```