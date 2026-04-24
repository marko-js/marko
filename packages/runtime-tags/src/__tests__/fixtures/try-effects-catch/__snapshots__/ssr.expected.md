# Write
```html
  <div></div><!--M_*1 #div/0--><!--M_[-->ERROR!<!--M_]1 #text/1 2--><div></div><!--M_*1 #div/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={},_.a={"#BranchAccessor":"#text/1"}],_.a["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.c),_.b),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<div />
<!--M_*1 #div/0-->
<!--M_[-->
ERROR!
<!--M_]1 #text/1 2-->
<div />
<!--M_*1 #div/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {}, _.a = {
      "#BranchAccessor": "#text/1"
    }], _.a["#CatchContent"] = _._[
      "__tests__/template.marko_2_content"
      ](_.c), _.b),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT #comment0
INSERT #comment1
INSERT #text
INSERT #comment2
INSERT div1
INSERT #comment3
INSERT script
INSERT script/#text
```