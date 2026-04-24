# Write
```html
  <button>0</button><!--M_*2 #button/0--><!--M_|1 #text/0 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={num:0},{_:_.a}]),"__tests__/template.marko_1_num 2"];M._.w()</script>
```

# Render End
```html
<button>
  0
</button>
<!--M_*2 #button/0-->
<!--M_|1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      num: 0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_num 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button
INSERT button/#text
INSERT #comment0
INSERT #comment1
INSERT script
INSERT script/#text
```