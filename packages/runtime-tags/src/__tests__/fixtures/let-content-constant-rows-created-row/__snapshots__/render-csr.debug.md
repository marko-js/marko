# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<b>
  a
</b>
<b>
  a
</b>
<b>
  a
</b>
<b>
  a
</b>
```

# Update
```js
const items = document.querySelectorAll("b");
assert.equal(items.length, rows, "rows");
for (const item of items) assert.equal(item.textContent, label);
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<b>
  b
</b>
<b>
  b
</b>
<b>
  b
</b>
<b>
  b
</b>
<button>
  clear
</button>
<b>
  b
</b>
<b>
  b
</b>
<b>
  b
</b>
<b>
  b
</b>
```
## Change
```
INSERT: b:nth-of-type(4) + :is(button, b, b, b, b)
UPDATE: b:nth-of-type(1)::text "a" => "b"
UPDATE: b:nth-of-type(2)::text "a" => "b"
UPDATE: b:nth-of-type(3)::text "a" => "b"
UPDATE: b:nth-of-type(4)::text "a" => "b"
UPDATE: b:nth-of-type(5)::text " " => "b"
UPDATE: b:nth-of-type(6)::text " " => "b"
UPDATE: b:nth-of-type(7)::text " " => "b"
UPDATE: b:nth-of-type(8)::text " " => "b"
```

# Update
```js
const items = document.querySelectorAll("b");
assert.equal(items.length, rows, "rows");
for (const item of items) assert.equal(item.textContent, label);
```
