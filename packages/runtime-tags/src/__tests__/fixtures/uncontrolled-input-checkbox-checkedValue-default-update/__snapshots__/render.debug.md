# Render
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<input
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
  value="b"
/>
<input
  type="checkbox"
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
  type="checkbox"
  value="a"
/>
<input
  type="checkbox"
  value="b"
/>
<input
  default-checked=""
  type="checkbox"
  value="b"
/>
<input
  default-checked=""
  type="checkbox"
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
