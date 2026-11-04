# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<div>
  <section>
    <button>
      clear
    </button>
    <em>
      static b
    </em>
  </section>
</div>
```
## Change
```
INSERT: div
INSERT: div > section > button + em
UPDATE: div > section > em::text@7 "" => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<div>
  <section>
    <button>
      clear
    </button>
    <em>
      static c
    </em>
  </section>
</div>
```
## Change
```
UPDATE: div > section > em::text@7 "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <section>
    <button>
      clear
    </button>
  </section>
</div>
```
## Change
```
REMOVE: div > section > button + em
```

# Update `{"show":true,"label":"d"}`
