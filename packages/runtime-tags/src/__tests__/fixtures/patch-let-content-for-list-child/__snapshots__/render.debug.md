# Render `{"label":"a"}`
```html
<button>
  x
</button>
<section>
  <em>
    static a
  </em>
</section>
```

# Update `{"label":"b"}`
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
UPDATE: section > em::text@7 "a" => "b"
```

# Update
```js
d.querySelector("button")?.click();
```
```html
<button>
  x
</button>
```
## Change
```
REMOVE: button + section
```

# Update `{"label":"c"}`
