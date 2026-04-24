# Write
```html
  <div><!--M_}1 #div/0--></div><button>0<!--M_*1 #text/2--></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={input_message:"hello",x:0}],_.a.getMessage=_._["__tests__/template.marko_0/getMessage"](_.a),_.b),"__tests__/template.marko_0_x 1"];M._.w()</script>
```

# Render End
```html
<div>
  <!--M_}1 #div/0-->
</div>
<button>
  0
  <!--M_*1 #text/2-->
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      input_message: "hello",
      x: 0
    }], _.a.getMessage = _._[
      "__tests__/template.marko_0/getMessage"
      ](_.a), _.b),
    "__tests__/template.marko_0_x 1"
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
INSERT div/#comment
INSERT button
INSERT button/#text
INSERT button/#comment
INSERT #comment
INSERT script
INSERT script/#text
```