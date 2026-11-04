# Render `{"n":1}`
```html
<p>
  1
</p>
<i />
```

# Update `{"n":2}`
```html
<p>
  2
</p>
<i />
```
## Change
```
UPDATE: p::text "1" => "2"
```

# Update `{"n":3}`
```html
<p>
  3
</p>
<i />
```
## Change
```
UPDATE: p::text "2" => "3"
```
