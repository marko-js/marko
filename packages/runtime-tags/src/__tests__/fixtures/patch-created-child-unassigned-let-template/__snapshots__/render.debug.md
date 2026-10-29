# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <em>
    b
  </em>
</section>
<button>
  x
</button>
```
## Change
```
INSERT: section, button
```

# Update `{"show":true,"label":"c"}`
```html
<section>
  <em>
    c
  </em>
</section>
<button>
  x
</button>
```
## Change
```
UPDATE: section > em::text "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"label":"d"}`
```html
<section>
  <em>
    d
  </em>
</section>
<button>
  x
</button>
```
## Change
```
UPDATE: section > em::text "c" => "d"
```
