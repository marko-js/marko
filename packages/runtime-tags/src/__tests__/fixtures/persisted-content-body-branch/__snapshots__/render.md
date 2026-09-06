# Render `{"show":false,"title":"t","alt":false,"note":"x"}`
```html
<main />
```

# Update `{"show":true,"title":"t","alt":false,"note":"x"}`
```html
<main>
  <section>
    <h2>
      t
    </h2>
    <strong>
      B:x
    </strong>
  </section>
</main>
```
## Change
```
INSERT: main > section
UPDATE: main > section > h2::text " " => "t"
INSERT: main > section > h2 + strong
UPDATE: main > section > strong::text@2 "" => "x"
```

# Update `{"show":true,"title":"u","alt":false,"note":"y"}`
```html
<main>
  <section>
    <h2>
      u
    </h2>
    <strong>
      B:y
    </strong>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "t" => "u"
UPDATE: main > section > strong::text@2 "x" => "y"
```

# Update `{"show":true,"title":"u","alt":true,"note":"y"}`
```html
<main>
  <section>
    <h2>
      u
    </h2>
    <em>
      A:y
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "u" => "u"
REMOVE: main > section > h2 + strong
INSERT: main > section > h2 + em
UPDATE: main > section > em::text@2 "" => "y"
```

# Update `{"show":true,"title":"v","alt":true,"note":"z"}`
```html
<main>
  <section>
    <h2>
      v
    </h2>
    <em>
      A:z
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "u" => "v"
UPDATE: main > section > em::text@2 "y" => "z"
```

# Update `{"show":false,"title":"v","alt":true,"note":"z"}`
```html
<main />
```
## Change
```
REMOVE: main > section
```

# Update `{"show":true,"title":"w","alt":false,"note":"w"}`
```html
<main>
  <section>
    <h2>
      w
    </h2>
    <strong>
      B:w
    </strong>
  </section>
</main>
```
## Change
```
INSERT: main > section
UPDATE: main > section > h2::text " " => "w"
INSERT: main > section > h2 + strong
UPDATE: main > section > strong::text@2 "" => "w"
```
