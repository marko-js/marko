# Render
```html
<input
  type="checkbox"
  value="0"
/>
<input
  checked=""
  type="checkbox"
  value="1"
/>
<input
  type="checkbox"
  value="2"
/>
<span>
  1
</span>
<button>
  Reset
</button>
```

# Update `click("input")`
```html
<input
  checked=""
  type="checkbox"
  value="0"
/>
<input
  checked=""
  type="checkbox"
  value="1"
/>
<input
  type="checkbox"
  value="2"
/>
<span>
  1,0
</span>
<button>
  Reset
</button>
```
## Change
```
UPDATE: span::text "1" => "1,0"
```

# Update `click("input", 1)`
```html
<input
  checked=""
  type="checkbox"
  value="0"
/>
<input
  default-checked=""
  type="checkbox"
  value="1"
/>
<input
  type="checkbox"
  value="2"
/>
<span>
  0
</span>
<button>
  Reset
</button>
```
## Change
```
UPDATE: span::text "1,0" => "0"
```

# Update `click("input", 2)`
```html
<input
  checked=""
  type="checkbox"
  value="0"
/>
<input
  default-checked=""
  type="checkbox"
  value="1"
/>
<input
  checked=""
  type="checkbox"
  value="2"
/>
<span>
  0,2
</span>
<button>
  Reset
</button>
```
## Change
```
UPDATE: span::text "0" => "0,2"
```

# Update `click("button")`
```html
<input
  type="checkbox"
  value="0"
/>
<input
  checked=""
  type="checkbox"
  value="1"
/>
<input
  type="checkbox"
  value="2"
/>
<span>
  1
</span>
<button>
  Reset
</button>
```
## Change
```
UPDATE: span::text "0,2" => "1"
```
