# Render `{"label":"a","n":0}`
```html
<p>
  f-afalse
</p>
```

# Update `{"label":"b","n":0}`
```html
<p>
  f-bfalse
</p>
```
## Change
```
UPDATE: p::text "f-afalse" => "f-bfalse"
```

# Update
```js
assert.strictEqual(document.querySelector("p").textContent, "f-bfalse");
```
