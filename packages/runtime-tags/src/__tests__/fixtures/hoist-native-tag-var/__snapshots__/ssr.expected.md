# Write
```html
  <div></div><!--M_*3 #div/0--><hr><div></div><!--M_*6 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.f=[0,_.g={"BranchScopes:#text/0":_.a={"BranchScopes:#text/0":_.b={}},"BranchScopes:#text/2":_.e={}},_.a,_.b,{input:_.c={}},{input:_.d={}},_.e],_.d.value=_._["__tests__/template.marko_0_#div/hoist"](_.g),_.c.value=_._["__tests__/template.marko_2_#div"](_.b),_.f),"__tests__/tags/child.marko_0_input 4 5 __tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*3 #div/0-->
    <hr />
    <div />
    <!--M_*6 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.f = [0, _.g = {
          "BranchScopes:#text/0": _.a = {
            "BranchScopes:#text/0": _.b = {}
          },
          "BranchScopes:#text/2": _.e = {}
        }, _.a, _.b,
        {
          input: _.c = {}
        },
        {
          input: _.d = {}
        }, _.e], _.d.value = _._[
          "__tests__/template.marko_0_#div/hoist"
          ](_.g), _.c.value = _._[
          "__tests__/template.marko_2_#div"
          ](_.b), _.f),
        "__tests__/tags/child.marko_0_input 4 5 __tests__/template.marko_0 1"
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
INSERT html/body/#comment0
INSERT html/body/hr
INSERT html/body/div1
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```