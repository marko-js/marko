# Render
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


# Render FLUSH
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