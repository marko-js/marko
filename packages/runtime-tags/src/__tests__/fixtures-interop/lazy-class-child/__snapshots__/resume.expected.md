# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<script>
  $MC = (window.$MC || []).concat(
  {
    "w": [
      ["s0", 0,
      {},
      {
        "f": 1
      }]
    ],
    "t": [
      "__tests__/template.marko"
    ]
  })
</script>
```

# Mutations
```
INSERT #text0
INSERT #text1
REMOVE #comment before #text0
REMOVE #comment after #text1
```

# Render
```js
container.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<script>
  $MC = (window.$MC || []).concat(
  {
    "w": [
      ["s0", 0,
      {},
      {
        "f": 1
      }]
    ],
    "t": [
      "__tests__/template.marko"
    ]
  })
</script>
```

# Mutations
```
INSERT #text1
INSERT #text2
```

# Render
```js
container.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<script>
  $MC = (window.$MC || []).concat(
  {
    "w": [
      ["s0", 0,
      {},
      {
        "f": 1
      }]
    ],
    "t": [
      "__tests__/template.marko"
    ]
  })
</script>
```

# Mutations
```
REMOVE #document-fragment/#text0 after button
REMOVE #document-fragment/#text1 after button
```