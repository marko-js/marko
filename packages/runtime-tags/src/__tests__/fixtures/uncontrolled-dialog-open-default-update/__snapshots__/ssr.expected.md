# Write
```html
  <dialog></dialog><dialog></dialog><!--M_*1 #dialog/0--><dialog></dialog><!--M_*1 #dialog/1--><button>Update</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<dialog />
<dialog />
<!--M_*1 #dialog/0-->
<dialog />
<!--M_*1 #dialog/1-->
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
INSERT dialog0
INSERT dialog1
INSERT #comment0
INSERT dialog2
INSERT #comment1
INSERT button
INSERT button/#text
INSERT #comment2
INSERT script
INSERT script/#text
```