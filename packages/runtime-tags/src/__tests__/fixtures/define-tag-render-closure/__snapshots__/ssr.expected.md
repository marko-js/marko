# Write
```html
  <div>1<!--M_*2 #text/0--></div><!--M_[--><div>1<!--M_*4 #text/0--></div><!--M_]1 #text/1 3--><button>1<!--M_*1 #text/3--></button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={x:1,"ClosureScopes:x":_.c=new Set},_.d={_:_.a,"ClosureSignalIndex:x":0},1,_.e={_:_.a,"ClosureSignalIndex:x":0,"#ClosestBranchId":3}],(_.c).add(_.d),_.c.add(_.e),_.b),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_[-->
    <div>
      1
      <!--M_*4 #text/0-->
    </div>
    <!--M_]1 #text/1 3-->
    <button>
      1
      <!--M_*1 #text/3-->
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          x: 1,
          "ClosureScopes:x": _.c = new Set
        }, _.d = {
          _: _.a,
          "ClosureSignalIndex:x": 0
        }, 1, _.e = {
          _: _.a,
          "ClosureSignalIndex:x": 0,
          "#ClosestBranchId": 3
        }], (_.c).add(_.d), _.c.add(_.e), _.b),
        "__tests__/template.marko_0_x 1"
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
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/div0/#comment
INSERT html/body/#comment0
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/div1/#comment
INSERT html/body/#comment1
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```