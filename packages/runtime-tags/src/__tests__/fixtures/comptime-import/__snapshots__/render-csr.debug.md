# Render `{"cents":250}`
```html
<h1>
  LOGO TEE!
</h1>
<p>
  list price $24.00
</p>
<p>
  your price $2.50
</p>
```

# Update `{"cents":3000}`
```html
<h1>
  LOGO TEE!
</h1>
<p>
  list price $24.00
</p>
<p>
  your price $30.00
</p>
```
## Change
```
UPDATE: p:nth-of-type(2)::text@11 "$2.50" => "$30.00"
```
