# Render `{"label":"a"}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    one a
  </em>
  <em>
    two a
  </em>
</section>
```

# Update `{"label":"b"}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    one b
  </em>
  <em>
    two b
  </em>
</section>
```
## Change
```
UPDATE: section > em:nth-of-type(1)::text@4 "a" => "b"
UPDATE: section > em:nth-of-type(2)::text@4 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
REMOVE: section > button + em
REMOVE: section > button + em
```

# Update `{"label":"c"}`
