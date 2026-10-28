# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  x
</button>
<section>
  <em>
    static b
  </em>
</section>
```
## Change
```
INSERT: button, section
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  x
</button>
<section>
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
d.querySelector("button")?.click();
```
```html
<button>
  x
</button>
<section />
```
## Change
```
REMOVE: section > em
```

# Update `{"show":true,"label":"d"}`
