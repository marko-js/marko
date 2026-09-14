# Render `{"title":"a","note":"x"}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <div>
      <em>
        x
      </em>
    </div>
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
    <div>
      <em>
        y
      </em>
    </div>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "a" => "b"
UPDATE: main > section > div > em::text "x" => "y"
```
