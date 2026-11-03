# Render `{"show":true,"label":"a"}`
```html
<button
  class="n"
>
  0
</button>
<main>
  <button
    class="count"
  >
    a:0
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
  <button
    class="count"
  >
    b:0
  </button>
</main>
```
## Change
```
INSERT: main > .count
UPDATE: .count::text@0 "" => "b"
UPDATE: .count::text@2 "" => "0"
```

# Update `{"show":true,"label":"c"}`
```html
<button
  class="n"
>
  0
</button>
<main>
  <button
    class="count"
  >
    c:0
  </button>
</main>
```
## Change
```
UPDATE: .count::text@0 "b" => "c"
```
