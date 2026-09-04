# Render `{"show":false,"text":"x"}`
```html
<main />
```

# Update `{"show":true,"text":"x"}`
```html
<main>
  <section>
    <em>
      x
    </em>
  </section>
</main>
```
## Change
```
INSERT: main > section
INSERT: main > section > em
UPDATE: main > section > em::text " " => "x"
```

# Update `{"show":true,"text":"y"}`
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
UPDATE: main > section > em::text "x" => "y"
```

# Update `{"show":false,"text":"y"}`
```html
<main />
```
## Change
```
REMOVE: main > section
```

# Update `{"show":true,"text":"z"}`
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
INSERT: main > section
INSERT: main > section > em
UPDATE: main > section > em::text " " => "z"
```
