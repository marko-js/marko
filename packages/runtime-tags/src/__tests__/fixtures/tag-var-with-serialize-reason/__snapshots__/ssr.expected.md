# Write
```html
  <button>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><span></span><!--M_|2 #text/0 3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"#scopeOffset/3":4,count:1,"#childScope/2":_.a={}},_.a],_.a["#TagVariable"]=_._["__tests__/template.marko_0_x/var"](_.c),_.b),"__tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<span />
<!--M_|2 #text/0 3-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.c = {
      "#scopeOffset/3": 4,
      count: 1,
      "#childScope/2": _.a = {}
    }, _.a], _.a["#TagVariable"] = _._[
      "__tests__/template.marko_0_x/var"
      ](_.c), _.b),
    "__tests__/template.marko_0_count 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment0
INSERT span
INSERT #comment1
INSERT script
INSERT script/#text
```