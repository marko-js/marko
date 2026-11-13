# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  drop
</button>
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
INSERT: button
INSERT: button + section
UPDATE: section > em::text@7 "" => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  drop
</button>
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
d.querySelectorAll("button")[1].click();
```
```html
<button>
  drop
</button>
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
