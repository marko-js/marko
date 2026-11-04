# Render `{"label":"a"}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    one a
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
</section>
```
## Change
```
UPDATE: section > em::text@4 "a" => "b"
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
```

# Update `{"label":"c"}`
