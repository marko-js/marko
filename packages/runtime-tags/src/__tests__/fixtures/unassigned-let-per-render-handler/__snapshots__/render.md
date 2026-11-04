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
<input
  id="u1-a"
  name="a"
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
