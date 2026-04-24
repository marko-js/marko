# Render
```html
<div
  id="ref"
>
  x=0, was=undefined
</div>
<button
  id="increment"
>
  Increment
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 0
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/#text
```

# Render
```js
container.querySelector("#increment")?.click();
```
```html
<div
  id="ref"
>
  x=1, was=0
</div>
<button
  id="increment"
>
  Increment
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 0
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("#increment")?.click();
```
```html
<div
  id="ref"
>
  x=2, was=1
</div>
<button
  id="increment"
>
  Increment
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 0
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```