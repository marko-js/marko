# Render `{"title":"t1","body":"b1"}`
```html
<main>
  <button>
    t
  </button>
</main>
```

# Update `{"title":"t2","body":"b2"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h3>
    t2
  </h3>
  <p>
    b2
  </p>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > :is(h3, p)
UPDATE: main > h3::text " " => "t2"
UPDATE: main > p::text " " => "b2"
```

# Update `{"title":"t3","body":"b3"}`
```html
<main>
  <h3>
    t3
  </h3>
  <p>
    b3
  </p>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > h3::text "t2" => "t3"
UPDATE: main > p::text "b2" => "b3"
```
