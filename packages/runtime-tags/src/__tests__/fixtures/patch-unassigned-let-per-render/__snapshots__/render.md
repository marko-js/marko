# Render `{"name":"a","label":"A","value":"1"}`
```html
<label
  for="u1-a"
>
  A
</label>
<input
  id="u1-a"
  name="a"
  value="1"
/>
```

# Update `{"name":"b","label":"B","value":"2"}`
```html
<label
  for="u2-b"
>
  B
</label>
<input
  default-value="2"
  id="u2-b"
  name="b"
  value="1"
/>
```
## Change
```
UPDATE: label[for] "u1-a" => "u2-b"
UPDATE: label::text "A" => "B"
UPDATE: #u2-b[id] "u1-a" => "u2-b"
UPDATE: #u2-b[name] "a" => "b"
UPDATE: #u2-b[value] "1" => "2"
```

# Update
```js
assert.equal(
document.querySelector("label").htmlFor,
document.querySelector("input").id,
  );
```
