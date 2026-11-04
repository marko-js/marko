# Render `{"title":"first","promise":{}}`
```html
<main />
```

# Update
```html
<main>
  <p>
    first boom
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > p
INSERT: main > p::text("first")
INSERT: main > p::text@0 + ::text(" ")
INSERT: main > p::text@5 + ::text("boom")
INSERT: main > p + button
INSERT: main > button::text("0")
```

# Update `{"title":"second","promise":{}}`
```html
<main>
  <p>
    second boom
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@0 "first" => "second"
```
