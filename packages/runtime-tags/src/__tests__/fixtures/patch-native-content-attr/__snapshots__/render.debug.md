# Render `{"mode":"a","note":"one"}`
```html
<main>
  <section>
    <em>
      alpha
    </em>
  </section>
  <p>
    one
  </p>
</main>
```

# Update `{"mode":"a","note":"two"}`
```html
<main>
  <section>
    <em>
      alpha
    </em>
  </section>
  <p>
    two
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "one" => "two"
```

# Update `{"mode":"b","note":"three"}`
```html
<main>
  <section>
    <strong>
      beta
    </strong>
  </section>
  <p>
    three
  </p>
</main>
```
## Change
```
REMOVE: main > section > em
INSERT: main > section > strong
UPDATE: main > p::text "two" => "three"
```
