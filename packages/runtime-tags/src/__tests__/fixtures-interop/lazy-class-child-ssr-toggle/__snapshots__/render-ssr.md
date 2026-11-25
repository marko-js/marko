# Render `{"show":true}`
```html
<button
  id="toggle"
>
  toggle
</button>
<span
  id="child"
>
  42
</span>
```

# Update
```js
(document.querySelector("#toggle")).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: #child
```

# Update
```js
(document.querySelector("#toggle")).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<span
  id="child"
>
  42
</span>
```
## Change
```
INSERT: #child
INSERT: #child::text("42")
```
