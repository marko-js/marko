# Write
```html
  <input value=a checked type=checkbox><input value=b type=checkbox><input value=b type=checkbox><!--M_*1 #input/2--><input value=b type=checkbox><!--M_*1 #input/3--><button>Update</button><!--M_*1 #button/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="b"
/>
<!--M_*1 #input/2-->
<input
  type="checkbox"
  value="b"
/>
<!--M_*1 #input/3-->
<button>
  Update
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT input0
INSERT input1
INSERT input2
INSERT #comment0
INSERT input3
INSERT #comment1
INSERT button
INSERT button/#text
INSERT #comment2
INSERT script
INSERT script/#text
```