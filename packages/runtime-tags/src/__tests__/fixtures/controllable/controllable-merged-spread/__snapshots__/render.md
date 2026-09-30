# Render
```html
<button>
  pick
</button>
<input
  placeholder="p"
  type="radio"
  value="z"
/>
<span>
  a
</span>
```

# Update `click("button")`
```html
<button>
  pick
</button>
<input
  default-checked=""
  placeholder="p"
  type="radio"
  value="z"
/>
<span>
  z
</span>
```
## Change
```
UPDATE: span::text "a" => "z"
UPDATE: input[checked] null => ""
```
