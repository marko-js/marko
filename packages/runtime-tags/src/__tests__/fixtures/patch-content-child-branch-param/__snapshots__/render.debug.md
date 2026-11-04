# Render `{"show":false,"item":{"name":"x"}}`
```html
<main>
  <section />
</main>
```

# Update `{"show":true,"item":{"name":"y"}}`
```html
<main>
  <section>
    <em>
      Y
    </em>
  </section>
</main>
```
## Change
```
INSERT: main > section > em
```

# Update `{"show":true,"item":{"name":"z"}}`
```html
<main>
  <section>
    <em>
      Z
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > em::text "Y" => "Z"
```

# Update `{"show":false,"item":{"name":"w"}}`
```html
<main>
  <section />
</main>
```
## Change
```
REMOVE: main > section > em
```

# Update `{"show":true,"item":{"name":"v"}}`
```html
<main>
  <section>
    <em>
      V
    </em>
  </section>
</main>
```
## Change
```
INSERT: main > section > em
```
