# Render `{"show":false,"value":"x"}`
```html
<main />
```

# Update `{"show":true,"value":"x"}`
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
```

# Update `{"show":true,"value":"y"}`
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

# Update `{"show":false,"value":"y"}`
```html
<main />
```
## Change
```
REMOVE: main > section
```

# Update `{"show":true,"value":"z"}`
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
```
