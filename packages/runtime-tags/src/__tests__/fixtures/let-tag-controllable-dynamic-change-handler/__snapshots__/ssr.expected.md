# Write
```html
  <button id=inc>1<!--M_*1 #text/1-->|<!>1<!--M_*1 #text/2--></button><!--M_*1 #button/0--><button id=toggle>toggle</button><!--M_*1 #button/3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={x:1,y:1}],_.a.yChange=_.a["TagVariableChange:y"]=_._["__tests__/template.marko_0/yChange"](_.a),_.b),"__tests__/template.marko_0 1 __tests__/template.marko_0_y 1"];M._.w()</script>
```

# Render End
```html
<button
  id="inc"
>
  1
  <!--M_*1 #text/1-->
  |
  <!---->
  1
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/0-->
<button
  id="toggle"
>
  toggle
</button>
<!--M_*1 #button/3-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      x: 1,
      y: 1
    }], _.a.yChange = _.a["TagVariableChange:y"] = _._[
      "__tests__/template.marko_0/yChange"
      ](_.a), _.b),
    "__tests__/template.marko_0 1 __tests__/template.marko_0_y 1"
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
INSERT button1/#text
INSERT #comment1
INSERT script
INSERT script/#text
```