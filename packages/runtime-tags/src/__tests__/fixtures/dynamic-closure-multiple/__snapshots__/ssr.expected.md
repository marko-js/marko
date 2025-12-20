# Write
```html
  <button></button><!--M_*1 #button/0--><!--M_[--><div>0<!--M_*3 #text/0--></div><div>0<!--M_*3 #text/1--></div><!--M_]1 #text/1 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={a:0,b:0,"ClosureScopes:a":_.d=new Set,"ClosureScopes:b":_.f=new Set},_.b={_:_.a,"#BranchAccessor":"#text/1"},_.e={_:_.b,"ClosureSignalIndex:a":0,"ClosureSignalIndex:b":0}],(_.d).add(_.e),(_.f).add(_.e),_.c),"__tests__/template.marko_0_a_b 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <!--M_[-->
    <div>
      0
      <!--M_*3 #text/0-->
    </div>
    <div>
      0
      <!--M_*3 #text/1-->
    </div>
    <!--M_]1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
          a: 0,
          b: 0,
          "ClosureScopes:a": _.d = new Set,
          "ClosureScopes:b": _.f = new Set
        }, _.b = {
          _: _.a,
          "#BranchAccessor": "#text/1"
        }, _.e = {
          _: _.b,
          "ClosureSignalIndex:a": 0,
          "ClosureSignalIndex:b": 0
        }], (_.d).add(_.e), (_.f).add(_.e), _.c),
        "__tests__/template.marko_0_a_b 1"
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
INSERT html/body/button
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/div0/#comment
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/div1/#comment
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```