# Write
```html
  <button id=toggle>Toggle</button><!--Membedded*1 #button/0--><button id=cleanup>Cleanup</button><!--Membedded*1 #button/1--><div>Hello</div><!--Membedded|1 #text/2 2--><script>WALKER_RUNTIME("M")("embedded");(M.embedded.b={})["__tests__/template.marko"]=1;M.embedded.r=[_=>(_.a=[0,{}]),"__tests__/template.marko_0_hide 1 __tests__/template.marko_0 1"];M.embedded.w()</script>
```

# Render End
```html
<button
  id="toggle"
>
  Toggle
</button>
<!--Membedded*1 #button/0-->
<button
  id="cleanup"
>
  Cleanup
</button>
<!--Membedded*1 #button/1-->
<div>
  Hello
</div>
<!--Membedded|1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0,
    {}]),
    "__tests__/template.marko_0_hide 1 __tests__/template.marko_0 1"
  ];
  M.embedded.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button0
INSERT button0/#text
INSERT #comment0
INSERT button1
INSERT button1/#text
INSERT #comment1
INSERT div
INSERT div/#text
INSERT #comment2
INSERT script
INSERT script/#text
```