# Render `{"$global":{"suffix":"a","serializedGlobals":["suffix"]}}`
```html
<p>
  a
</p>
```

# Update `{"$global":{"suffix":"b","serializedGlobals":["suffix"]}}`

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
