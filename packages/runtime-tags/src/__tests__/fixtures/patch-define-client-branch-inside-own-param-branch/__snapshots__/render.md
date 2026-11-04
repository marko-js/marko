# Render `{"on":"a"}`
```html
<button>
  toggle
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
  toggle
</button>
```
## Change
```
REMOVE: button + span
```

# Update `{"on":"b"}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<span>
  b
</span>
```
## Change
```
INSERT: button + span
UPDATE: span::text " " => "b"
```
