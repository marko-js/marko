# Render `{"label":"a"}`
```html
<button>
  0
</button>
<b>
  t
</b>
```

# Update
```js
setTimeout(() => document.body.click());
```

# Update `{"label":"b"}`

# Update
```js
document.querySelector("b").click();
```
```html
<button>
  0
</button>
<b>
  t
</b>
<i>
  open
</i>
```
## Change
```
UPDATE: body[data-item] null => "{\"label\":\"b\"}"
INSERT: b + i
```
