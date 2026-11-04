# Render `{"show":false,"label":"a","items":[{"text":"one"}]}`
```html
<main />
```

# Update `{"show":true,"label":"b","items":[{"text":"two"},{"text":"three"}]}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <i>
    two:b
  </i>
  <i>
    three:b
  </i>
</main>
```
## Change
```
INSERT: main > .toggle
INSERT: .toggle + i
INSERT: main > i:nth-of-type(1) + i
UPDATE: main > i:nth-of-type(1)::text@4 "" => "b"
UPDATE: main > i:nth-of-type(2)::text@6 "" => "b"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
</main>
```
## Change
```
REMOVE: .toggle + i
REMOVE: .toggle + i
```

# Update `{"show":true,"label":"c","items":[{"text":"four"}]}`

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <i>
    four:c
  </i>
</main>
```
## Change
```
INSERT: .toggle + i
UPDATE: main > i::text@5 "" => "c"
```

# Update `{"show":true,"label":"d","items":[{"text":"five"},{"text":"six"}]}`
```html
<main>
  <button
    class="toggle"
  >
    toggle
  </button>
  <i>
    five:d
  </i>
  <i>
    six:d
  </i>
</main>
```
## Change
```
UPDATE: main > i:nth-of-type(1)::text@0 "four" => "five"
INSERT: main > i:nth-of-type(1) + i
UPDATE: main > i:nth-of-type(1)::text@5 "c" => "d"
UPDATE: main > i:nth-of-type(2)::text@4 "" => "d"
```
