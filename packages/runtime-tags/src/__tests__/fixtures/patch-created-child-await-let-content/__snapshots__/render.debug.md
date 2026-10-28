# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  clear
</button>
<em>
  static b
</em>
```
## Change
```
INSERT: button, em
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  clear
</button>
<em>
  static c
</em>
```
## Change
```
REMOVE: button
REMOVE: em
INSERT: button, em
```

# Update
```js
document.querySelector("button")?.click();
```
```html
<button>
  clear
</button>
```
## Change
```
REMOVE: button + em
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  clear
</button>
```
## Change
```
REMOVE: button
INSERT: button
```
