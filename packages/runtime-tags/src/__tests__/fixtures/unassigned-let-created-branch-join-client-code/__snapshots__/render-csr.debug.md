# Render `{"id":"u1","show":false,"name":"a"}`
```html
<button>
  0
</button>
```

# Update `{"id":"u1","show":true,"name":"b"}`
```html
<p>
  u1-b
</p>
<button>
  0
</button>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "u1-b"
```

# Update `{"id":"u1","show":true,"name":"c"}`
```html
<p>
  u1-c
</p>
<button>
  0
</button>
```
## Change
```
UPDATE: p::text "u1-b" => "u1-c"
```
