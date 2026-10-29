# Render `{"label":"a","n":"old-"}`
```html
<p>
  old-a
</p>
```

# Update `{"label":"b","n":"new-"}`
```html
<p>
  old-b
</p>
```
## Change
```
UPDATE: p::text "old-a" => "old-b"
```

# Update
```js
assert.strictEqual(document.querySelector("p").textContent, "old-b");
```
