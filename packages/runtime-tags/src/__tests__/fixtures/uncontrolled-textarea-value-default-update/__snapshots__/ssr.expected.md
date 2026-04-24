# Write
```html
  <textarea>a</textarea><textarea>a</textarea><textarea>a</textarea><!--M_*1 #textarea/2--><textarea>a</textarea><!--M_*1 #textarea/3--><textarea>a</textarea><!--M_*1 #textarea/4--><textarea>a</textarea><!--M_*1 #textarea/5--><button>Update</button><!--M_*1 #button/6--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<!--M_*1 #textarea/2-->
<textarea>
  a
</textarea>
<!--M_*1 #textarea/3-->
<textarea>
  a
</textarea>
<!--M_*1 #textarea/4-->
<textarea>
  a
</textarea>
<!--M_*1 #textarea/5-->
<button>
  Update
</button>
<!--M_*1 #button/6-->
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
INSERT textarea0
INSERT textarea0/#text
INSERT textarea1
INSERT textarea1/#text
INSERT textarea2
INSERT textarea2/#text
INSERT #comment0
INSERT textarea3
INSERT textarea3/#text
INSERT #comment1
INSERT textarea4
INSERT textarea4/#text
INSERT #comment2
INSERT textarea5
INSERT textarea5/#text
INSERT #comment3
INSERT button
INSERT button/#text
INSERT #comment4
INSERT script
INSERT script/#text
```