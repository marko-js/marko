# Render
```html
<input
  disabled=""
/>
<button>
  enable
</button>
```

# Update `click("button")`
```html
<input />
<button>
  disable
</button>
```
## Change
```
UPDATE: input[disabled] "" => null
UPDATE: button::text "enable" => "disable"
```

# Update `click("button")`
```html
<input
  disabled=""
/>
<button>
  enable
</button>
```
## Change
```
UPDATE: input[disabled] null => ""
UPDATE: button::text "disable" => "enable"
```

# Update `click("button")`
```html
<input />
<button>
  disable
</button>
```
## Change
```
UPDATE: input[disabled] "" => null
UPDATE: button::text "enable" => "disable"
```
