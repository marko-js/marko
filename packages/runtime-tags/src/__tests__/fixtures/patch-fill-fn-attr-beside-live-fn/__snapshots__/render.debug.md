# Render `{"title":"a","flag":true}`
```html
<main>
  <em>
    x:a
  </em>
  <em>
    x#a
  </em>
  <button>
    t
  </button>
</main>
```

# Update `{"title":"b","flag":true}`
```html
<main>
  <em>
    x:b
  </em>
  <em>
    x#b
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em:nth-of-type(1)::text "x:a" => "x:b"
UPDATE: main > em:nth-of-type(2)::text "x#a" => "x#b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > em
REMOVE: main > em
```

# Update `{"title":"c","flag":true}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    x:c
  </em>
  <em>
    x#c
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > :is(em, em)
UPDATE: main > em:nth-of-type(1)::text " " => "x:c"
UPDATE: main > em:nth-of-type(2)::text " " => "x#c"
```
