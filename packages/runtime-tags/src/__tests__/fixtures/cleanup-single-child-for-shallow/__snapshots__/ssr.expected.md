# Write
```html
  <button>Toggle</button><!--M_*1 #button/0--><div></div><!--M_*1 #div/1--><div>1<!--M_*3 #text/0--></div><div>2<!--M_*5 #text/0--></div><div>3<!--M_*7 #text/0--></div><!--M_|1 #text/2 6 4 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e=[0,_.a={items:[1,2,3]},{"#childScope/0":_.b={name:1,"#ClosestBranchId":2}},_.b,{"#childScope/0":_.c={name:2,"#ClosestBranchId":4}},_.c,{"#childScope/0":_.d={name:3,"#ClosestBranchId":6}},_.d],_.a.write=_.b.write=_.c.write=_.d.write=_._["__tests__/template.marko_0/write"](_.a),_.e),"__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_items 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/0-->
    <div />
    <!--M_*1 #div/1-->
    <div>
      1
      <!--M_*3 #text/0-->
    </div>
    <div>
      2
      <!--M_*5 #text/0-->
    </div>
    <div>
      3
      <!--M_*7 #text/0-->
    </div>
    <!--M_|1 #text/2 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          items: [1, 2, 3]
        },
        {
          "#childScope/0": _.b = {
            name: 1,
            "#ClosestBranchId": 2
          }
        }, _.b,
        {
          "#childScope/0": _.c = {
            name: 2,
            "#ClosestBranchId": 4
          }
        }, _.c,
        {
          "#childScope/0": _.d = {
            name: 3,
            "#ClosestBranchId": 6
          }
        }, _.d], _.a.write = _.b.write = _.c.write = _.d.write = _._[
          "__tests__/template.marko_0/write"
          ](_.a), _.e),
        "__tests__/tags/child.marko_0_name_write 3 5 7 __tests__/template.marko_0_items 1"
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
INSERT html/body/button/#text
INSERT html/body/#comment0
INSERT html/body/div0
INSERT html/body/#comment1
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/div1/#comment
INSERT html/body/div2
INSERT html/body/div2/#text
INSERT html/body/div2/#comment
INSERT html/body/div3
INSERT html/body/div3/#text
INSERT html/body/div3/#comment
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```