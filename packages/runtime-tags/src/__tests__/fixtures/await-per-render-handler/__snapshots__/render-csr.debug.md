# Render `{"name":"a","label":"A"}`
```html
<output />
```

# Update
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
## Change
```
INSERT: label, button
UPDATE: label[for] null => "u1-a"
UPDATE: label::text " " => "A"
```

# Update
```js
document.querySelector("button").click();
```
```html
<label
  for="u1-a"
>
  A
</label>
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
