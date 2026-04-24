# Write
```html
  <div class=obj>{"a":1,"b":2,"c":3}<!--M_*1 #text/0--></div><div class=partialObj>{"b":2,"c":3}<!--M_*1 #text/1--></div><div class=a>1<!--M_*1 #text/2--></div><div class=b>2<!--M_*1 #text/3--></div><div class=a>removed a<!--M_*1 #text/4--></div><button>Update</button><!--M_*1 #button/5--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<div
  class="obj"
>
  {"a":1,"b":2,"c":3}
  <!--M_*1 #text/0-->
</div>
<div
  class="partialObj"
>
  {"b":2,"c":3}
  <!--M_*1 #text/1-->
</div>
<div
  class="a"
>
  1
  <!--M_*1 #text/2-->
</div>
<div
  class="b"
>
  2
  <!--M_*1 #text/3-->
</div>
<div
  class="a"
>
  removed a
  <!--M_*1 #text/4-->
</div>
<button>
  Update
</button>
<!--M_*1 #button/5-->
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
INSERT div0
INSERT div0/#text
INSERT div0/#comment
INSERT div1
INSERT div1/#text
INSERT div1/#comment
INSERT div2
INSERT div2/#text
INSERT div2/#comment
INSERT div3
INSERT div3/#text
INSERT div3/#comment
INSERT div4
INSERT div4/#text
INSERT div4/#comment
INSERT button
INSERT button/#text
INSERT #comment
INSERT script
INSERT script/#text
```