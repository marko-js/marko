# Render `{"title":"t1","alt":false}`
```html
<main>
  <section>
    <h2>
      t1
    </h2>
    <em>
      A
    </em>
  </section>
</main>
```

# Update `{"title":"t2","alt":true}`
```html
<main>
  <section>
    <h2>
      t2
    </h2>
    <em>
      A
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "t1" => "t2"
```

## Patch rejected (navigate)
