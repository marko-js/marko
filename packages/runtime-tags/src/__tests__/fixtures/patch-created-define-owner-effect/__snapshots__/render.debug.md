# Render `{"on":false,"n":1,"w":"a"}`

# Update `{"on":true,"n":1,"w":"b"}`
```html
<button>
  x
</button>
```
## Change
```
INSERT: button
```
## Console
```
LOG "k" 1 "b"
```

# Update `{"on":true,"n":1,"w":"c"}`
## Console
```
LOG "k" 1 "c"
```

# Update
```js
d.querySelector("button")?.click();
```
## Console
```
LOG "k" 2 "c"
```
