# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<span>
  new
</span>
<em>
  a
</em>
<span>
  new
</span>
<em>
  a
</em>
```

# Update
```js
for (const span of document.querySelectorAll("span")) {
assert.equal(span.textContent, "new");
}
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<span>
  new
</span>
<em>
  b
</em>
<span>
  new
</span>
<em>
  b
</em>
<button>
  clear
</button>
<span>
  new
</span>
<em>
  b
</em>
<span>
  new
</span>
<em>
  b
</em>
```
## Change
```
INSERT: em:nth-of-type(2) + button
UPDATE: em:nth-of-type(1)::text "a" => "b"
UPDATE: em:nth-of-type(2)::text "a" => "b"
INSERT: button:nth-of-type(2) + :is(span, em)
INSERT: em:nth-of-type(3) + :is(span, em)
UPDATE: span:nth-of-type(3)::text " " => "new"
UPDATE: span:nth-of-type(4)::text " " => "new"
UPDATE: em:nth-of-type(3)::text " " => "b"
UPDATE: em:nth-of-type(4)::text " " => "b"
```

# Update
```js
for (const span of document.querySelectorAll("span")) {
assert.equal(span.textContent, "new");
}
```
