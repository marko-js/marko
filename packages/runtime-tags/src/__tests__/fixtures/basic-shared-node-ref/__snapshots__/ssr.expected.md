# Write
```html
  <ul><li>1<!--M_*2 #text/0--></li><li>2<!--M_*3 #text/0--></li><li>3<!--M_*4 #text/0--></li><!--M_}1 #ul/0 4 3 2--></ul><button id=toggle>Toggle</button><!--M_*1 #button/1--><button id=reverse>Reverse</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{open:!0,list:[1,2,3]},{"#LoopKey":1},{"#LoopKey":2},{"#LoopKey":3}]),"__tests__/template.marko_0_list 1 __tests__/template.marko_0_open 1"];M._.w()</script>
```

# Render End
```html
<ul>
  <li>
    1
    <!--M_*2 #text/0-->
  </li>
  <li>
    2
    <!--M_*3 #text/0-->
  </li>
  <li>
    3
    <!--M_*4 #text/0-->
  </li>
  <!--M_}1 #ul/0 4 3 2-->
</ul>
<button
  id="toggle"
>
  Toggle
</button>
<!--M_*1 #button/1-->
<button
  id="reverse"
>
  Reverse
</button>
<!--M_*1 #button/2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      open: !0,
      list: [1, 2, 3]
    },
    {
      "#LoopKey": 1
    },
    {
      "#LoopKey": 2
    },
    {
      "#LoopKey": 3
    }]),
    "__tests__/template.marko_0_list 1 __tests__/template.marko_0_open 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT ul
INSERT ul/li0
INSERT ul/li0/#text
INSERT ul/li0/#comment
INSERT ul/li1
INSERT ul/li1/#text
INSERT ul/li1/#comment
INSERT ul/li2
INSERT ul/li2/#text
INSERT ul/li2/#comment
INSERT ul/#comment
INSERT button0
INSERT button0/#text
INSERT #comment0
INSERT button1
INSERT button1/#text
INSERT #comment1
INSERT script
INSERT script/#text
```