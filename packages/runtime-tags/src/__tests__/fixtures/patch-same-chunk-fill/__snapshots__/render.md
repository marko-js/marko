# Render `{"$global":{"tag":"a-string-long-enough-to-dedup-across-the-tree-and-the-fill","serializedGlobals":["tag"]},"promise":{}}`
```html
<button>
  Count 0
</button>
<div>
  pending
</div>
<em>
  a-string-long-enough-to-dedup-across-the-tree-and-the-fill
</em>
```

# Update `{"promise":{}}`
```html
<button>
  Count 0
</button>
<div>
  settled
</div>
<em>
  a-string-long-enough-to-dedup-across-the-tree-and-the-fill
</em>
```
## Change
```
UPDATE: div::text "pending" => "settled"
```

# Update `{"promise":{}}`
