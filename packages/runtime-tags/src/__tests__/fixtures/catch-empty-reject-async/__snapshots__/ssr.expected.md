# Write
```html
  a<!--M_[--><!--M_!^b-->b<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{"#BranchAccessor":"#text/0","#CatchContent":0}])]</script>
```

# Write
```html
  <!--M_!b--><!--M_]1 #text/0 2-->d<style M_>t{display:none}</style><t M_=b></t><script>REORDER_RUNTIME(M._);M._.w()</script>
```

# Render ASYNC
```html
a
<!--M_[-->
<!--M_!^b-->
b
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
  {
    "#BranchAccessor": "#text/0",
    "#CatchContent": 0
  }])]
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
<!--M_]1 #text/0 2-->
d
<script>
  REORDER_RUNTIME(M._);
  M._.w()
</script>
```

# Mutations
```
INSERT #comment
INSERT #comment1
INSERT #text1
INSERT #document/html/head/style
INSERT #document/html/head/style/#text
INSERT t
REMOVE #document/html/head/style after #text1
INSERT #document/html/head/style
REMOVE t after #text1
REMOVE script after #text
REMOVE #text after #comment
REMOVE #comment after #comment0
REMOVE #comment after #comment0
INSERT script
```