# Render `{"label":"a"}`
```html
<button>
  switch
</button>
<p>
  <em>
    a
  </em>
</p>
```

# Update `{"label":"b"}`
```html
<button>
  switch
</button>
<p>
  <em>
    b
  </em>
</p>
```
## Change
```
UPDATE: p > em::text "a" => "b"
```

# Update
```js
d.querySelector("button")?.click();
```
```html
<button>
  switch
</button>
<p>
  <b>
    other
  </b>
</p>
```
## Change
```
INSERT: p > b
REMOVE: p > b + em
```

# Update `{"label":"c"}`
