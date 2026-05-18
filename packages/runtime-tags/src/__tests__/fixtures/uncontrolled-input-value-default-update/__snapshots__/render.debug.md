# Render
```html
<input
  value="a"
/>
<input
  value="a"
/>
<input
  value="a"
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
  value="a"
/>
<input
  default-value="b"
  value="a"
/>
<input
  default-value="b"
  value="a"
/>
<button>
  Update
</button>
```
## Change
```
UPDATE: input:nth-of-type(2)[value] "a" => "b"
UPDATE: input:nth-of-type(3)[value] "a" => "b"
```
