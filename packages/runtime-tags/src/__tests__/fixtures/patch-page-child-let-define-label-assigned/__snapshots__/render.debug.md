# Render `{"more":false,"label":"a"}`
```html
<button>
  clear
</button>
```

# Update `{"more":true,"label":"b"}`
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
INSERT: button + section
INSERT: section > em
UPDATE: section > em::text " " => "b"
```

# Update `{"more":true,"label":"c"}`
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

# Update `{"more":true,"label":"d"}`
