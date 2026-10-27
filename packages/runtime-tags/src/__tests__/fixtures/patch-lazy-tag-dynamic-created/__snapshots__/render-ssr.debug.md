# Render `{"show":false,"label":"a"}`
```html
<button
  class="n"
>
  0
</button>
<main />
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
    b:0
  </button>
</main>
```
## Change
```
INSERT: main > button
UPDATE: main > button::text@0 "" => "b"
UPDATE: main > button::text@2 "" => "0"
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
    c:0
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@0 "b" => "c"
```
