# Render `{"title":"Cart","description":"your cart","body":"a"}`
```html
<main>
  a
</main>
```

# Update `{"title":"Search","description":"results","body":"b"}`
```html
<main>
  b
</main>
```
## Change
```
REMOVE: #document > html > head > title::text("Cart | Shop")
INSERT: #document > html > head > title::text("Search | Shop")
UPDATE: #document > html > head > meta[content] "your cart" => "results"
UPDATE: main::text "a" => "b"
```
