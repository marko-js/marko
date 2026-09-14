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

# Update
```html
<button
  class="n"
>
  0
</button>
<main>
  <span>
    b0
  </span>
</main>
```
## Change
```
INSERT: main > span
```

# Update
```js
document.querySelector(".n").click();
```
```html
<button
  class="n"
>
  1
</button>
<main>
  <span>
    b1
  </span>
</main>
```
## Change
```
UPDATE: .n::text "0" => "1"
UPDATE: main > span::text "b0" => "b1"
```

# Update `{"show":true,"label":"c"}`
```html
<button
  class="n"
>
  1
</button>
<main>
  <span>
    c1
  </span>
</main>
```
## Change
```
UPDATE: main > span::text "b1" => "c1"
```
