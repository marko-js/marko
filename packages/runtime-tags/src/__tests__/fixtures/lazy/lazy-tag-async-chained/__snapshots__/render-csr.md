# Render `{"value":1}`

# Update
```html
<button
  id="sync"
>
  1
</button>
```
## Change
```
INSERT: #sync
```

# Update
```html
<button
  id="sync"
>
  1
</button>
<button
  id="async"
>
  2
</button>
```
## Change
```
INSERT: #sync + #async
```

# Update `click("#sync")`
```html
<button
  id="sync"
>
  2
</button>
<button
  id="async"
>
  2
</button>
```
## Change
```
UPDATE: #sync::text "1" => "2"
```

# Update `click("#async")`
```html
<button
  id="sync"
>
  2
</button>
<button
  id="async"
>
  3
</button>
```
## Change
```
UPDATE: #async::text "2" => "3"
```
