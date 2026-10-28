# Render `{"title":"a","key":"fmt","pre":[]}`
```html
<main>
  <em>
    x:a
  </em>
  <em>
    x=a
  </em>
  <em>
    x#a
  </em>
  <p>
    a
  </p>
  <button>
    t
  </button>
</main>
```

# Update `{"title":"b","key":"fmt","pre":[]}`
```html
<main>
  <em>
    x:b
  </em>
  <em>
    x=b
  </em>
  <em>
    x#b
  </em>
  <p>
    b
  </p>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em:nth-of-type(3)::text "x#a" => "x#b"
UPDATE: main > p::text "a" => "b"
UPDATE: main > em:nth-of-type(2)::text "x=a" => "x=b"
UPDATE: main > em:nth-of-type(1)::text "x:a" => "x:b"
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
REMOVE: main > em
REMOVE: main > p
```

# Update `{"title":"c","key":"fmt","pre":[]}`

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
    x=c
  </em>
  <em>
    x#c
  </em>
  <p>
    c
  </p>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > :is(em, em, em, p)
UPDATE: main > em:nth-of-type(3)::text " " => "x#c"
UPDATE: main > em:nth-of-type(2)::text " " => "x=c"
UPDATE: main > p::text " " => "c"
UPDATE: main > em:nth-of-type(1)::text " " => "x:c"
```
