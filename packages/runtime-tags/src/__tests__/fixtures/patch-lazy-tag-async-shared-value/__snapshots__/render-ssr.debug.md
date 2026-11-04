# Render `{"label":"a","promise":{}}`
```html
<main>
  <div
    class="a"
  />
  <span>
    x
  </span>
  <div
    class="c"
  />
</main>
```

# Update `{"label":"b","promise":{"value":"y"}}`

# Update
```html
<main>
  <div
    class="a"
    data-item="{\"label\":\"a\"}"
  />
  <span>
    x
  </span>
  <div
    class="c"
    data-item="{\"label\":\"a\"}"
  />
</main>
```
## Change
```
UPDATE: .a[data-item] null => "{\"label\":\"a\"}"
UPDATE: .c[data-item] null => "{\"label\":\"a\"}"
```

# Update
```html
<main>
  <div
    class="a"
    data-item="{\"label\":\"b\"}"
  />
  <span>
    y
  </span>
  <div
    class="c"
    data-item="{\"label\":\"b\"}"
  />
</main>
```
## Change
```
UPDATE: .a[data-item] "{\"label\":\"a\"}" => "{\"label\":\"b\"}"
UPDATE: main > span::text "x" => "y"
UPDATE: .c[data-item] "{\"label\":\"a\"}" => "{\"label\":\"b\"}"
```

# Update Release
