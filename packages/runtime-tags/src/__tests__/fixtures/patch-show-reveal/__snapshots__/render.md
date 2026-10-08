# Render `{"label":"one","on":false}`
```html
<button>
  0
</button>
```

# Update `{"label":"two","on":true}`
```html
<p>
  two
</p>
<button>
  0
</button>
```
## Change
```
UPDATE: p::text "one" => "two"
INSERT: p
```
