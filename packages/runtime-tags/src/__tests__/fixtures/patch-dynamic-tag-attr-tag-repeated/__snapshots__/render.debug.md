# Render `{"on":false,"a":"a1","b":"b1"}`
```html
<main>
  <em>
    a1
  </em>
  <b>
    b1
  </b>
</main>
```

# Update `{"on":true,"a":"a2","b":"b2"}`
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
INSERT: main > .toggle
REMOVE: main > b + em
REMOVE: main > b + b
INSERT: .toggle + em
INSERT: main > em + b
UPDATE: main > em::text " " => "a2"
UPDATE: main > b::text " " => "b2"
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

# Update `{"on":true,"a":"a3","b":"b3"}`
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    a3
  </em>
  <b>
    b3
  </b>
</main>
```
## Change
```
UPDATE: main > em::text "a2" => "a3"
UPDATE: main > b::text "b2" => "b3"
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
    a3
  </em>
  <b>
    b3
  </b>
</main>
```
## Change
```
INSERT: .toggle + em
INSERT: main > em + b
UPDATE: main > em::text " " => "a3"
UPDATE: main > b::text " " => "b3"
```
