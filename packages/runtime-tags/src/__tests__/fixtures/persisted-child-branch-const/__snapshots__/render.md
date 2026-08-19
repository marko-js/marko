# Render `{"show":false,"note":"a"}`
```html
<main>
  <section />
</main>
```

# Update `{"show":true,"note":"b"}`
```html
<main>
  <section>
    <h2
      class="fixed"
    >
      fixed
    </h2>
    <p>
      b
    </p>
  </section>
</main>
```
## Change
```
INSERT: main > section > :is(.fixed, p)
UPDATE: .fixed[class] null => "fixed"
UPDATE: .fixed::text " " => "fixed"
UPDATE: main > section > p::text " " => "b"
```

# Update `{"show":true,"note":"c"}`
```html
<main>
  <section>
    <h2
      class="fixed"
    >
      fixed
    </h2>
    <p>
      c
    </p>
  </section>
</main>
```
## Change
```
UPDATE: .fixed::text "fixed" => "fixed"
UPDATE: main > section > p::text "b" => "c"
```
