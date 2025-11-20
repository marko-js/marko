# Write
```html
  <button id=controlled data-internal=0>0<!--M_*3 #text/0--></button><!--M_*2 #button/0--><button id=uncontrolled data-internal=0>0<!--M_*5 #text/0--></button><!--M_*4 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.b={"ClosureScopes:x":_.e=new Set,"#childScope/0":_.a={x:0},"#childScope/1":_.c={x:0}},_.a,_.f={_:_.b,"ClosureSignalIndex:x":0},_.c,_.g={_:_.b,"ClosureSignalIndex:x":1}],_.a.$countChange=_.a["TagVariableChange:x"]=_._["__tests__/template.marko_0/countChange"](_.b),(_.e).add(_.f),_.e.add(_.g),_.d),"__tests__/tags/counter.marko_0_x 2 4"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
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
          _: _.b,
          "ClosureSignalIndex:x": 0
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
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button0
INSERT html/body/button0/#text
INSERT html/body/button0/#comment
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text
INSERT html/body/button1/#comment
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```