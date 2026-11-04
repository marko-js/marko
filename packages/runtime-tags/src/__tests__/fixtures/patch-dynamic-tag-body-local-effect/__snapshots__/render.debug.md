# Render `{"show":true,"on":false,"note":"a"}`
```html
<main>
  <div>
    a!
  </div>
  <div>
    <em>
      a!
    </em>
  </div>
</main>
```

# Update `{"show":true,"on":false,"note":"b"}`
```html
<main>
  <div>
    b!
  </div>
  <div>
    <em>
      b!
    </em>
  </div>
</main>
```
## Change
```
UPDATE: main > div:nth-of-type(2) > em::text "a!" => "b!"
REMOVE: main > div:nth-of-type(1)::text("a!")
INSERT: main > div:nth-of-type(1)::text("b!")
```

# Update `{"show":true,"on":true,"note":"c"}`
```html
<main>
  <div>
    c!
  </div>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c!
  </em>
</main>
```
## Change
```
INSERT: main > div + .toggle
REMOVE: main > em + div
INSERT: .toggle + em
UPDATE: main > em::text " " => "c!"
REMOVE: main > div::text("b!")
INSERT: main > div::text("c!")
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <div>
    c!
  </div>
  <button
    class="toggle"
  >
    toggle
  </button>
</main>
```
## Change
```
REMOVE: .toggle + em
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <div>
    c!
  </div>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c!
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text " " => "c!"
```

# Update `{"show":true,"on":false,"note":"d"}`
```html
<main>
  <div>
    d!
  </div>
  <div>
    <em>
      d!
    </em>
  </div>
</main>
```
## Change
```
INSERT: main > div:nth-of-type(1) + div
REMOVE: main > div:nth-of-type(2) + button
REMOVE: main > div:nth-of-type(2) + em
UPDATE: main > div:nth-of-type(2) > em::text " " => "d!"
REMOVE: main > div:nth-of-type(1)::text("c!")
INSERT: main > div:nth-of-type(1)::text("d!")
```
