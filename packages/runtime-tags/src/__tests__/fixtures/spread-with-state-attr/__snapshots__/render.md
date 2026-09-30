# Render `{"attrs":{"id":"x","class":"y"}}`
```html
<div
  class="y"
  id="x"
  title="a"
/>
<button>
  update
</button>
```

# Update `click("button")`
```html
<div
  class="y"
  id="x"
  title="b"
/>
<button>
  update
</button>
```
## Change
```
UPDATE: #x[title] "a" => "b"
```
