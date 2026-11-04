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
