# Write
```html
  <div id=target><span data-selected>0</span><!--M_*2 #span/0--><span>1</span><!--M_*3 #span/0--><span>2</span><!--M_*4 #span/0--></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e=[0,_.a={"BranchScopes:#div/0":[_.b={"#LoopKey":0},_.c={"#LoopKey":1},_.d={"#LoopKey":2}],selected:0},_.b,_.c,_.d],_.b._=_.c._=_.d._=_.a,_.e),"__tests__/template.marko_0_selected 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      id="target"
    >
      <span
        data-selected=""
      >
        0
      </span>
      <!--M_*2 #span/0-->
      <span>
        1
      </span>
      <!--M_*3 #span/0-->
      <span>
        2
      </span>
      <!--M_*4 #span/0-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          "BranchScopes:#div/0": [_.b = {
            "#LoopKey": 0
          }, _.c = {
            "#LoopKey": 1
          }, _.d = {
            "#LoopKey": 2
          }],
          selected: 0
        }, _.b, _.c, _.d], _.b._ = _.c._ = _.d._ = _.a, _.e),
        "__tests__/template.marko_0_selected 1"
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
INSERT html/body/div
INSERT html/body/div/span0
INSERT html/body/div/span0/#text
INSERT html/body/div/#comment0
INSERT html/body/div/span1
INSERT html/body/div/span1/#text
INSERT html/body/div/#comment1
INSERT html/body/div/span2
INSERT html/body/div/span2/#text
INSERT html/body/div/#comment2
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```