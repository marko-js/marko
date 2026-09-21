# Render `{"show":false,"title":"a","note":"x"}`
```html
<main />
```

# Update `{"show":true,"title":"b","note":"y"}`
```html
<main>
  <section>
    <h2>
      b
    </h2>
    <em>
      y
    </em>
  </section>
</main>
```
## Change
```
INSERT: main > section
```
