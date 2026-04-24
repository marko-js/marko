# Write
```html
  <div id=known> <span class=success data-rest=1></span><!--M_*2 #span/0--></div><div id=dynamic> <span class=success data-rest=1></span><!--M_*4 #span/0--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,1,{_class:"success",rest:{"data-rest":1}},1,{_class:"success",rest:{"data-rest":1}}]),"__tests__/tags/child.marko_0__class_rest 2 4"];M._.w()</script>
```

# Render End
```html
<div
  id="known"
>
   
  <span
    class="success"
    data-rest="1"
  />
  <!--M_*2 #span/0-->
</div>
<div
  id="dynamic"
>
   
  <span
    class="success"
    data-rest="1"
  />
  <!--M_*4 #span/0-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      _class: "success",
      rest:
      {
        "data-rest": 1
      }
    }, 1,
    {
      _class: "success",
      rest:
      {
        "data-rest": 1
      }
    }]),
    "__tests__/tags/child.marko_0__class_rest 2 4"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div0
INSERT div0/#text
INSERT div0/span
INSERT div0/#comment
INSERT div1
INSERT div1/#text
INSERT div1/span
INSERT div1/#comment
INSERT script
INSERT script/#text
```