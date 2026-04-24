# Write
```html
   -- bar<span class=test></span><!--M_*2 #span/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={rest:{class:"test"}},{_:_.a}]),"__tests__/template.marko_1_rest 2"];M._.w()</script>
```

# Render End
```html
-- bar
<span
  class="test"
/>
<!--M_*2 #span/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      rest:
      {
        class: "test"
      }
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_rest 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #text
INSERT span
INSERT #comment
INSERT script
INSERT script/#text
```