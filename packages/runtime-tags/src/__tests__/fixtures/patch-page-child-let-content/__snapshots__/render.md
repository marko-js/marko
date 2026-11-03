# Render `{"user":{"name":"SHOWN_a","passwordHash":"SECRET_SHOWN_a"}}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    static
  </em>
  <p>
    SHOWN_a
  </p>
</section>
```

# Update `{"user":{"name":"SHOWN_b","passwordHash":"SECRET_SHOWN_b"}}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    static
  </em>
  <p>
    SHOWN_b
  </p>
</section>
```
## Change
```
UPDATE: section > p::text "SHOWN_a" => "SHOWN_b"
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
  <p>
    SHOWN_b
  </p>
</section>
```
## Change
```
REMOVE: section > button + em
```
