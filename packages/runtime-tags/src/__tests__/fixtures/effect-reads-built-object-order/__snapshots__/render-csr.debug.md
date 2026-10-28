# Render `{"x":"a","y":"b"}`
```html
<p>
  a
</p>
```
## Console
```
LOG { a: { y: 'b' }, b: { x: 'a' } }
```

# Update `{"x":"c","y":"b"}`
```html
<p>
  c
</p>
```
## Change
```
UPDATE: p::text "a" => "c"
```
## Console
```
LOG { a: { y: 'b' }, b: { x: 'c' } }
```

# Update `{"x":"c","y":"d"}`
## Console
```
LOG { a: { y: 'd' }, b: { x: 'c' } }
```
