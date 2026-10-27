# Render `{"show":true,"label":"a"}`
```html
<button
  class="n"
>
  0
</button>
<main>
  <button>
    a
  </button>
</main>
```

# Update `{"show":false,"label":"a"}`
```html
<button
  class="n"
>
  0
</button>
<main />
```
## Change
```
REMOVE: main > button
```

# Update `{"show":true,"label":"b"}`
```html
<button
  class="n"
>
  0
</button>
<main>
  <button>
    b
  </button>
</main>
```
## Change
```
INSERT: main > button
UPDATE: main > button::text " " => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<button
  class="n"
>
  0
</button>
<main>
  <button>
    c
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "b" => "c"
```
