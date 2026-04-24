# Write
```html
  <div><button>Test</button><!--M_*2 #button/0--><!--M_|1 #text/0 2--><div></div><!--M_*1 #div/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={items:["hello"]},{_:_.a}]),"__tests__/template.marko_1_items 2"];M._.w()</script>
```

# Render End
```html
<div>
  <button>
    Test
  </button>
  <!--M_*2 #button/0-->
  <!--M_|1 #text/0 2-->
  <div />
  <!--M_*1 #div/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      items: ["hello"]
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_items 2"
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
INSERT div/#comment0
INSERT div/#comment1
INSERT div/div
INSERT div/#comment2
INSERT script
INSERT script/#text
```