# Render
```html
<!--M_[-->
<!--M_!^b-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#CatchContent": _.d = {}
  }, _.b = {
    "#BranchAccessor": "#text/1"
  }], _.a["#CatchContent"] = _._[
    "__tests__/template.marko_2_content"
    ](_.d), _.b["#CatchContent"] = _._[
    "__tests__/template.marko_5_content"
    ](_.d), _.c)]
</script>
```


# Write
```html
  <style M_>t{display:none}</style><t M_=c>Rejected B</t><script>REORDER_RUNTIME(M._);M._.w()</script>
```

# Render FLUSH
```html
<!--M_[-->
<!--M_!^b-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#CatchContent": _.d = {}
  }, _.b = {
    "#BranchAccessor": "#text/1"
  }], _.a["#CatchContent"] = _._[
    "__tests__/template.marko_2_content"
    ](_.d), _.b["#CatchContent"] = _._[
    "__tests__/template.marko_5_content"
    ](_.d), _.c)]
</script>
<script>
  REORDER_RUNTIME(M._);
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html/head/style
INSERT #document/html/head/style/#text
INSERT t
INSERT t/#text
REMOVE #document/html/head/style after script0
INSERT #document/html/head/style
REMOVE t after script0
INSERT script1
```

# Write
```html
  <div>Resolved A: A Value</div><!--M_!b--><!--M_]1 #text/0 2--><!--M_[--><!--M_!^c--><!--M_!c--><!--M_]1 #text/1 3--><script>M._.w()</script>
```

# Render FLUSH
```html
<!--M_[-->
<!--M_!^b-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.c = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#CatchContent": _.d = {}
  }, _.b = {
    "#BranchAccessor": "#text/1"
  }], _.a["#CatchContent"] = _._[
    "__tests__/template.marko_2_content"
    ](_.d), _.b["#CatchContent"] = _._[
    "__tests__/template.marko_5_content"
    ](_.d), _.c)]
</script>
<script>
  REORDER_RUNTIME(M._);
  M._.w()
</script>
<div>
  Resolved A: A Value
</div>
<!--M_!b-->
<!--M_]1 #text/0 2-->
<!--M_[-->
Rejected B
<!--M_]1 #text/1 3-->
<script>
  M._.w()
</script>
```

# Mutations
```
INSERT div
INSERT div/#text
INSERT #comment2
INSERT #comment3
INSERT #comment4
INSERT #comment
INSERT #comment
INSERT #comment5
REMOVE #comment after #comment4
REMOVE #comment after #comment4
INSERT #text
INSERT script2
```