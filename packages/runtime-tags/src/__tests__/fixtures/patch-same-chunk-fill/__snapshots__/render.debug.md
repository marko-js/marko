# Render `{"$global":{"tag":"a-string-long-enough-to-dedup-across-the-tree-and-the-fill","serializedGlobals":["tag"]},"promise":{}}`
```html
<button>
  Count 0
</button>
<div>
  pending
</div>
<em>
  a-string-long-enough-to-dedup-across-the-tree-and-the-fill-0
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
  a-string-long-enough-to-dedup-across-the-tree-and-the-fill-1
</em>
```
## Change
```
UPDATE: div::text "pending" => "settled"
UPDATE: em::text "a-string-long-enough-to-dedup-across-the-tree-and-the-fill-0" => "a-string-long-enough-to-dedup-across-the-tree-and-the-fill-1"
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
  a-string-long-enough-to-dedup-across-the-tree-and-the-fill-2
</em>
```
## Change
```
UPDATE: em::text "a-string-long-enough-to-dedup-across-the-tree-and-the-fill-1" => "a-string-long-enough-to-dedup-across-the-tree-and-the-fill-2"
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
  a-string-long-enough-to-dedup-across-the-tree-and-the-fill-3
</em>
```
## Change
```
UPDATE: em::text "a-string-long-enough-to-dedup-across-the-tree-and-the-fill-2" => "a-string-long-enough-to-dedup-across-the-tree-and-the-fill-3"
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
  a-string-long-enough-to-dedup-across-the-tree-and-the-fill-4
</em>
```
## Change
```
UPDATE: em::text "a-string-long-enough-to-dedup-across-the-tree-and-the-fill-3" => "a-string-long-enough-to-dedup-across-the-tree-and-the-fill-4"
```
