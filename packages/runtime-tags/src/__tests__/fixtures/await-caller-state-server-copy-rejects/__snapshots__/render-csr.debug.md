# Render `{"label":"a","promise":{"value":"a"}}`
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

# Update `{"label":"b","promise":{"value":{}}}`
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
