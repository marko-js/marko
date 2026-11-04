# Render `{"show":false}`
```html
<button
  class="n"
>
  0
</button>
<main />
```

# Update `{"show":true}`
```html
<button
  class="n"
>
  0
</button>
<main>
  <em>
    thing
  </em>
</main>
```
## Change
```
INSERT: main > em
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
  <em>
    thing
  </em>
</main>
```
## Change
```
UPDATE: .n::text "0" => "1"
```

# Update `{"show":false}`
```html
<button
  class="n"
>
  1
</button>
<main />
```
## Change
```
REMOVE: main > em
```

# Update `{"show":true}`
```html
<button
  class="n"
>
  1
</button>
<main>
  <em>
    thing
  </em>
</main>
```
## Change
```
INSERT: main > em
```
