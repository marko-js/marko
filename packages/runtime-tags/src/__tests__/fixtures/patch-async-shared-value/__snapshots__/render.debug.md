# Render `{"label":"a","promise":{}}`
```html
<main>
  <div
    class="a"
    data-item="{\"label\":\"a\"}"
  />
  <div
    class="b"
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

# Update `{"label":"b","promise":{"value":"y"}}`
```html
<main>
  <div
    class="a"
    data-item="{\"label\":\"b\"}"
  />
  <div
    class="b"
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
UPDATE: .b[data-item] "{\"label\":\"a\"}" => "{\"label\":\"b\"}"
UPDATE: main > span::text "x" => "y"
UPDATE: .c[data-item] "{\"label\":\"a\"}" => "{\"label\":\"b\"}"
```
