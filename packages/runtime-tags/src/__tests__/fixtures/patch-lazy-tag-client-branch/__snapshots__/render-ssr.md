# Render `{"show":true,"label":"a"}`
```html
<button
  class="toggle"
>
  toggle
</button>
<main />
```

# Update
```js
document.querySelector(".toggle").click();
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<main>
  <button>
    a:0
  </button>
</main>
```
## Change
```
INSERT: main > button
```

# Update `{"show":true,"label":"b"}`
```html
<button
  class="toggle"
>
  toggle
</button>
<main>
  <button>
    b:0
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@0 "a" => "b"
```

# Update
```js
document.querySelector("main button").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<main>
  <button>
    b:1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@2 "0" => "1"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<main />
```
## Change
```
REMOVE: main > button
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
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
```
