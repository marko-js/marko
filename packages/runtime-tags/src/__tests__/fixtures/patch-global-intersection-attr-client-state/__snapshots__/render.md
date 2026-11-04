# Render `{"$global":{"suffix":"a","serializedGlobals":["suffix"]}}`
```html
<p>
  0a
</p>
<button>
  0
</button>
```

# Update `{"$global":{"suffix":"b","serializedGlobals":["suffix"]}}`
```html
<p>
  0b
</p>
<button>
  0
</button>
```
## Change
```
UPDATE: p::text "0a" => "0b"
```
