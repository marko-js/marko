# Render `{"which":true,"a":"a"}`
```html
<i>
  one
</i>
<p>
  a!
</p>
```

# Update `{"which":true,"a":"b"}`
```html
<i>
  one
</i>
<p>
  b!
</p>
```
## Change
```
UPDATE: p::text "a!" => "b!"
```

# Update `{"which":false,"a":"c"}`
```html
<b>
  two
</b>
<p>
  c?
</p>
```
## Change
```
INSERT: b
REMOVE: b + i
UPDATE: p::text "b!" => "c?"
```
