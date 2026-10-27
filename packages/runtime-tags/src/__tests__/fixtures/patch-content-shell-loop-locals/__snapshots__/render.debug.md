# Render `{"items":["a","b","c"],"selected":0}`
```html
<button>
  a
</button>
```

# Update `{"items":["a","b","c"],"selected":1}`
```html
<button>
  b
</button>
```
## Change
```
REMOVE: button
INSERT: button
```

# Update
```js
document.querySelector("button").click();
```
```html
<button
  data-seen="b"
>
  b
</button>
```
## Change
```
UPDATE: button[data-seen] null => "b"
```
