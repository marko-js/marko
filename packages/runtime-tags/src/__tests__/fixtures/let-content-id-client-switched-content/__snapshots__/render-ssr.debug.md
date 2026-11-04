# Render `{"show":false,"label":"a"}`
```html
<button>
  switch
</button>
```

# Update
```js
d.querySelector("button")?.click();
```
```html
<button>
  switch
</button>
<b>
  other
</b>
<b>
  other
</b>
```
## Change
```
INSERT: button + b
INSERT: b:nth-of-type(1) + b
```
