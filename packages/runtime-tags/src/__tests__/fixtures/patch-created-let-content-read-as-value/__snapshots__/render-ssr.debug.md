# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  clear
</button>
<p />
<section>
  <em>
    static b
  </em>
</section>
```
## Change
```
INSERT: button
INSERT: button + p
INSERT: p + section
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  clear
</button>
<p />
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
  clear
</button>
<p>
  true
</p>
<section />
```
## Change
```
UPDATE: p::text "" => "true"
REMOVE: section > em
```

# Update `{"show":true,"label":"d"}`
