# Render `{"label":"a"}`
```html
<h1>
  a
</h1>
<button>
  clear
</button>
<section>
  <em>
    static a
  </em>
</section>
```

# Update `{"label":"b"}`
```html
<h1>
  b
</h1>
<button>
  clear
</button>
<section>
  <em>
    static b
  </em>
</section>
```
## Change
```
UPDATE: h1::text "a" => "b"
UPDATE: section > em::text@7 "a" => "b"
```

# Update
```js
d.querySelector("button")?.click();
```
```html
<h1>
  b
</h1>
<button>
  clear
</button>
```
## Change
```
REMOVE: button + section
```

# Update `{"label":"c"}`
```html
<h1>
  c
</h1>
<button>
  clear
</button>
```
## Change
```
UPDATE: h1::text "b" => "c"
```
