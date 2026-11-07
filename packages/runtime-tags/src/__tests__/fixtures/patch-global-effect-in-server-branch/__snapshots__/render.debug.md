# Render `{"show":true,"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<p>
  shown
</p>
```

# Update `{"show":true,"$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<p>
  shown
</p>
```
## Change
```
UPDATE: body[data-brand] "a" => "b"
```

# Update
```js
assert.equal(document.body.dataset.brand, "b");
```
