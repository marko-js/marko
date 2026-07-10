# Render
```html
<input
  checked=""
  name="pick"
  type="radio"
  value="a"
/>
<input
  name="pick"
  type="radio"
  value="b"
/>
<span>
  a
</span>
```

# Update
```js
container.querySelectorAll(`input`)[1].click();
```

# Update
```js
_strict.default.deepEqual([...container.querySelectorAll(`input`)].map(input => input.checked), [true, false]);
```
