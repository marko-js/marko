# Render
```html
<button>
  respread
</button>
<input
  placeholder="p"
  value="a"
/>
<div>
  a
</div>
```

# Update `type("input", "one")`
```html
<button>
  respread
</button>
<input
  default-value="a"
  placeholder="p"
  value="one"
/>
<div>
  one
</div>
```
## Change
```
UPDATE: div::text "a" => "one"
```

# Update `click("button")`
```html
<button>
  respread
</button>
<input
  default-value="a"
  placeholder="q"
  value="one"
/>
<div>
  one
</div>
```
## Change
```
UPDATE: input[placeholder] "p" => "q"
```

# Update `type("input", "two")`
```html
<button>
  respread
</button>
<input
  default-value="a"
  placeholder="q"
  value="two"
/>
<div>
  two
</div>
```
## Change
```
UPDATE: div::text "one" => "two"
```
