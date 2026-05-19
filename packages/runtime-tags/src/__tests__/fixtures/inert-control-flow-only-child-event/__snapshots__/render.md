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

# Update
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
## Change
```
UPDATE: #target > span:nth-of-type(1)[data-selected] "" => null
UPDATE: #target > span:nth-of-type(2)[data-selected] null => ""
```

# Update
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
## Change
```
UPDATE: #target > span:nth-of-type(2)[data-selected] "" => null
UPDATE: #target > span:nth-of-type(3)[data-selected] null => ""
```
