# Render `{"title":"a","note":"x"}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <em>
      x
    </em>
  </section>
</main>
```

# Update `{"title":"b","note":"y"}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <em>
      y
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "a" => "b"
UPDATE: main > section > em::text "x" => "y"
```

# Update `{"title":"b","note":"z"}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <em>
      z
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "b" => "b"
UPDATE: main > section > em::text "y" => "z"
```
