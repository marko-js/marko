# Render `{"$global":{"mode":"a","serializedGlobals":["mode"]}}`
```html
<button>
  run
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  run
</button>
```
## Change
```
UPDATE: body[data-ran] null => "a"
```

# Update
```js
assert.equal(document.body.dataset.ran, mode);
```

# Update `{"$global":{"mode":"b","serializedGlobals":["mode"]}}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  run
</button>
```
## Change
```
UPDATE: body[data-ran] "a" => "b"
```

# Update
```js
assert.equal(document.body.dataset.ran, mode);
```
