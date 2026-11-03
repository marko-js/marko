# Render `{"show":false,"x":"a","more":false}`

# Update `{"show":true,"x":"b","more":false}`
```html
<button>
  +
</button>
```
## Change
```
INSERT: button
```
## Console
```
LOG "effect b:0"
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "effect b:1"
```

# Update `{"show":true,"x":"c","more":true}`
```html
<p>
  c
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p
```
## Console
```
LOG "effect c:1"
```

# Update `{"show":false,"x":"c","more":true}`
## Change
```
REMOVE: p
REMOVE: button
```

# Update `{"show":true,"x":"d","more":true}`
```html
<p>
  d
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p, button
```
## Console
```
LOG "effect d:0"
```
