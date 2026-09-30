# Render `{"value":1}`
```html
<button
  id="a"
>
  1
</button>
<button
  id="b"
>
  10
</button>
```

# Update `click("#a")`
```html
<button
  id="a"
>
  2
</button>
<button
  id="b"
>
  10
</button>
```
## Change
```
UPDATE: #a::text "1" => "2"
```

# Update `click("#b")`
```html
<button
  id="a"
>
  2
</button>
<button
  id="b"
>
  11
</button>
```
## Change
```
UPDATE: #b::text "10" => "11"
```
