# Render `{"label":"a"}`
```html
<p />
```

# Update `{"label":"b"}`
```html
<p>
  a!
</p>
```
## Change
```
UPDATE: p::text "" => "a!"
```

# Update
```html
<p>
  b!
</p>
```
## Change
```
UPDATE: p::text "a!" => "b!"
```
