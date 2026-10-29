# Render `{"big":false,"label":"a"}`
```html
<button>
  clear
</button>
<section>
  <em>
    a
  </em>
</section>
```

# Update `{"big":false,"label":"b"}`
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
UPDATE: section > em::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"big":true,"label":"c"}`
```html
<button>
  clear
</button>
<section>
  <strong>
    c
  </strong>
</section>
```
## Change
```
INSERT: section > strong
REMOVE: section > strong + em
UPDATE: section > strong::text " " => "c"
```

# Update `{"big":false,"label":"d"}`
```html
<button>
  clear
</button>
<section>
  <em>
    d
  </em>
</section>
```
## Change
```
INSERT: section > em
REMOVE: section > em + strong
UPDATE: section > em::text " " => "d"
```
