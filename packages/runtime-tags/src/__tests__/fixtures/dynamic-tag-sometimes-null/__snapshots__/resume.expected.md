# Render
```html
<!--M_[-->
Body Content
<!--M_]1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: null
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text1
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Body Content
</div>
<!--M_]1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: null
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div
REMOVE #comment after div
REMOVE #text after div
REMOVE #text after div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
Body Content
<!--M_]1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: null
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
REMOVE div after #text
```