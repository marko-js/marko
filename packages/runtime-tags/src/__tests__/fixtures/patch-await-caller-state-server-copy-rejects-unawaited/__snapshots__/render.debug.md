# Render `{"label":"a","promise":{"value":"a"}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update
```js
seen.length = 0;
process.on("unhandledRejection", record);
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
```
## Change
```
INSERT: .swap + p
INSERT: p::text("a")
```

# Update `{"label":"b","promise":{"value":{}}}`

# Update
```js
process.off("unhandledRejection", record);
assert.deepEqual(seen, []);
```
