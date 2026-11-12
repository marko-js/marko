# Render `{"$global":{"x":"x","serializedGlobals":["x"]}}`
```html
<button>
  12
</button>
<p>
  3x
</p>
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
<p>
  5x
</p>
```
## Change
```
UPDATE: button::text@0 "1" => "2"
UPDATE: button::text@1 "2" => "3"
UPDATE: p::text "3x" => "5x"
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
<p>
  5y
</p>
```
## Change
```
UPDATE: p::text "5x" => "5y"
UPDATE: body[data-sum] "5x" => "5y"
```

# Update
```js
assert.equal(document.body.dataset.sum, text);
```
