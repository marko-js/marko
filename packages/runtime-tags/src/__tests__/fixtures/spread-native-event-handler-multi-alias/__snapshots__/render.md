# Render
```html
<div
  id="el"
/>
<button>
  Click Me
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div
  id="el"
>
  [onClick(child)][onClick(parent)]
</div>
<button>
  Click Me
</button>
```
## Change
```
INSERT: #el::text("[onClick(child)]")
REMOVE: #el::text("[onClick(child)]")
INSERT: #el::text("[onClick(child)][onClick(parent)]")
```
