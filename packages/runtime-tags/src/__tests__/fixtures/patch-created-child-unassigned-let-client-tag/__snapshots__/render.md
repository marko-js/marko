# Render `{"show":false,"label":"a"}`
```html
<button>
  same
</button>
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  same
</button>
<section>
  <em>
    b
  </em>
</section>
```
## Change
```
INSERT: button + section
INSERT: section > em
UPDATE: section > em::text " " => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  same
</button>
<section>
  <em>
    c
  </em>
</section>
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
<button>
  same
</button>
<section>
  <em>
    d
  </em>
</section>
```
## Change
```
UPDATE: section > em::text "c" => "d"
```
