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
