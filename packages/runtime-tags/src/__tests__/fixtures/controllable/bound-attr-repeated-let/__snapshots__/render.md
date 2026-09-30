# Render
```html
<button>
  start
</button>
<input
  value="start"
/>
<input
  value="start"
/>
<input
  value="start"
/>
```

# Update `type("input", "typed")`
```html
<button>
  typed
</button>
<input
  default-value="start"
  value="typed"
/>
<input
  default-value="start"
  value="typed"
/>
<input
  default-value="start"
  value="typed"
/>
```
## Change
```
UPDATE: button::text "start" => "typed"
```

# Update `click("button")`
```html
<button>
  typed!
</button>
<input
  default-value="start"
  value="typed!"
/>
<input
  default-value="start"
  value="typed!"
/>
<input
  default-value="start"
  value="typed!"
/>
```
## Change
```
UPDATE: button::text "typed" => "typed!"
```
