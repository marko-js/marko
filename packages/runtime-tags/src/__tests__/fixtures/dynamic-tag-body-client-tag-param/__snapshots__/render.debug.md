# Render `{"note":"b"}`
```html
<button>
  swap
</button>
<b>
  b
</b>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  swap
</button>
<i>
  b
</i>
```
## Change
```
INSERT: button + i
REMOVE: i + b
UPDATE: i::text " " => "b"
```
