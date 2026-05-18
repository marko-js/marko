# Render
```html
<div
  id="el"
/>
<div>
  <button>
    Click
  </button>
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div
  id="el"
>
  0
</div>
<div>
  <button>
    Click
  </button>
</div>
```
## Change
```
INSERT: #el::text("0")
```
