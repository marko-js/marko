# Render `{"label":"a"}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    static a
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
