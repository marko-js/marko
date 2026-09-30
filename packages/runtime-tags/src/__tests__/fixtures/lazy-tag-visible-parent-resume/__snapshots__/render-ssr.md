# Render `{"value":1}`
```html
<button
  class="parent"
>
  parent 1
</button>
<button
  class="child"
>
  child 1
</button>
```

# Update `click(".parent")`
```html
<button
  class="parent"
>
  parent 2
</button>
<button
  class="child"
>
  child 1
</button>
```
## Change
```
UPDATE: .parent::text@7 "1" => "2"
```

# Update `click(".child")`
```html
<button
  class="parent"
>
  parent 2
</button>
<button
  class="child"
>
  child 2
</button>
```
## Change
```
UPDATE: .child::text@6 "1" => "2"
```
