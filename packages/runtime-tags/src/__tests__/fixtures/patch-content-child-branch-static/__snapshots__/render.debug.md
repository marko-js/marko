# Render `{"show":false}`
```html
<main>
  <section />
</main>
```

# Update `{"show":true}`
```html
<main>
  <section>
    <em>
      static
    </em>
  </section>
</main>
```
## Change
```
INSERT: main > section > em
```

# Update `{"show":true}`

# Update `{"show":false}`
```html
<main>
  <section />
</main>
```
## Change
```
REMOVE: main > section > em
```

# Update `{"show":true}`
```html
<main>
  <section>
    <em>
      static
    </em>
  </section>
</main>
```
## Change
```
INSERT: main > section > em
```
