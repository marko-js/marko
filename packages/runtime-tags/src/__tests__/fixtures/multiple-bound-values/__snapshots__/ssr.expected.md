# Write
```html
  <button>0<!--M_*2 #text/1--></button><!--M_*2 #button/0--><button>0<!--M_*2 #text/3--></button><!--M_*2 #button/2--><div>0<!--M_*1 #text/1--> <!>0<!--M_*1 #text/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"#childScope/0":_.a={count1:0,count2:0}},_.a],_.a.input_count1Change=_.a["TagVariableChange:count1"]=_._["__tests__/template.marko_0/count1Change"](_.c),_.a.input_count2Change=_.a["TagVariableChange:count2"]=_._["__tests__/template.marko_0/count2Change"](_.c),_.b),"__tests__/tags/2counters.marko_0_count2 2 __tests__/tags/2counters.marko_0_count1 2"];M._.w()</script>
```

# Render End
```html
<button>
  0
  <!--M_*2 #text/1-->
</button>
<!--M_*2 #button/0-->
<button>
  0
  <!--M_*2 #text/3-->
</button>
<!--M_*2 #button/2-->
<div>
  0
  <!--M_*1 #text/1-->
   
  <!---->
  0
  <!--M_*1 #text/2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
        "#childScope/0": _.a = {
          count1: 0,
          count2: 0
        }
      }, _.a], _.a.input_count1Change = _.a["TagVariableChange:count1"] = _._[
        "__tests__/template.marko_0/count1Change"
        ](_.c), _.a.input_count2Change = _.a["TagVariableChange:count2"] = _
      ._[
        "__tests__/template.marko_0/count2Change"
        ](_.c), _.b),
    "__tests__/tags/2counters.marko_0_count2 2 __tests__/tags/2counters.marko_0_count1 2"
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
INSERT div
INSERT div/#text0
INSERT div/#comment0
INSERT div/#text1
INSERT div/#comment1
INSERT div/#text2
INSERT div/#comment2
INSERT script
INSERT script/#text
```