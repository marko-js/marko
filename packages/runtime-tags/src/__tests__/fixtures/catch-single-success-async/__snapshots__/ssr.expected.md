# Write
```html
  a<!--M_[--><!--M_!^b-->b<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,1,_.a={"#BranchAccessor":"#text/0","#CatchContent":_.c={}}],_.a["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.c),_.b)]</script>
```

# Write
```html
  cd<!--M_!b--><!--M_]1 #text/0 2-->fgh
```

# Render ASYNC
```html
a
<!--M_[-->
<!--M_!^b-->
b
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#CatchContent": _.c = {}
  }], _.a["#CatchContent"] = _._[
    "__tests__/template.marko_2_content"
    ](_.c), _.b)]
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #text0
INSERT #comment0
INSERT #comment1
INSERT #text1
INSERT script
```

# Render End
```html
a
<!--M_[-->
<!--M_!^b-->
b
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#CatchContent": _.c = {}
  }], _.a["#CatchContent"] = _._[
    "__tests__/template.marko_2_content"
    ](_.c), _.b)]
</script>
cd
<!--M_!b-->
<!--M_]1 #text/0 2-->
fgh
```

# Mutations
```
INSERT #text2
INSERT #comment2
INSERT #comment3
INSERT #text3
```