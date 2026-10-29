# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  toggle
</button>
<b>
  yes
</b>
```
## Change
```
INSERT: button, b
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  toggle
</button>
<i>
  no
</i>
```
## Change
```
INSERT: button + i
REMOVE: i + b
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"label":"d"}`
