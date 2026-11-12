# Render `{"$global":{"meta":{"title":"a"},"serializedGlobals":["meta"]}}`
```html
<p>
  {"title":"a"}
</p>
```

# Update `{"$global":{"meta":{"title":"bb"},"serializedGlobals":["meta"]}}`
```html
<p>
  {"title":"bb"}
</p>
```
## Change
```
UPDATE: p::text "{\"title\":\"a\"}" => "{\"title\":\"bb\"}"
UPDATE: body[data-flag] "1" => "2"
```

# Update
```js
assert.equal(document.body.dataset.flag, "2");
```
