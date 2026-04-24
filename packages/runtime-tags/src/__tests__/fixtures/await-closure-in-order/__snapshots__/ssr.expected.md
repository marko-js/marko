# Write
```html
  <button>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={value:1},{_:_.a}])]</script>
```

# Write
```html
  <span>Hello</span><span>1<!--M_*2 #text/0--></span><!--M_|1 #text/3 2--><script>M._.r.push("__tests__/template.marko_0_value 1");M._.w()</script>
```

# Render ASYNC
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    value: 1
  },
  {
    _: _.a
  }])]
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
INSERT #comment
INSERT script
```

# Render End
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
    value: 1
  },
  {
    _: _.a
  }])]
</script>
<span>
  Hello
</span>
<span>
  1
  <!--M_*2 #text/0-->
</span>
<!--M_|1 #text/3 2-->
<script>
  M._.r.push(
    "__tests__/template.marko_0_value 1"
    );
  M._.w()
</script>
```

# Mutations
```
INSERT span0
INSERT span0/#text
INSERT span1
INSERT span1/#text
INSERT span1/#comment
INSERT #comment1
INSERT script1
```