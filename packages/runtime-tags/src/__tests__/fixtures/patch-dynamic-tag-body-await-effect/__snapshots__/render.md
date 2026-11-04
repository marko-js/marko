# Render `{"on":false,"note":"a","v":{"value":"x"}}`
```html
<main>
  <div />
</main>
```

# Update
```html
<main>
  <div>
    a
  </div>
  <div>
    <em>
      a x
    </em>
  </div>
</main>
```
## Change
```
INSERT: main > div:nth-of-type(1) + div
INSERT: main > div:nth-of-type(2) > em
INSERT: main > div:nth-of-type(2) > em::text("a")
INSERT: main > div:nth-of-type(2) > em::text@0 + ::text(" ")
INSERT: main > div:nth-of-type(2) > em::text@1 + ::text("x")
INSERT: main > div:nth-of-type(1)::text("a")
```

# Update `{"on":false,"note":"b","v":{"value":"y"}}`
```html
<main>
  <div>
    b
  </div>
  <div>
    <em>
      b y
    </em>
  </div>
</main>
```
## Change
```
UPDATE: main > div:nth-of-type(2) > em::text@0 "a" => "b"
UPDATE: main > div:nth-of-type(2) > em::text@2 "x" => "y"
REMOVE: main > div:nth-of-type(1)::text("a")
INSERT: main > div:nth-of-type(1)::text("b")
```

# Update `{"on":true,"note":"c","v":{"value":"z"}}`
```html
<main>
  <div>
    c
  </div>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c z
  </em>
</main>
```
## Change
```
INSERT: main > div + .toggle
REMOVE: main > em + div
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "c"
UPDATE: main > em::text@2 "" => "z"
REMOVE: main > div::text("b")
INSERT: main > div::text("c")
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<main>
  <div>
    c
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
    c
  </div>
  <button
    class="toggle"
  >
    toggle
  </button>
  <em>
    c z
  </em>
</main>
```
## Change
```
INSERT: .toggle + em
UPDATE: main > em::text@0 "" => "c"
UPDATE: main > em::text@2 "" => "z"
```

# Update `{"on":false,"note":"d","v":{"value":"w"}}`
```html
<main>
  <div>
    d
  </div>
  <div>
    <em>
      d w
    </em>
  </div>
</main>
```
## Change
```
INSERT: main > div:nth-of-type(1) + div
REMOVE: main > div:nth-of-type(2) + button
REMOVE: main > div:nth-of-type(2) + em
UPDATE: main > div:nth-of-type(2) > em::text@0 "" => "d"
UPDATE: main > div:nth-of-type(2) > em::text@2 "" => "w"
REMOVE: main > div:nth-of-type(1)::text("c")
INSERT: main > div:nth-of-type(1)::text("d")
```
