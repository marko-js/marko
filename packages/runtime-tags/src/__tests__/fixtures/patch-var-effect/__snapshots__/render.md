# Render `{"title":"a"}`
```html
<main
  data-log="[a]"
>
  <span>
    fmt
  </span>
  <button>
    0
  </button>
</main>
```

# Update `{"title":"a"}`

# Update `{"title":"b"}`
```html
<main
  data-log="[a][b]"
>
  <span>
    fmt
  </span>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: main[data-log] "[a]" => "[a][b]"
```
