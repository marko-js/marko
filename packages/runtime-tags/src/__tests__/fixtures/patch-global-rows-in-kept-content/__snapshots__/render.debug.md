# Render `{"n":2,"$global":{"brand":"a","serializedGlobals":["brand"]}}`
```html
<section>
  <button>
    clear
  </button>
  <h1>
    a
  </h1>
  <p>
    a 0
  </p>
  <p>
    a 1
  </p>
</section>
```

# Update `{"n":2,"$global":{"brand":"b","serializedGlobals":["brand"]}}`
```html
<section>
  <button>
    clear
  </button>
  <h1>
    b
  </h1>
  <p>
    b 0
  </p>
  <p>
    b 1
  </p>
</section>
```
## Change
```
UPDATE: section > h1::text "a" => "b"
UPDATE: section > p:nth-of-type(1)::text@0 "a" => "b"
UPDATE: section > p:nth-of-type(2)::text@0 "a" => "b"
```
