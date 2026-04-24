# Render
```html
<button />
<!--M_*1 #button/0-->
<span>
  hi
  <!--M_*2 #text/0-->
</span>
<!--M_|1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      show: !0,
      message: "hi"
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button />
<!--M_*1 #button/0-->
<!--M_|1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      show: !0,
      message: "hi"
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment1 after span
INSERT #comment1
REMOVE span after #comment1
```