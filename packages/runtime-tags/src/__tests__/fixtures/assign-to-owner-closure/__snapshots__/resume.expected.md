# Render
```html
<button />
<!--M_*2 #button/0-->
<!--M_|1 #text/0 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {},
    {
      _: _.a
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
<!--M_|1 #text/0 2-->
<!--M_*2 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {},
    {
      _: _.a
    }]),
    "__tests__/template.marko_1 2"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment0 after #comment1
INSERT #comment0
REMOVE button after #comment0
```