# Render `{"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<button>
  t
</button>
```

# Update `{"$global":{"brand":"b","serializedGlobals":["brand"]}}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
<em>
  b
</em>
```
## Change
```
INSERT: button + em
```
