# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <button>
    clear
  </button>
  <b>
    <em>
      static b
    </em>
  </b>
</section>
```
## Change
```
INSERT: section
INSERT: section > b > em
UPDATE: section > b > em::text@7 "" => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<section>
  <button>
    clear
  </button>
  <b>
    <em>
      static c
    </em>
  </b>
</section>
```
## Change
```
UPDATE: section > b > em::text@7 "b" => "c"
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
REMOVE: section > button + b
```

# Update `{"show":true,"label":"d"}`
