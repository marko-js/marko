# Render
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="b"
/>
<button>
  Update
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  default-checked=""
  type="radio"
  value="b"
/>
<input
  default-checked=""
  type="radio"
  value="b"
/>
<button>
  Update
</button>
```
## Change
```
UPDATE: input:nth-of-type(3)[checked] null => ""
UPDATE: input:nth-of-type(4)[checked] null => ""
```
