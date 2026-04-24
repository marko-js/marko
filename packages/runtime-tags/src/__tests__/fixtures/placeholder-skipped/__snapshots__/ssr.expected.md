# Write
```html
  a<!--M_[-->b<!--M_]1 #text/0 2-->c<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,1,_.a={"#BranchAccessor":"#text/0","#PlaceholderContent":_.c={}}],_.a["#PlaceholderContent"]=_._["__tests__/template.marko_2_content"](_.c),_.b)]</script>
```

# Write
```html
  de
```

# Render ASYNC
```html
a
<!--M_[-->
b
<!--M_]1 #text/0 2-->
c
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#PlaceholderContent": _.c = {}
  }], _.a["#PlaceholderContent"] = _._[
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
INSERT #text1
INSERT #comment1
INSERT #text2
INSERT script
```

# Render End
```html
a
<!--M_[-->
b
<!--M_]1 #text/0 2-->
c
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#PlaceholderContent": _.c = {}
  }], _.a["#PlaceholderContent"] = _._[
    "__tests__/template.marko_2_content"
    ](_.c), _.b)]
</script>
de
```

# Mutations
```
INSERT #text3
```