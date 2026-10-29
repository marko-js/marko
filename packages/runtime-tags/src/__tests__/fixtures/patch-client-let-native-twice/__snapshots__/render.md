# Render `{"tag":"b","label":"a"}`
```html
<b
  title="a"
/>
<b
  title="a"
/>
```

# Update `{"tag":"i","label":"b"}`
```html
<b
  title="b"
/>
<b
  title="b"
/>
```
## Change
```
UPDATE: b:nth-of-type(1)[title] "a" => "b"
UPDATE: b:nth-of-type(2)[title] "a" => "b"
```

# Update
```js
assert.strictEqual(document.querySelectorAll("b").length, 2);
assert.ok(
  Array.from(document.querySelectorAll("b")).every(
(el) => el.getAttribute("title") === "b",
  ),
);
```
