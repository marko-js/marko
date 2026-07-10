# Render
```html
<div
  id="a"
>
  <span>
    static content
  </span>
</div>
<div
  id="b"
/>
<button
  id="toggle"
>
  toggle
</button>
```

# Update
```js
container.querySelector("#toggle").click();
```
```html
<div
  id="a"
/>
<div
  id="b"
>
  <span>
    other static
  </span>
</div>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: #a > span
INSERT: #b > span
```

# Update
```js
container.querySelector("#toggle").click();
```
```html
<div
  id="a"
>
  <span>
    static content
  </span>
</div>
<div
  id="b"
/>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: #a > span
REMOVE: #b > span
```
