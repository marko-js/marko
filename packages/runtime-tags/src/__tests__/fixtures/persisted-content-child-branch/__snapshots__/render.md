# Render `{"show":false,"note":"x"}`
```html
<main>
  <section />
</main>
```

# Update `{"show":true,"note":"y"}`
```html
<main>
  <section>
    <em>
      y
    </em>
  </section>
</main>
```
## Change
```
INSERT: main > section > em
UPDATE: main > section > em::text " " => "y"
```

# Update `{"show":true,"note":"z"}`
```html
<main>
  <section>
    <em>
      z
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > em::text "y" => "z"
```

# Update `{"show":false,"note":"w"}`
```html
<main>
  <section />
</main>
```
## Change
```
REMOVE: main > section > em
```

# Update `{"show":true,"note":"v"}`
```html
<main>
  <section>
    <em>
      v
    </em>
  </section>
</main>
```
## Change
```
INSERT: main > section > em
UPDATE: main > section > em::text " " => "v"
```
