# Render `{"projection":null,"baseXp":1,"playerId":"p"}`
```html
<button>
  0
</button>
<p>
  route
</p>
```

# Update `{"projection":{"skill":"wood"},"baseXp":2,"playerId":"p"}`
```html
<button>
  0
</button>
<p>
  route
</p>
```
## Change
```
UPDATE: body[data-watch] null => "wood:2:p:0"
```

# Update
```js
assert.equal(d.body.dataset.watch, "wood:2:p:0");
```
