# Render
```html
<div>
  <span>
    v:1
  </span>
</div>
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc-b"
>
  b++
</button>
```

# Update
```js
// switch from `one` (v:1) to `two` (v:10)
container.querySelector("#toggle").click();
```

# Update
```js
// update `two`'s value; should show v:11
container.querySelector("#inc-b").click();
```
