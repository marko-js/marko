# Render `{"$global":{"x":"x","serializedGlobals":["x"]}}`
```html
<button>
  12
</button>
```

# Update
```js
assert.equal(document.body.dataset.sum, text);
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  23
</button>
```
## Change
```
UPDATE: button::text@0 "1" => "2"
UPDATE: button::text@1 "2" => "3"
UPDATE: body[data-sum] "3x" => "5x"
```

# Update
```js
assert.equal(document.body.dataset.sum, text);
```

# Update `{"$global":{"x":"y","serializedGlobals":["x"]}}`
```html
<button>
  23
</button>
```
## Change
```
UPDATE: body[data-sum] "5x" => "5y"
```

# Update
```js
assert.equal(document.body.dataset.sum, text);
```
