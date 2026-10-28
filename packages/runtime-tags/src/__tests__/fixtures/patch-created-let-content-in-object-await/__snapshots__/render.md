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
<div>
  b
</div>
```
## Change
```
INSERT: button, section
INSERT: section + div
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
<div>
  c
</div>
```
## Change
```
UPDATE: section > em::text@7 "b" => "c"
REMOVE: div
INSERT: section + div
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
<div>
  c
</div>
```
## Change
```
REMOVE: section > em
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  x
</button>
<section />
<div>
  d
</div>
```
## Change
```
REMOVE: div
INSERT: section + div
```
