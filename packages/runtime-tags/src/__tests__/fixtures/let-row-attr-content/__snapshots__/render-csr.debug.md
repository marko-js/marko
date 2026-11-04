# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<em>
  row a
</em>
```

# Update `{"label":"b"}`
```html
<button>
  clear
</button>
<em>
  row b
</em>
```
## Change
```
UPDATE: em::text@4 "a" => "b"
```
