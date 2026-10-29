# Render `{"label":"a"}`
```html
<p>
  a
</p>
```

# Update
```js
assert.deepEqual(
await patched(document, "(mark(1),{})\n\n(mark(2),{})\n\n", commitLater),
["commit", "committed", "1", "applied", "2", "applied", "end"],
  );
```

# Update
```js
assert.deepEqual(await patched(document, "", commitLater), [
"commit",
"committed",
"end",
  ]);
```

# Update
```js
assert.deepEqual(
await patched(document, "(stop(),{})\n\n(mark(2),{})\n\n", commitLater),
["commit", "committed"],
  );
```

# Update
```js
assert.deepEqual(
await patched(document, "(mark(1),{})\n\n", commitStopping),
["commit"],
  );
```

# Update `{"label":"b"}`
```html
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```
