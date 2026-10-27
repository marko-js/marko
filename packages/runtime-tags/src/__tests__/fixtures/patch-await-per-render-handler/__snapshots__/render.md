# Render `{"name":"a","label":"A"}`
```html
<label
  for="u1-a"
>
  A
</label>
<button>
  show
</button>
<output />
```

# Update `{"name":"b","label":"B"}`
```html
<label
  for="u2-b"
>
  B
</label>
<button>
  show
</button>
<output />
```
## Change
```
UPDATE: label[for] "u1-a" => "u2-b"
UPDATE: label::text "A" => "B"
```

# Update
```js
document.querySelector("button").click();
```
```html
<label
  for="u2-b"
>
  B
</label>
<button>
  show
</button>
<output>
  u2
</output>
```
## Change
```
UPDATE: output::text "" => "u2"
```

# Update
```js
assert.equal(
`${document.querySelector("output") .textContent}-b`,
document.querySelector("label").htmlFor,
  );
```
