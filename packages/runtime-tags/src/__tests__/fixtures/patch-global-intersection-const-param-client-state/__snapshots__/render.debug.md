# Render `{"$global":{"suffix":"a","serializedGlobals":["suffix"]},"a":"A"}`
```html
<p>
  A0a
</p>
<button>
  0
</button>
```

# Update `{"$global":{"suffix":"b","serializedGlobals":["suffix"]},"a":"A"}`
```html
<p>
  A0b
</p>
<button>
  0
</button>
```
## Change
```
UPDATE: p::text "A0a" => "A0b"
```
