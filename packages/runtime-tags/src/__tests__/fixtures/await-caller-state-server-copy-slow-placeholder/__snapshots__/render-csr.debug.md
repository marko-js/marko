# Render `{"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update
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
## Change
```
INSERT: .swap + p
UPDATE: p::text@2 "" => "a"
UPDATE: p::text@0 "" => "a"
```

# Update `{"label":"b","promise":{"value":"SECRET_server"}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  b:a
</p>
```
## Change
```
UPDATE: p::text@0 "a" => "b"
```
