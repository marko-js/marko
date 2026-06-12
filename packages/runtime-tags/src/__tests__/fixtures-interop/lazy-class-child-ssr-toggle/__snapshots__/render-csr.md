# Render `{"show":true}`
```html
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

# Update
```js
container.querySelector("#toggle").click();
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
INSERT: #toggle + #child
INSERT: #child::text("42")
```
