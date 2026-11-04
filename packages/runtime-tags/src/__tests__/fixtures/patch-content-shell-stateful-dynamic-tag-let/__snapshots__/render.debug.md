# Render `{"on":true,"label":"a"}`
```html
<section>
  <p
    data-n="0"
  >
    a
  </p>
  <button>
    0
  </button>
</section>
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <p
    data-n="1"
  >
    a
  </p>
  <button>
    1
  </button>
</section>
```
## Change
```
UPDATE: section > button::text "0" => "1"
UPDATE: section > p[data-n] "0" => "1"
```

# Update `{"on":true,"label":"b"}`
```html
<section>
  <p
    data-n="1"
  >
    b
  </p>
  <button>
    1
  </button>
</section>
```
## Change
```
UPDATE: section > p::text "a" => "b"
```
