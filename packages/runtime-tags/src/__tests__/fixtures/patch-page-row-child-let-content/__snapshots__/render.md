# Render `{"label":"a","rows":[{"id":1,"user":{"name":"SHOWN_a","passwordHash":"SECRET_SHOWN_a"}}]}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    1 a
  </em>
  <p>
    SHOWN_a
  </p>
</section>
```

# Update `{"label":"b","rows":[{"id":1,"user":{"name":"SHOWN_a","passwordHash":"SECRET_SHOWN_a"}},{"id":2,"user":{"name":"SHOWN_b","passwordHash":"SECRET_SHOWN_b"}}]}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    1 b
  </em>
  <p>
    SHOWN_a
  </p>
</section>
<section>
  <button>
    clear
  </button>
  <em>
    2 b
  </em>
  <p>
    SHOWN_b
  </p>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > em::text@2 "a" => "b"
INSERT: section:nth-of-type(1) + section
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
    SHOWN_a
  </p>
</section>
<section>
  <button>
    clear
  </button>
  <em>
    2 b
  </em>
  <p>
    SHOWN_b
  </p>
</section>
```
## Change
```
REMOVE: section:nth-of-type(1) > button + em
```
