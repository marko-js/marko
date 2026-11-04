# Render `{"promise":{},"other":{}}`
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
  a
</p>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text " " => "a"
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
<b>
  a
</b>
```
## Change
```
INSERT: p + b
UPDATE: b::text " " => "a"
```

# Update `{"promise":{},"other":{}}`

# Update
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
<span>
  caught
</span>
```
## Change
```
INSERT: p + span
REMOVE: span + b
```
