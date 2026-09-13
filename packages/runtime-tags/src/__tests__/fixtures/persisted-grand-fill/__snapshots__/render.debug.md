# Render `{"title":"t1","subtitle":"s1"}`
```html
<main>
  <button>
    t
  </button>
</main>
```

# Update `{"title":"t2","subtitle":"s2"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h3>
    t2
  </h3>
  <em>
    s2
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > :is(h3, em)
UPDATE: main > h3::text " " => "t2"
UPDATE: main > em::text " " => "s2"
```

# Update `{"title":"t3","subtitle":"s3"}`
```html
<main>
  <h3>
    t3
  </h3>
  <em>
    s3
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > h3::text "t2" => "t3"
UPDATE: main > em::text "s2" => "s3"
```
