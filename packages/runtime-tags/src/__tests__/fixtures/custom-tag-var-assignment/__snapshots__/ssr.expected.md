# Write
```html
  <button class=inc-child>1<!--M_*2 #text/1--></button><!--M_*2 #button/0--><button class=inc-parent>1<!--M_*1 #text/3--></button><!--M_*1 #button/2--><button class=reset>reset</button><!--M_*1 #button/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"#scopeOffset/1":3,count:1,"#childScope/0":_.a={x:1}},_.a],_.a["#TagVariableChange"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["#TagVariable"]=_._["__tests__/template.marko_0_count/var"](_.c),_.b),"__tests__/tags/counter.marko_0_x 2 __tests__/template.marko_0 1 __tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<button
  class="inc-child"
>
  1
  <!--M_*2 #text/1-->
</button>
<!--M_*2 #button/0-->
<button
  class="inc-parent"
>
  1
  <!--M_*1 #text/3-->
</button>
<!--M_*1 #button/2-->
<button
  class="reset"
>
  reset
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/1": 3,
      count: 1,
      "#childScope/0": _.a = {
        x: 1
      }
    }, _.a], _.a["#TagVariableChange"] = _._[
      "__tests__/tags/counter.marko_0/valueChange"
      ](_.a), _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_count/var"
      ](_.c), _.b),
    "__tests__/tags/counter.marko_0_x 2 __tests__/template.marko_0 1 __tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button0
INSERT button0/#text
INSERT button0/#comment
INSERT #comment0
INSERT button1
INSERT button1/#text
INSERT button1/#comment
INSERT #comment1
INSERT button2
INSERT button2/#text
INSERT #comment2
INSERT script
INSERT script/#text
```