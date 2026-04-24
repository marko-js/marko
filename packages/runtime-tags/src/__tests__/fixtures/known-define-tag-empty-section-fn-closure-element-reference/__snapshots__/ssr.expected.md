# Write
```html
  <div></div><!--M_*1 #div/0--><button></button><!--M_*2 #button/0--> <script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={},{input_message:"hello",_:_.a}]),"__tests__/template.marko_1_input_message 2"];M._.w()</script>
```

# Render End
```html
<div />
<!--M_*1 #div/0-->
<button />
<!--M_*2 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {},
    {
      input_message: "hello",
      _: _.a
    }]),
    "__tests__/template.marko_1_input_message 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT #comment0
INSERT button
INSERT #comment1
INSERT #text
INSERT script
INSERT script/#text
```