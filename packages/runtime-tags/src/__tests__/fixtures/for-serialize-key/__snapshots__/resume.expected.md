# Render
```html
<div
  id="el"
/>
<div>
  <button>
    Click
  </button>
  <!--M_*2 #button/0-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      "#LoopKey": 0
    }]),
    "__tests__/template.marko_1 2"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div
  id="el"
>
  0
</div>
<div>
  <button>
    Click
  </button>
  <!--M_*2 #button/0-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0, 1,
    {
      "#LoopKey": 0
    }]),
    "__tests__/template.marko_1 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div0/#text
```