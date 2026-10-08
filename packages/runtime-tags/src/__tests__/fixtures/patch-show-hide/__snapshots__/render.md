# Render `{"label":"one","on":true}`
```html
<p>
  one
</p>
<button>
  0
</button>
```

# Update `{"label":"two","on":false}`
```html
<button>
  0
</button>
```
## Change
```
UPDATE: #document-fragment > p::text "one" => "two"
REMOVE: p
```
