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
INSERT: section:nth-of-type(1) + section
UPDATE: section:nth-of-type(1) > em::text@2 "a" => "b"
UPDATE: section:nth-of-type(2) > em::text@2 "" => "b"
UPDATE: section:nth-of-type(2) > em::text@0 "" => "2"
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
