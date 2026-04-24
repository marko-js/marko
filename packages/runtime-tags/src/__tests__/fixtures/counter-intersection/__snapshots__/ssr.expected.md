# Write
```html
  <div><button class=a>0<!--M_*1 #text/1--></button><!--M_*1 #button/0--> + <button class=b>0<!--M_*1 #text/3--></button><!--M_*1 #button/2--> = <!>0<!--M_*1 #text/4--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{a:0,b:0}]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<div>
  <button
    class="a"
  >
    0
    <!--M_*1 #text/1-->
  </button>
  <!--M_*1 #button/0-->
   + 
  <button
    class="b"
  >
    0
    <!--M_*1 #text/3-->
  </button>
  <!--M_*1 #button/2-->
   = 
  <!---->
  0
  <!--M_*1 #text/4-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      a: 0,
      b: 0
    }]),
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
INSERT div
INSERT div/button0
INSERT div/button0/#text
INSERT div/button0/#comment
INSERT div/#comment0
INSERT div/#text0
INSERT div/button1
INSERT div/button1/#text
INSERT div/button1/#comment
INSERT div/#comment1
INSERT div/#text1
INSERT div/#comment2
INSERT div/#text2
INSERT div/#comment3
INSERT script
INSERT script/#text
```