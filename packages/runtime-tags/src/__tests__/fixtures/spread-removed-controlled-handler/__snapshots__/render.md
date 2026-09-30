# Render
```html
<input
  value="init"
/>
<span>
  value=[init]
</span>
<button>
  drop
</button>
```

# Update `click("button")`
```html
<input
  type="text"
/>
<span>
  value=[init]
</span>
<button>
  drop
</button>
```
## Change
```
UPDATE: input[value] "init" => null
UPDATE: input[type] null => "text"
```

# Update `type("input", "hello")`
