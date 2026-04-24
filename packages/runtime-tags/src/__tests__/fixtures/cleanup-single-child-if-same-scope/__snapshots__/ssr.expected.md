# Write
```html
  <button>Toggle</button><!--M_*1 #button/0--><pre></pre><!--M_*1 #pre/1--><div>child</div><!--M_|1 #text/2 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={show:!0},{_:_.a}]),"__tests__/template.marko_1 2 __tests__/template.marko_0_show 1"];M._.w()</script>
```

# Render End
```html
<button>
  Toggle
</button>
<!--M_*1 #button/0-->
<pre />
<!--M_*1 #pre/1-->
<div>
  child
</div>
<!--M_|1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      show: !0
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1 2 __tests__/template.marko_0_show 1"
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
INSERT pre
INSERT #comment1
INSERT div
INSERT div/#text
INSERT #comment2
INSERT script
INSERT script/#text
```