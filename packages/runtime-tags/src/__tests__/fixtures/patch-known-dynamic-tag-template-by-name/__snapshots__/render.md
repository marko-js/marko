# Render `{"framed":true,"label":"a"}`
```html
<button>
  0
</button>
<section>
  <em>
    a
  </em>
</section>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<section>
  <em>
    a
  </em>
</section>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"framed":true,"label":"b"}`
```html
<button>
  1
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

# Update `{"framed":false,"label":"c"}`
```html
<button>
  1
</button>
```
## Change
```
REMOVE: button + section
```

# Update `{"framed":true,"label":"d"}`
```html
<button>
  1
</button>
<section>
  <em>
    d
  </em>
</section>
```
## Change
```
INSERT: button + section
INSERT: section > em
UPDATE: section > em::text " " => "d"
```
