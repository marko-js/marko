# Render `{"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a:a
</p>
```

# Update `{"label":"b","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a:b
</p>
```
## Change
```
UPDATE: p::text "a:a" => "a:b"
```
