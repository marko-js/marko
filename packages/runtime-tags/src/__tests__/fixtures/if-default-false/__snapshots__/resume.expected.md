# Render
```html
<button />
<!--M_*1 #button/0-->
<!--M_[-->
<!--M_]1 #text/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !1
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
<!--M_[-->
hi
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
REMOVE #comment after #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<!--M_*1 #button/0-->
<!--M_[-->
<!--M_]1 #text/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #comment2
REMOVE #text after #comment2
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<!--M_*1 #button/0-->
<!--M_[-->
hi
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
REMOVE #comment after #text
```