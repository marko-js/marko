# Render `{"tag":"t1"}`
```html
<main>
  <em>
    x
  </em>
  <em>
    t1
  </em>
  <button>
    t
  </button>
</main>
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

# Update `{"tag":"t2"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <em>
    x
  </em>
  <em>
    t2
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > :is(em, em)
UPDATE: main > em:nth-of-type(2)::text " " => "t2"
UPDATE: main > em:nth-of-type(1)::text " " => "x"
```

# Update `{"tag":"t3"}`
```html
<main>
  <em>
    x
  </em>
  <em>
    t3
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em:nth-of-type(2)::text "t2" => "t3"
```
