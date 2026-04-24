# Write
```html
  <input type=checkbox><input type=checkbox><!--M_*1 #input/0--><input type=checkbox><!--M_*1 #input/1--><button>Update</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<!--M_*1 #input/0-->
<input
  type="checkbox"
/>
<!--M_*1 #input/1-->
<button>
  Update
</button>
<!--M_*1 #button/2-->
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
INSERT #comment0
INSERT input2
INSERT #comment1
INSERT button
INSERT button/#text
INSERT #comment2
INSERT script
INSERT script/#text
```