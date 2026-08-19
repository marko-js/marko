# Render `{"show":false}`
```html
<main />
```

# Update `{"show":true}`
```html
<main>
  <section>
    <h2>
      fixed
    </h2>
  </section>
</main>
```
## Change
```
INSERT: main > section
UPDATE: main > section > h2::text " " => "fixed"
```
