# Render
```html
<button>
  toggle
</button>
<input
  checked=""
  placeholder="p"
  type="checkbox"
  value=""
/>
<output>
  value=
</output>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<input
  checked=""
  placeholder="p"
  type="checkbox"
  value=""
/>
<output>
  value=x
</output>
```
## Change
```
UPDATE: output::text "value=" => "value=x"
UPDATE: input[checked] "" => null
```
