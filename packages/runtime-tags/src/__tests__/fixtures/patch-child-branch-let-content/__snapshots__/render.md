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

# Update
```js
d.querySelector("button").click();
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

# Update `{"show":true,"label":"c"}`

# Update
```js
d.querySelector("button").click();
```

# Update `{"show":true,"label":"d"}`
