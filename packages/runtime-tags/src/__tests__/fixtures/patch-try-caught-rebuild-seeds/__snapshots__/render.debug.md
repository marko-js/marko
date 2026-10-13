# Render `{"title":"a"}`
```html
<main>
  <p>
    Shop a
  </p>
  <button>
    0
  </button>
</main>
```

# Update `{"title":"b","fail":true}`
```html
<main>
  caught
</main>
```
## Change
```
UPDATE: p::text@5 "a" => "b"
INSERT: main::text("caught")
REMOVE: main::text + p
REMOVE: main::text + button
```

# Update `{"title":"c"}`
```html
<main>
  <p>
    Shop c
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > :is(p, button)
REMOVE: main > button + ::text("caught")
UPDATE: main > p::text@0 "" => "Shop"
UPDATE: main > p::text@5 "" => "c"
UPDATE: main > button::text " " => "0"
```
