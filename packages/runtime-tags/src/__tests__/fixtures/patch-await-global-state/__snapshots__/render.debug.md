# Render `{"$global":{"suffix":"a","serializedGlobals":["suffix"]}}`
```html
<p>
  0a
</p>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1a
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: p::text "0a" => "1a"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update `{"$global":{"suffix":"b","serializedGlobals":["suffix"]}}`
```html
<p>
  1b
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: p::text "1a" => "1b"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
