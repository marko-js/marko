# Render
```html
<button>
  a:open
</button>
<a
  class="even"
  href="#x"
>
  x
</a>
```

# Update `click("button")`
```html
<button>
  a:shut
</button>
<a
  class="odd"
  href="#x"
>
  x
</a>
```
## Change
```
UPDATE: button::text "a:open" => "a:shut"
UPDATE: .odd[class] "even" => "odd"
```

# Update `click("button")`
```html
<button>
  a:open
</button>
<a
  class="even"
  href="#x"
>
  x
</a>
```
## Change
```
UPDATE: button::text "a:shut" => "a:open"
UPDATE: .even[class] "odd" => "even"
```

# Update `click("button")`
```html
<button>
  a:shut
</button>
<a
  class="odd"
  href="#x"
>
  x
</a>
```
## Change
```
UPDATE: button::text "a:open" => "a:shut"
UPDATE: .odd[class] "even" => "odd"
```
