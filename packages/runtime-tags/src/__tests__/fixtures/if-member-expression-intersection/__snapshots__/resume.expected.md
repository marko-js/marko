# Render
```html
<div
  id="sM_1"
>
  <!--M_}2 #div/0-->
</div>
<div
  id="sM_2"
>
  <!--M_}3 #div/0-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      hide: !0,
      text: "",
      text_length: 0,
      id: "sM_1"
    },
    {
      hide: !0,
      text: "",
      text_length: 0,
      id: "sM_2"
    }]),
    "__tests__/tags/child.marko_0_id 2 3"
  ];
  M._.w()
</script>
```


# Render ASYNC
```html
<div
  id="sM_1"
>
  <!--M_}2 #div/0-->
  <div>
    sM_1
  </div>
</div>
<div
  id="sM_2"
>
  <!--M_}3 #div/0-->
  <div>
    sM_2
  </div>
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      hide: !0,
      text: "",
      text_length: 0,
      id: "sM_1"
    },
    {
      hide: !0,
      text: "",
      text_length: 0,
      id: "sM_2"
    }]),
    "__tests__/tags/child.marko_0_id 2 3"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div0/div
INSERT div1/div
UPDATE div0/div/#text " " => "sM_1"
UPDATE div1/div/#text " " => "sM_2"
```