# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    static b
  </em>
</section>
```
## Change
```
INSERT: section
UPDATE: section > em::text@7 "" => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    static c
  </em>
</section>
```
## Change
```
UPDATE: section > em::text@7 "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
REMOVE: section > button + em
```

# Update `{"show":true,"label":"d"}`
