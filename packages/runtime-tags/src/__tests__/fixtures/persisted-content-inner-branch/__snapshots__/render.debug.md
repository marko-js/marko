# Render `{"title":"a","show":false,"note":"x"}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
  </section>
</main>
```

# Update `{"title":"b","show":true,"note":"x"}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <em>
      x
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "a" => "b"
INSERT: main > section > h2 + em
UPDATE: main > section > em::text " " => "x"
```

# Update `{"title":"c","show":true,"note":"y"}`
```html
<main>
  <section>
    <h2>
      c
    </h2>
    <em>
      y
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "b" => "c"
UPDATE: main > section > em::text "x" => "y"
```

# Update `{"title":"d","show":false,"note":"y"}`
```html
<main>
  <section>
    <h2>
      d
    </h2>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "c" => "d"
REMOVE: main > section > h2 + em
```

# Update `{"title":"e","show":true,"note":"z"}`
```html
<main>
  <section>
    <h2>
      e
    </h2>
    <em>
      z
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "d" => "e"
INSERT: main > section > h2 + em
UPDATE: main > section > em::text " " => "z"
```
