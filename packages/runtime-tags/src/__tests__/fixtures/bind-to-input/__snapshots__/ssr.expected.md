# Write
```html
  <button id=controlled data-internal=0>0<!--M_*3 #text/0--></button><!--M_*2 #button/0--><button id=uncontrolled data-internal=0>0<!--M_*5 #text/0--></button><!--M_*4 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.b={"ClosureScopes:x":_.e=new Set,"#childScope/0":_.a={x:0},"#childScope/1":_.c={x:0}},_.a,_.f={_:_.b},_.c,_.g={_:_.b,"ClosureSignalIndex:x":1}],_.a.$countChange=_.a["TagVariableChange:x"]=_._["__tests__/template.marko_0/countChange"](_.b),(_.e).add(_.f),_.e.add(_.g),_.d),"__tests__/tags/counter.marko_0_x 2 4"];M._.w()</script>
```

# Render End
```html
<button
  data-internal="0"
  id="controlled"
>
  0
  <!--M_*3 #text/0-->
</button>
<!--M_*2 #button/0-->
<button
  data-internal="0"
  id="uncontrolled"
>
  0
  <!--M_*5 #text/0-->
</button>
<!--M_*4 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, _.b = {
      "ClosureScopes:x": _.e = new Set,
      "#childScope/0": _.a = {
        x: 0
      },
      "#childScope/1": _.c = {
        x: 0
      }
    }, _.a, _.f = {
      _: _.b
    }, _.c, _.g = {
      _: _.b,
      "ClosureSignalIndex:x": 1
    }], _.a.$countChange = _.a["TagVariableChange:x"] = _._[
      "__tests__/template.marko_0/countChange"
      ](_.b), (_.e).add(_.f), _.e.add(_.g), _.d),
    "__tests__/tags/counter.marko_0_x 2 4"
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
INSERT script
INSERT script/#text
```