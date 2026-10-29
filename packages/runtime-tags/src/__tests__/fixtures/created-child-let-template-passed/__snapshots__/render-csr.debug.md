# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  clear
</button>
<p>
  true
</p>
<section>
  <em>
    b
  </em>
</section>
```
## Change
```
INSERT: button, p, section
INSERT: section > em
UPDATE: section > em::text " " => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  clear
</button>
<p>
  true
</p>
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
<p>
  false
</p>
<section />
```
## Change
```
UPDATE: p::text "true" => "false"
REMOVE: section > em
```

# Update `{"show":true,"label":"d"}`
