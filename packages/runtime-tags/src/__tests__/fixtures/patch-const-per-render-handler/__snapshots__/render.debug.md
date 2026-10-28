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
<button>
  show
</button>
<output />
```

# Update `{"name":"b","label":"B","value":"2"}`
```html
<label
  for="u1-b"
>
  B
</label>
<input
  default-value="2"
  id="u1-b"
  name="b"
  value="1"
/>
<button>
  show
</button>
<output />
```
## Change
```
UPDATE: label::text "A" => "B"
UPDATE: #u1-b[name] "a" => "b"
UPDATE: #u1-b[value] "1" => "2"
UPDATE: label[for] "u1-a" => "u1-b"
UPDATE: #u1-b[id] "u1-a" => "u1-b"
```

# Update
```js
assert.equal(
document.querySelector("label").htmlFor,
document.querySelector("input").id,
  );
```

# Update
```js
document.querySelector("button").click();
```
```html
<label
  for="u1-b"
>
  B
</label>
<input
  default-value="2"
  id="u1-b"
  name="b"
  value="1"
/>
<button>
  show
</button>
<output>
  u1
</output>
```
## Change
```
UPDATE: output::text "" => "u1"
```

# Update
```js
assert.equal(
`${document.querySelector("output") .textContent}-b`,
document.querySelector("input").id,
  );
```

# Update
```js
assert.equal(document.querySelector("output").textContent, "u1");
```
