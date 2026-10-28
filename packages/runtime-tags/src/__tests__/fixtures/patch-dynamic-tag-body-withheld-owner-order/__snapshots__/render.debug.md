# Render `{"on":true,"a":"a1","b":"b1"}`
```html
<main>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    a1
  </em>
  <button
    class="toggle"
  >
    t
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    b1
  </em>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    a1
  </em>
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
  <button
    class="toggle"
  >
    t
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    b2
  </em>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    a2
  </em>
</main>
```
## Change
```
UPDATE: main > em:nth-of-type(1)::text "a1" => "a2"
UPDATE: main > em:nth-of-type(2)::text "b1" => "b2"
UPDATE: main > em:nth-of-type(3)::text "a1" => "a2"
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
  <button
    class="toggle"
  >
    t
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <button
    class="toggle"
  >
    t
  </button>
</main>
```
## Change
```
REMOVE: main > button:nth-of-type(1) + em
REMOVE: main > button:nth-of-type(3) + em
REMOVE: main > button:nth-of-type(4) + em
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
  <button
    class="toggle"
  >
    t
  </button>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    b2
  </em>
  <button
    class="toggle"
  >
    t
  </button>
  <em>
    a2
  </em>
</main>
```
## Change
```
INSERT: main > button:nth-of-type(1) + em
INSERT: main > button:nth-of-type(3) + em
INSERT: main > button:nth-of-type(4) + em
UPDATE: main > em:nth-of-type(1)::text " " => "a2"
UPDATE: main > em:nth-of-type(2)::text " " => "b2"
UPDATE: main > em:nth-of-type(3)::text " " => "a2"
```
