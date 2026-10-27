# Render `{"on":true,"a":"a2","b":"b2"}`
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    a2
  </em>
  <b>
    b2
  </b>
</main>
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
REMOVE: .toggle + em
REMOVE: .toggle + b
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    a2
  </em>
  <b>
    b2
  </b>
</main>
```
## Change
```
INSERT: .toggle + em
INSERT: main > em + b
UPDATE: main > em::text " " => "a2"
UPDATE: main > b::text " " => "b2"
```
