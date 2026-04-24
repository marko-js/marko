# Write
```html
  <!--M_[-->Hello<!--M_]1 #text/0 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{"#BranchAccessor":"#text/0"}])]</script>
```

# Render End
```html
<!--M_[-->
Hello
<!--M_]1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
  {
    "#BranchAccessor": "#text/0"
  }])]
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #comment0
INSERT #text
INSERT #comment1
INSERT script
INSERT script/#text
```