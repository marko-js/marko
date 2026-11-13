# Render `{"label":"a"}`
```html
<em>
  a 1
</em>
<section>
  <button>
    swap
  </button>
  <em>
    a 2
  </em>
</section>
```

# Update `{"label":"b"}`
```html
<em>
  b 1
</em>
<section>
  <button>
    swap
  </button>
  <em>
    b 2
  </em>
</section>
```
## Change
```
UPDATE: em::text@0 "a" => "b"
UPDATE: section > em::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b 1
</em>
<section>
  <button>
    swap
  </button>
  <b>
    other 2
  </b>
</section>
```
## Change
```
INSERT: section > button + b
REMOVE: section > b + em
UPDATE: section > b::text@6 "" => "2"
```

# Update `{"label":"c"}`
```html
<em>
  c 1
</em>
<section>
  <button>
    swap
  </button>
  <b>
    other 2
  </b>
</section>
```
## Change
```
UPDATE: em::text@0 "b" => "c"
```
