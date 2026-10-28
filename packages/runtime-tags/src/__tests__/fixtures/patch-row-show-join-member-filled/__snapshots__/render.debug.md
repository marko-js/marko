# Render `{"items":[{"k":1,"on":true}],"id":"a"}`
```html
<div>
  shown
</div>
<p>
  a
</p>
```

# Update `{"items":[{"k":1,"on":true}],"id":"b"}`
```html
<div>
  shown
</div>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```

# Update `{"items":[{"k":1,"on":false}],"id":"c"}`
```html
<div />
<p>
  c
</p>
```
## Change
```
REMOVE: div::text("shown")
UPDATE: p::text "b" => "c"
```

# Update `{"items":[{"k":1,"on":true}],"id":"d"}`
```html
<div>
  shown
</div>
<p>
  d
</p>
```
## Change
```
INSERT: div::text("shown")
UPDATE: p::text "c" => "d"
```
