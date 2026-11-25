# Render
```html
<button>
  toggle
</button>
<div
  id="a"
>
  <span>
    first
  </span>
  <span>
    second
  </span>
</div>
<div
  id="b"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div
  id="a"
/>
<div
  id="b"
>
  fallback 
  <b>
    content
  </b>
</div>
```
## Change
```
REMOVE: #a > span
REMOVE: #a > span
INSERT: #b::text("fallback "), #b > b
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div
  id="a"
>
  <span>
    first
  </span>
  <span>
    second
  </span>
</div>
<div
  id="b"
/>
```
## Change
```
INSERT: #a > span:nth-of-type(1), #a > span:nth-of-type(2)
REMOVE: #b > b
REMOVE: #b::text("fallback ")
```
