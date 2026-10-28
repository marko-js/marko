# Render `{"label":"a"}`
```html
<button>
  other
</button>
<span>
  a
</span>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  other
</button>
<b>
  other
</b>
```
## Change
```
INSERT: button + b
REMOVE: b + span
```
