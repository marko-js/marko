# Render `{"$global":{"token":"secret-1"}}`
```html
<button>
  clear
</button>
<p>
  fn7hp0
</p>
```

# Update `{"$global":{"token":"secret-2"}}`
```html
<button>
  clear
</button>
<p>
  fn7hp1
</p>
```
## Change
```
UPDATE: p::text "fn7hp0" => "fn7hp1"
```

# Update `{"$global":{"token":"secret-3"}}`
```html
<button>
  clear
</button>
<p>
  fn7hp2
</p>
```
## Change
```
UPDATE: p::text "fn7hp1" => "fn7hp2"
```
