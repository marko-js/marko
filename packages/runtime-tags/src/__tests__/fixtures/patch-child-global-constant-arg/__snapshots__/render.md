# Render `{"$global":{"suffix":"1","serializedGlobals":["suffix"]}}`
```html
<p>
  a1
</p>
<button>
  0
</button>
```

# Update `{"$global":{"suffix":"2","serializedGlobals":["suffix"]}}`
```html
<p>
  a2
</p>
<button>
  0
</button>
```
## Change
```
UPDATE: p::text "a1" => "a2"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
