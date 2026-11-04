# Render `{"title":"Cart","body":"a"}`
```html
<main>
  a
</main>
```

# Update `{"title":"Search","body":"b"}`
```html
<main>
  b
</main>
```
## Change
```
REMOVE: #document > html > head > title::text("Cart & more <3")
INSERT: #document > html > head > title::text("Search & more <3")
UPDATE: main::text "a" => "b"
```
