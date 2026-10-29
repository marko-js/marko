# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  clear
</button>
<section>
  <em>
    b
  </em>
</section>
```
## Change
```
INSERT: button, section
UPDATE: section > em::text " " => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  clear
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
```html
<button>
  clear
</button>
<section />
```
## Change
```
REMOVE: section > em
```

# Update `{"show":true,"label":"d"}`
