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
container.querySelector("button").click();
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
INSERT: #b > :is(::text("fallback "), b)
```

# Update
```js
container.querySelector("button").click();
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
INSERT: #a > :is(span, span)
REMOVE: #b::text("fallback ")
REMOVE: #b > b
```
