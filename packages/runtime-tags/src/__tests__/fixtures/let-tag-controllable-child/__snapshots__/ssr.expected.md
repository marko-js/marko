# Write
```html
  <button>1<!--M_*2 #text/1-->|<!>1<!--M_*2 #text/2--></button><!--M_*2 #button/0--><button>1<!--M_*2 #text/4-->|<!>1<!--M_*2 #text/5--></button><!--M_*2 #button/3-->source=<!>1<!--M_*1 #text/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"#childScope/0":_.a={input_value:1,state:1,otherState:1}},_.a],_.a.input_valueChange=_.a["TagVariableChange:state"]=_.a["TagVariableChange:otherState"]=_._["__tests__/template.marko_0/valueChange"](_.c),_.b),"__tests__/tags/child.marko_0_otherState 2 __tests__/tags/child.marko_0_state 2"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
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
              otherState: 1
            }
          }, _.a], _.a.input_valueChange = _.a["TagVariableChange:state"] = _
          .a["TagVariableChange:otherState"] = _._[
            "__tests__/template.marko_0/valueChange"
            ](_.c), _.b),
        "__tests__/tags/child.marko_0_otherState 2 __tests__/tags/child.marko_0_state 2"
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
INSERT html/body/button0
INSERT html/body/button0/#text0
INSERT html/body/button0/#comment0
INSERT html/body/button0/#text1
INSERT html/body/button0/#comment1
INSERT html/body/button0/#text2
INSERT html/body/button0/#comment2
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text0
INSERT html/body/button1/#comment0
INSERT html/body/button1/#text1
INSERT html/body/button1/#comment1
INSERT html/body/button1/#text2
INSERT html/body/button1/#comment2
INSERT html/body/#comment1
INSERT html/body/#text0
INSERT html/body/#comment2
INSERT html/body/#text1
INSERT html/body/#comment3
INSERT html/body/script
INSERT html/body/script/#text
```