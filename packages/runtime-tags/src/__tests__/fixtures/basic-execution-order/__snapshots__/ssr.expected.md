# Write
```html
  <button>hide</button><!--M_*1 #button/0-->hi<!--M_*2 #text/0--><!--M_|1 #text/1 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={message_text:"hi"},{_:_.a}]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<button>
  hide
</button>
<!--M_*1 #button/0-->
hi
<!--M_*2 #text/0-->
<!--M_|1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      message_text: "hi"
    },
    {
      _: _.a
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
INSERT button
INSERT button/#text
INSERT #comment0
INSERT #text
INSERT #comment1
INSERT #comment2
INSERT script
INSERT script/#text
```