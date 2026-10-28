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
UPDATE: p::text " " => "a:a"
```

# Update `{"label":"b","promise":{}}`
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
UPDATE: p::text "a:a" => "b:a"
```

# Update `{"label":"c","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  c:a
</p>
```
## Change
```
UPDATE: p::text "b:a" => "c:a"
```
