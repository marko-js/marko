# Render
```html
<!--M_[-->
<!--M_!^b-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#CatchContent": _.e = {}
  }, _.b = {
    "#BranchAccessor": "#text/1"
  }, _.c = {
    "#BranchAccessor": "#text/2"
  }], _.a["#CatchContent"] = _._[
    "__tests__/template.marko_2_content"
    ](_.e), _.b["#CatchContent"] = _._[
    "__tests__/template.marko_5_content"
    ](_.e), _.c["#CatchContent"] = _._[
    "__tests__/template.marko_8_content"
    ](_.e), _.d)]
</script>
```


# Render FLUSH
```html
<!--M_[-->
<!--M_!^b-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#CatchContent": _.e = {}
  }, _.b = {
    "#BranchAccessor": "#text/1"
  }, _.c = {
    "#BranchAccessor": "#text/2"
  }], _.a["#CatchContent"] = _._[
    "__tests__/template.marko_2_content"
    ](_.e), _.b["#CatchContent"] = _._[
    "__tests__/template.marko_5_content"
    ](_.e), _.c["#CatchContent"] = _._[
    "__tests__/template.marko_8_content"
    ](_.e), _.d)]
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

# Render FLUSH
```html
<!--M_[-->
<!--M_!^b-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#CatchContent": _.e = {}
  }, _.b = {
    "#BranchAccessor": "#text/1"
  }, _.c = {
    "#BranchAccessor": "#text/2"
  }], _.a["#CatchContent"] = _._[
    "__tests__/template.marko_2_content"
    ](_.e), _.b["#CatchContent"] = _._[
    "__tests__/template.marko_5_content"
    ](_.e), _.c["#CatchContent"] = _._[
    "__tests__/template.marko_8_content"
    ](_.e), _.d)]
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
<!--M_[-->
<!--M_!^d-->
<!--M_[-->
<div>
  Resolved C: C Value
</div>
<button>
  Before
</button>
<!--M_*7 #button/1-->
<!--M_]4 #text/0 7-->
<!--M_!d-->
<!--M_]1 #text/2 4-->
<script>
  M._.r.push(
    "__tests__/template.marko_9 7"
    );
  M._.w()
</script>
```

# Mutations
```
INSERT div0
INSERT div0/#text
INSERT #comment2
INSERT #comment3
INSERT #comment4
INSERT #comment
INSERT #comment
INSERT #comment5
INSERT #comment6
INSERT #comment7
INSERT #comment8
INSERT div1
INSERT div1/#text
INSERT button
INSERT button/#text
INSERT #comment9
INSERT #comment10
INSERT #comment11
INSERT #comment12
REMOVE #comment after #comment4
REMOVE #comment after #comment4
INSERT #text1
INSERT #text0
INSERT #text2
INSERT #text3
INSERT #text4
INSERT script2
```

# Render
```js
container.querySelector("button").click();
```
```html
<!--M_[-->
<!--M_!^b-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.d = [0, 1, _.a = {
    "#BranchAccessor": "#text/0",
    "#CatchContent": _.e = {}
  }, _.b = {
    "#BranchAccessor": "#text/1"
  }, _.c = {
    "#BranchAccessor": "#text/2"
  }], _.a["#CatchContent"] = _._[
    "__tests__/template.marko_2_content"
    ](_.e), _.b["#CatchContent"] = _._[
    "__tests__/template.marko_5_content"
    ](_.e), _.c["#CatchContent"] = _._[
    "__tests__/template.marko_8_content"
    ](_.e), _.d)]
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
<!--M_[-->
<!--M_!^d-->
<!--M_[-->
<div>
  Resolved C: C Value
</div>
<button>
  After
</button>
<!--M_*7 #button/1-->
<!--M_]4 #text/0 7-->
<!--M_!d-->
<!--M_]1 #text/2 4-->
<script>
  M._.r.push(
    "__tests__/template.marko_9 7"
    );
  M._.w()
</script>
```

# Mutations
```
REMOVE #text in button
INSERT button/#text
```