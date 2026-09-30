# Render
```html
<button>
  Click a
</button>
<button>
  Click b
</button>
<div />
```

# Update `click("button")`
```html
<button>
  Click a
</button>
<button>
  Click b
</button>
<div>
  a
</div>
```
## Change
```
UPDATE: div::text "" => "a"
```

# Update `click("button", 1)`
```html
<button>
  Click a
</button>
<button>
  Click b
</button>
<div>
  ab
</div>
```
## Change
```
UPDATE: div::text "a" => "ab"
```
