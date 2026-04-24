# Render
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


# Render FLUSH
```html
a
<!--M_[-->
ERROR!
<!--M_]1 #text/0 2-->
def
<script>
  REORDER_RUNTIME(M._);
  M._.w()
</script>
```

# Mutations
```
INSERT #comment
INSERT #comment1
INSERT #text2
INSERT #document/html/head/style
INSERT #document/html/head/style/#text
INSERT t
INSERT #text1
REMOVE #document/html/head/style after #text2
INSERT #document/html/head/style
REMOVE t after #text2
REMOVE script after #text
REMOVE #text after #comment
REMOVE #comment after #comment0
REMOVE #comment after #comment0
INSERT #text1
INSERT script
```