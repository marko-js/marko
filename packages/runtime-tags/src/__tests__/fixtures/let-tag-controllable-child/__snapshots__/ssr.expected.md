# Write
```html
  <button>1<!--M_*2 #text/1-->|<!>1<!--M_*2 #text/2--></button><!--M_*2 #button/0--><button>1<!--M_*2 #text/4-->|<!>1<!--M_*2 #text/5--></button><!--M_*2 #button/3--><button>1<!--M_*2 #text/7-->|<!>1<!--M_*2 #text/8--></button><!--M_*2 #button/6-->source=<!>1<!--M_*1 #text/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"#childScope/0":_.a={input_value:1,state:1,otherState:1,thirdState:1}},_.a],_.a.input_valueChange=_.a["TagVariableChange:state"]=_.a["TagVariableChange:otherState"]=_.a["TagVariableChange:thirdState"]=_._["__tests__/template.marko_0/valueChange"](_.c),_.b),"__tests__/tags/child.marko_0_thirdState 2 __tests__/tags/child.marko_0_otherState 2 __tests__/tags/child.marko_0_state 2"];M._.w()</script>
```

# Render End
```html
<button>
  1
  <!--M_*2 #text/1-->
  |
  <!---->
  1
  <!--M_*2 #text/2-->
</button>
<!--M_*2 #button/0-->
<button>
  1
  <!--M_*2 #text/4-->
  |
  <!---->
  1
  <!--M_*2 #text/5-->
</button>
<!--M_*2 #button/3-->
<button>
  1
  <!--M_*2 #text/7-->
  |
  <!---->
  1
  <!--M_*2 #text/8-->
</button>
<!--M_*2 #button/6-->
source=
<!---->
1
<!--M_*1 #text/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
        "#childScope/0": _.a = {
          input_value: 1,
          state: 1,
          otherState: 1,
          thirdState: 1
        }
      }, _.a], _.a.input_valueChange = _.a["TagVariableChange:state"] = _.a[
        "TagVariableChange:otherState"] = _.a[
      "TagVariableChange:thirdState"] = _._[
        "__tests__/template.marko_0/valueChange"
        ](_.c), _.b),
    "__tests__/tags/child.marko_0_thirdState 2 __tests__/tags/child.marko_0_otherState 2 __tests__/tags/child.marko_0_state 2"
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
INSERT button0/#text0
INSERT button0/#comment0
INSERT button0/#text1
INSERT button0/#comment1
INSERT button0/#text2
INSERT button0/#comment2
INSERT #comment0
INSERT button1
INSERT button1/#text0
INSERT button1/#comment0
INSERT button1/#text1
INSERT button1/#comment1
INSERT button1/#text2
INSERT button1/#comment2
INSERT #comment1
INSERT button2
INSERT button2/#text0
INSERT button2/#comment0
INSERT button2/#text1
INSERT button2/#comment1
INSERT button2/#text2
INSERT button2/#comment2
INSERT #comment2
INSERT #text0
INSERT #comment3
INSERT #text1
INSERT #comment4
INSERT script
INSERT script/#text
```