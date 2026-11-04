# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <p>
    b
  </p>
  <button>
    toggle
  </button>
  <i>
    note
  </i>
</section>
```
## Change
```
INSERT: section
UPDATE: section > p::text " " => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <button>
    toggle
  </button>
  <i>
    note
  </i>
</section>
```
## Change
```
REMOVE: section > p
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <p>
    b
  </p>
  <button>
    toggle
  </button>
  <i>
    note
  </i>
</section>
```
## Change
```
INSERT: section > p
UPDATE: section > p::text " " => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<section>
  <p>
    c
  </p>
  <button>
    toggle
  </button>
  <i>
    note
  </i>
</section>
```
## Change
```
UPDATE: section > p::text "b" => "c"
```
