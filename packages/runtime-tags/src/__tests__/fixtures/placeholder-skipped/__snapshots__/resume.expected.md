# Render
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


# Render FLUSH
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