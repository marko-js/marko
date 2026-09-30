# Render
```html
<button
  class="parent"
>
  Inc
</button>
<button
  class="child"
>
  child: 0
</button>
```

# Update `click(".parent")`
```html
<button
  class="parent"
>
  Inc
</button>
```
## Change
```
REMOVE: .parent + button
```

# Update `click(".parent")`

# Update
```html
<button
  class="parent"
>
  Inc
</button>
<button
  class="child"
>
  child: 2
</button>
```
## Change
```
INSERT: .parent + .child
```

# Update `click(".child")`
```html
<button
  class="parent"
>
  Inc
</button>
<button
  class="child"
>
  child: 3
</button>
```
## Change
```
UPDATE: .child::text@7 "2" => "3"
```
