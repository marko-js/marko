# Write
```html
  <div><!--Body Text--><!--M_*2 #comment/0--><!--M_*1 #text/2--></div><span><!--Body Text--><!--M_*4 #comment/0--><!--M_*1 #text/5--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.d={"#scopeOffset/1":3,"#scopeOffset/4":5,"#childScope/0":_.a={},"#childScope/3":_.b={}},_.a,1,_.b],_.a["#TagVariable"]=_._["__tests__/template.marko_0_divName/var"](_.d),_.b["#TagVariable"]=_._["__tests__/template.marko_0_spanName/var"](_.d),_.c),"__tests__/tags/parent-el.marko_0 2 4"];M._.w()</script>
```

# Render End
```html
<div>
  <!--Body Text-->
  <!--M_*2 #comment/0-->
  <!--M_*1 #text/2-->
</div>
<span>
  <!--Body Text-->
  <!--M_*4 #comment/0-->
  <!--M_*1 #text/5-->
</span>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, _.d = {
      "#scopeOffset/1": 3,
      "#scopeOffset/4": 5,
      "#childScope/0": _.a = {},
      "#childScope/3": _.b = {}
    }, _.a, 1, _.b], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_divName/var"
      ](_.d), _.b["#TagVariable"] = _._[
      "__tests__/template.marko_0_spanName/var"
      ](_.d), _.c),
    "__tests__/tags/parent-el.marko_0 2 4"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT div/#comment0
INSERT div/#comment1
INSERT div/#comment2
INSERT span
INSERT span/#comment0
INSERT span/#comment1
INSERT span/#comment2
INSERT script
INSERT script/#text
```