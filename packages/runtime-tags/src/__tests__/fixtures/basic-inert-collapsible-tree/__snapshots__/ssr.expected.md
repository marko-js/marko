# Write
```html
  <ul><li id=c-0><span>Hello World</span><button>[-]<!--M_*3 #text/3--></button><!--M_*3 #button/2--><ul><li id=c-0-0><span>testing 123</span><button>[-]<!--M_*6 #text/3--></button><!--M_*6 #button/2--></li><!--M_*6 #li/0--></ul></li><!--M_*3 #li/0--><li id=c-1><span>Goodbye World</span><button>[-]<!--M_*7 #text/3--></button><!--M_*7 #button/2--></li><!--M_*7 #li/0--></ul><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,2,{open:!0},2,{open:!0},{open:!0}]),"__tests__/tags/comments.marko_1_open 6 3 7"];M._.w()</script>
```

# Render End
```html
<ul>
  <li
    id="c-0"
  >
    <span>
      Hello World
    </span>
    <button>
      [-]
      <!--M_*3 #text/3-->
    </button>
    <!--M_*3 #button/2-->
    <ul>
      <li
        id="c-0-0"
      >
        <span>
          testing 123
        </span>
        <button>
          [-]
          <!--M_*6 #text/3-->
        </button>
        <!--M_*6 #button/2-->
      </li>
      <!--M_*6 #li/0-->
    </ul>
  </li>
  <!--M_*3 #li/0-->
  <li
    id="c-1"
  >
    <span>
      Goodbye World
    </span>
    <button>
      [-]
      <!--M_*7 #text/3-->
    </button>
    <!--M_*7 #button/2-->
  </li>
  <!--M_*7 #li/0-->
</ul>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 2,
    {
      open: !0
    }, 2,
    {
      open: !0
    },
    {
      open: !0
    }]),
    "__tests__/tags/comments.marko_1_open 6 3 7"
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
INSERT ul/li0/span
INSERT ul/li0/span/#text
INSERT ul/li0/button
INSERT ul/li0/button/#text
INSERT ul/li0/button/#comment
INSERT ul/li0/#comment
INSERT ul/li0/ul
INSERT ul/li0/ul/li
INSERT ul/li0/ul/li/span
INSERT ul/li0/ul/li/span/#text
INSERT ul/li0/ul/li/button
INSERT ul/li0/ul/li/button/#text
INSERT ul/li0/ul/li/button/#comment
INSERT ul/li0/ul/li/#comment
INSERT ul/li0/ul/#comment
INSERT ul/#comment0
INSERT ul/li1
INSERT ul/li1/span
INSERT ul/li1/span/#text
INSERT ul/li1/button
INSERT ul/li1/button/#text
INSERT ul/li1/button/#comment
INSERT ul/li1/#comment
INSERT ul/#comment1
INSERT script
INSERT script/#text
```