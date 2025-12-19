# Render
```html
<div
  id="target"
>
  <span
    data-selected=""
  >
    0
  </span>
  <span>
    1
  </span>
  <span>
    2
  </span>
</div>
```

# Mutations
```
INSERT div
```

# Render
```js
container.querySelector("#target").click();
```
```html
<div
  id="target"
>
  <span>
    0
  </span>
  <span
    data-selected=""
  >
    1
  </span>
  <span>
    2
  </span>
</div>
```

# Mutations
```
UPDATE div/span0[data-selected] "" => null
UPDATE div/span1[data-selected] null => ""
```

# Render
```js
container.querySelector("#target").click();
```
```html
<div
  id="target"
>
  <span>
    0
  </span>
  <span>
    1
  </span>
  <span
    data-selected=""
  >
    2
  </span>
</div>
```

# Mutations
```
UPDATE div/span1[data-selected] "" => null
UPDATE div/span2[data-selected] null => ""
```