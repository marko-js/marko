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
    <footer>
      <em>
        x
      </em>
    </footer>
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
    <footer>
      <em>
        y
      </em>
    </footer>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "a" => "b"
UPDATE: main > section > em::text "x" => "y"
UPDATE: main > section > footer > em::text "x" => "y"
```
