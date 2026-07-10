# Render `{"items":[1,2,3,4,5,6]}`
```html
<div
  id="keyed"
>
  <span>
    1
  </span>
  <span>
    2
  </span>
  <span>
    3
  </span>
  <span>
    4
  </span>
  <span>
    5
  </span>
  <span>
    6
  </span>
</div>
```

# Update
```js
const actual = Array.from(container.querySelectorAll("#keyed span"), el => el.textContent).join(",");
if (actual !== expected.join(",")) {
  throw new Error(`keyed for mismatch: expected [${expected}] got [${actual}]`);
  }
```
