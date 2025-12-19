# Write
```html
  <select><option selected>0</option><!--M_*2 #option/0--><option>1</option><!--M_*3 #option/0--><option>2</option><!--M_*4 #option/0--></select><!--M_*1 #select/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e=[0,_.a={"BranchScopes:#select/0":[_.b={"#LoopKey":0},_.c={"#LoopKey":1},_.d={"#LoopKey":2}]},_.b,_.c,_.d],_.b._=_.c._=_.d._=_.a,_.e),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <select>
      <option
        selected=""
      >
        0
      </option>
      <!--M_*2 #option/0-->
      <option>
        1
      </option>
      <!--M_*3 #option/0-->
      <option>
        2
      </option>
      <!--M_*4 #option/0-->
    </select>
    <!--M_*1 #select/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.e = [0, _.a = {
          "BranchScopes:#select/0": [_.b = {
            "#LoopKey": 0
          }, _.c = {
            "#LoopKey": 1
          }, _.d = {
            "#LoopKey": 2
          }]
        }, _.b, _.c, _.d], _.b._ = _.c._ = _.d._ = _.a, _.e),
        "__tests__/template.marko_0 1"
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
INSERT html/body/select
INSERT html/body/select/option0
INSERT html/body/select/option0/#text
INSERT html/body/select/#comment0
INSERT html/body/select/option1
INSERT html/body/select/option1/#text
INSERT html/body/select/#comment1
INSERT html/body/select/option2
INSERT html/body/select/option2/#text
INSERT html/body/select/#comment2
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```