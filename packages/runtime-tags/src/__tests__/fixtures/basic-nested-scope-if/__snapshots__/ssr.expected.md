# Write
```html
  <div><button>0<!--M_*2 #text/1--></button><!--M_*2 #button/0--><!--M_|1 #text/0 2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={clickCount:0},{_:_.a}]),"__tests__/template.marko_1_clickCount 2"];M._.w()</script>
```

# Render End
```html
<div>
  <button>
    0
    <!--M_*2 #text/1-->
  </button>
  <!--M_*2 #button/0-->
  <!--M_|1 #text/0 2-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      clickCount: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_clickCount 2"
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
INSERT div/button
INSERT div/button/#text
INSERT div/button/#comment
INSERT div/#comment0
INSERT div/#comment1
INSERT script
INSERT script/#text
```