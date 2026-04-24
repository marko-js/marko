# Write
```html
  <!--M_[--><button class=inc>1<!--M_*2 #text/1--></button><!--M_*2 #button/0--><!--M_]1 #text/0 2--><button class=reset>reset</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"ConditionalRenderer:#text/0":"__tests__/tags/counter.marko","#scopeOffset/1":3,"BranchScopes:#text/0":_.a={x:1}},_.a],_.a["#TagVariableChange"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.a),_.a["#TagVariable"]=_._["__tests__/template.marko_0_count/var"](_.c),_.b),"__tests__/tags/counter.marko_0_x 2 __tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<!--M_[-->
<button
  class="inc"
>
  1
  <!--M_*2 #text/1-->
</button>
<!--M_*2 #button/0-->
<!--M_]1 #text/0 2-->
<button
  class="reset"
>
  reset
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "ConditionalRenderer:#text/0": "__tests__/tags/counter.marko",
      "#scopeOffset/1": 3,
      "BranchScopes:#text/0": _.a = {
        x: 1
      }
    }, _.a], _.a["#TagVariableChange"] = _._[
      "__tests__/tags/counter.marko_0/valueChange"
      ](_.a), _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_count/var"
      ](_.c), _.b),
    "__tests__/tags/counter.marko_0_x 2 __tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #comment0
INSERT button0
INSERT button0/#text
INSERT button0/#comment
INSERT #comment1
INSERT #comment2
INSERT button1
INSERT button1/#text
INSERT #comment3
INSERT script
INSERT script/#text
```